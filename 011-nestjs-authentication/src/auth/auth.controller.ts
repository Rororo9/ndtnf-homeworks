import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { User } from '../infrastructure/user.interface';
import { JwtAuthGuard } from './guard/auth.guard';

@Controller('/users')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/sign_in')
    signIn(@Body() data: Record<string, string>) {
        return this.authService.signIn(data.email, data.password);
    }

    @Post('/sign_up')
    signUp(@Body() data: User) {
        return this.authService.signUp(data);
    }

    @UseGuards(JwtAuthGuard)
    @Get('/all')
    getUsers() {
        return this.authService.getUsers();
    }
}