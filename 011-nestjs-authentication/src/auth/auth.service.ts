import { ConflictException, Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from '../users/user.service';
import {JwtService} from '@nestjs/jwt';
import {User} from '../infrastructure/user.interface';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService,
    ) {}

    async signUp(data: User): Promise<any> {
        const result = await this.usersService.create(data);

        if (!result) {
            throw new ConflictException('Error. The user is already exist.');
        }

        return true;
    }

    async signIn(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        if (user?.password !== password) {
            throw new UnauthorizedException();
        }

        const payload = {
            id: user.id,
            email: user.email,
            firstName: user.firstName,
        };

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async validateUser(id: number): Promise<any> {
        const user = await this.usersService.findById(id);

        if (user) {
            return user;
        }

        return null;
    }

    async getUsers(): Promise<any> {
        return await this.usersService.getUsers();
    }
}