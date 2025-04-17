import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { googleConfig } from '../config/google.config';
import { Request, Response, NextFunction } from 'express';
import { CustomerService } from './CustomerService';

// Extend the Express Request type to include our custom user
declare global {
    namespace Express {
        interface User extends GoogleUser {}
    }
}

interface GoogleUser {
    id_cliente: number;
    Email: string;
    Nombres: string;
    Apellidos: string;
    role: string;
    googleId: string;
}

export class GoogleAuthService {
    private readonly FRONTEND_URL = 'https://huertomkt.netlify.app';
    private readonly FRONTEND_SUCCESS_URL = `${this.FRONTEND_URL}`;
    private readonly FRONTEND_FAILURE_URL = `${this.FRONTEND_URL}/registro`;
    private customerService: CustomerService;

    constructor() {
        this.customerService = new CustomerService();
        this.initializePassport();
    }

    private initializePassport(): void {
        passport.use(new GoogleStrategy({
            clientID: googleConfig.clientID,
            clientSecret: googleConfig.clientSecret,
            callbackURL: googleConfig.callbackURL,
            scope: googleConfig.scope
        }, async (accessToken, refreshToken, profile, done) => {
            try {
                console.log('Google profile:', profile);
                const email = profile.emails?.[0]?.value || '';
                const googleId = profile.id;
                const nombres = profile.name?.givenName || '';
                const apellidos = profile.name?.familyName || '';
                
                // Verificar si el usuario existe o crearlo como cliente
                let customer = await this.customerService.findByEmail(email);
                if (!customer) {
                    customer = await this.customerService.create({
                        Email: email,
                        Nombres: nombres,
                        Apellidos: apellidos,
                        googleId: googleId,
                        role: 'cliente'
                    });
                }

                if (!customer) {
                    throw new Error('No se pudo crear o encontrar el cliente');
                }

                // Crear el objeto de usuario con todos los datos necesarios
                const user: GoogleUser = {
                    id_cliente: customer.id_cliente,
                    Email: customer.Email,
                    Nombres: customer.Nombres,
                    Apellidos: customer.Apellidos,
                    role: customer.role || 'cliente',
                    googleId: googleId
                };

                return done(null, user);
            } catch (error) {
                console.error('Error en la autenticación de Google:', error);
                return done(error as Error);
            }
        }));

        passport.serializeUser((user, done) => {
            console.log('Serializando usuario:', user);
            done(null, user);
        });

        passport.deserializeUser((user: Express.User, done) => {
            console.log('Deserializando usuario:', user);
            done(null, user);
        });
    }

    public authenticateGoogle() {
        return passport.authenticate('google', {
            scope: googleConfig.scope
        });
    }

    public handleGoogleCallback() {
        return (req: Request, res: Response, next: NextFunction) => {
            passport.authenticate('google', (err: any, user: GoogleUser) => {
                if (err) {
                    return res.redirect(this.FRONTEND_FAILURE_URL);
                }
                if (!user) {
                    return res.redirect(this.FRONTEND_FAILURE_URL);
                }

                req.logIn(user, (err) => {
                    if (err) {
                        return res.redirect(this.FRONTEND_FAILURE_URL);
                    }
                    
                    // Redirigir al usuario a la página principal en lugar de /dashboard
                    return res.redirect(this.FRONTEND_SUCCESS_URL);
                });
            })(req, res, next);
        };
    }

    public isAuthenticated(req: Request, res: Response, next: NextFunction) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.status(401).json({ error: 'No autenticado' });
    }

    public logout(req: Request, res: Response) {
        req.logout(() => {
            res.status(200).json({ success: true });
        });
    }

    public checkAuth(req: Request, res: Response) {
        if (req.isAuthenticated()) {
            return res.json(req.user);
        }
        res.status(401).json({ message: 'No autenticado' });
    }
} 