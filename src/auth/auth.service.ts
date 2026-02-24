import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    login(username: string, password: string) {
        // Reemplazar con llamada a bbdd
        if (username === 'admin' && password === 'admin') {
            return {
                token: 'fake-jwt-token',
                user: { username: 'admin' },
            };
        }
        return null;
    }
}