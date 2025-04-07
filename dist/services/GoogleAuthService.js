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
class GoogleAuthService {
    constructor() {
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
                // Aquí puedes agregar la lógica para guardar o actualizar el usuario en tu base de datos
                const user = {
                    id: profile.id,
                    displayName: profile.displayName,
                    email: ((_b = (_a = profile.emails) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.value) || '',
                    picture: (_d = (_c = profile.photos) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.value
                };
                return done(null, user);
            }
            catch (error) {
                return done(error);
            }
        })));
        passport_1.default.serializeUser((user, done) => {
            done(null, user);
        });
        passport_1.default.deserializeUser((user, done) => {
            done(null, user);
        });
    }
    authenticateGoogle() {
        return passport_1.default.authenticate('google', {
            scope: google_config_1.googleConfig.scope
        });
    }
    handleGoogleCallback() {
        return passport_1.default.authenticate('google', {
            failureRedirect: '/login',
            successRedirect: '/dashboard'
        });
    }
    isAuthenticated(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    }
    logout(req, res) {
        req.logout(() => {
            res.redirect('/');
        });
    }
}
exports.GoogleAuthService = GoogleAuthService;
