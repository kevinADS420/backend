import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { googleConfig } from '../config/google.config';
import { Request, Response, NextFunction } from 'express';

interface GoogleUser {
    id: string;
    displayName: string;
    email: string;
    picture?: string;
}

export class GoogleAuthService {
    constructor() {
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
                // Aquí puedes agregar la lógica para guardar o actualizar el usuario en tu base de datos
                const user: GoogleUser = {
                    id: profile.id,
                    displayName: profile.displayName,
                    email: profile.emails?.[0]?.value || '',
                    picture: profile.photos?.[0]?.value
                };
                return done(null, user);
            } catch (error) {
                return done(error as Error);
            }
        }));

        passport.serializeUser((user: any, done) => {
            done(null, user);
        });

        passport.deserializeUser((user: any, done) => {
            done(null, user);
        });
    }

    public authenticateGoogle() {
        return passport.authenticate('google', {
            scope: googleConfig.scope
        });
    }

    public handleGoogleCallback() {
        return passport.authenticate('google', {
            failureRedirect: '/login',
            successRedirect: '/dashboard'
        });
    }

    public isAuthenticated(req: Request, res: Response, next: NextFunction) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    }

    public logout(req: Request, res: Response) {
        req.logout(() => {
            res.redirect('/');
        });
    }
} 