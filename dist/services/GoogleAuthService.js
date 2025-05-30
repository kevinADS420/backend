"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAuthService = void 0;
const passport_1 = __importDefault(require("passport"));
const passport_google_oauth20_1 = require("passport-google-oauth20");
const google_config_1 = require("../config/google.config");
const CustomerService_1 = require("./CustomerService");
class GoogleAuthService {
    constructor() {
        this.FRONTEND_URL = 'https://huertomkt.netlify.app';
        this.FRONTEND_SUCCESS_URL = `${this.FRONTEND_URL}`;
        this.FRONTEND_FAILURE_URL = `${this.FRONTEND_URL}/registro`;
        this.customerService = new CustomerService_1.CustomerService();
        this.initializePassport();
    }
    initializePassport() {
        passport_1.default.use(new passport_google_oauth20_1.Strategy({
            clientID: google_config_1.googleConfig.clientID,
            clientSecret: google_config_1.googleConfig.clientSecret,
            callbackURL: google_config_1.googleConfig.callbackURL,
            scope: google_config_1.googleConfig.scope
        }, (accessToken, refreshToken, profile, done) => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c, _d;
            try {
                console.log('Google profile:', profile);
                const email = ((_b = (_a = profile.emails) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.value) || '';
                const googleId = profile.id;
                const nombres = ((_c = profile.name) === null || _c === void 0 ? void 0 : _c.givenName) || '';
                const apellidos = ((_d = profile.name) === null || _d === void 0 ? void 0 : _d.familyName) || '';
                // Verificar si el usuario existe o crearlo como cliente
                let customer = yield this.customerService.findByEmail(email);
                if (!customer) {
                    customer = yield this.customerService.create({
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
                const user = {
                    id_cliente: customer.id_cliente,
                    Email: customer.Email,
                    Nombres: customer.Nombres,
                    Apellidos: customer.Apellidos,
                    role: customer.role || 'cliente',
                    googleId: googleId
                };
                return done(null, user);
            }
            catch (error) {
                console.error('Error en la autenticación de Google:', error);
                return done(error);
            }
        })));
        passport_1.default.serializeUser((user, done) => {
            console.log('Serializando usuario:', user);
            done(null, user);
        });
        passport_1.default.deserializeUser((user, done) => {
            console.log('Deserializando usuario:', user);
            done(null, user);
        });
    }
    authenticateGoogle() {
        return passport_1.default.authenticate('google', {
            scope: google_config_1.googleConfig.scope
        });
    }
    handleGoogleCallback() {
        return (req, res, next) => {
            passport_1.default.authenticate('google', (err, user) => {
                if (err) {
                    return res.status(500).json({
                        status: 'error',
                        message: 'Error en la autenticación de Google',
                        error: err.message
                    });
                }
                if (!user) {
                    return res.status(401).json({
                        status: 'error',
                        message: 'No se pudo autenticar con Google'
                    });
                }
                req.logIn(user, (err) => {
                    if (err) {
                        return res.status(500).json({
                            status: 'error',
                            message: 'Error al iniciar sesión',
                            error: err.message
                        });
                    }
                    // Enviar los datos del usuario como JSON
                    return res.status(200).json({
                        status: 'success',
                        message: 'Autenticación exitosa',
                        data: {
                            id: user.id_cliente,
                            email: user.Email,
                            nombres: user.Nombres,
                            apellidos: user.Apellidos,
                            role: user.role,
                            googleId: user.googleId
                        }
                    });
                });
            })(req, res, next);
        };
    }
    isAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.status(401).json({ error: 'No autenticado' });
    }
    logout(req, res) {
        req.logout(() => {
            res.status(200).json({ success: true });
        });
    }
    checkAuth(req, res) {
        if (req.isAuthenticated()) {
            return res.json(req.user);
        }
        res.status(401).json({ message: 'No autenticado' });
    }
}
exports.GoogleAuthService = GoogleAuthService;
