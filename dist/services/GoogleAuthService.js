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
            var _a, _b;
            try {
                console.log('Google profile:', profile);
                const email = ((_b = (_a = profile.emails) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.value) || '';
                // Verificar si el usuario existe o crearlo como cliente
                let customer = yield this.customerService.findByEmail(email);
                if (!customer) {
                    customer = yield this.customerService.create({
                        email: email,
                        name: profile.displayName,
                        // Otros campos necesarios con valores por defecto
                    });
                }
                const user = {
                    id: customer.id,
                    email: customer.email,
                    role: 'cliente'
                };
                return done(null, user);
            }
            catch (error) {
                console.error('Error en callback de Google:', error);
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
