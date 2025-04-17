import dotenv from 'dotenv';

dotenv.config();

export const googleConfig = {
    clientID: process.env.GOOGLE_CLIENT_ID || '',
    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    callbackURL: process.env.GOOGLE_CALLBACK_URL || 'https://huertomkt.netlify.app/auth/google/callback',
    scope: ['profile', 'email']
}; 