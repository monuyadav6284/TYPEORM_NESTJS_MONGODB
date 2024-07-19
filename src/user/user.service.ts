import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }



    async create(user: User): Promise<User> {
        return this.userRepository.save(user);
    }


    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}
