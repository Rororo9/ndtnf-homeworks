import { Injectable } from '@nestjs/common';
import { User } from '../infrastructure/user.interface.ts';

@Injectable()
export class UserService {
    private readonly users: User[] = [
        {
            id: 1,
            email: 'ivan@mail.ru',
            password: '123456',
            firstName: 'Ivan',
            lastName: 'Petrov',
        },
        {
            id: 2,
            email: 'anna@mail.ru',
            password: 'anna123',
            firstName: 'Anna',
            lastName: 'Ivanova',
        },
    ];

    async create(data: User): Promise<boolean> {
        const existingUser = this.users.find((user) => user.email === data.email);

        if (existingUser) return false;

        this.users.push(existingUser);

        return true;
    }

    async findById(id: number): Promise<User | undefined> {
        return this.users.find((user) => user.id === id);
    }

    async findByEmail(email: string): Promise<User | undefined> {
        return this.users.find((user) => user.email === email);
    }

    async getUsers(): Promise<User[]> {
        return this.users;
    }
}