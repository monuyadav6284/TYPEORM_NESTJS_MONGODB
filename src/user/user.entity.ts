import { Entity, Column, ObjectIdColumn } from 'typeorm';

@Entity()
export class User {
    @ObjectIdColumn()
    id: string;

    @Column()
    username: string;

    @Column()
    email: string;


}
