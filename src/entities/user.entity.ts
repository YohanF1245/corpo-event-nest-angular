import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Role } from './role.entity';
import { Event } from './event.entity';
import { Comment } from './comment.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  pass: string;

  @Column()
  mail: string;

  @ManyToOne(() => Role, role => role.users)
  role: Role;

  @OneToMany(() => Event, event => event.user)
  events: Event[];

  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];
} 