export {};

declare module 'express-session' {
    export interface SessionData {
        email: string;
    }
}