import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Event } from './event.entity';

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  comment_id: string;

  @Column()
  comment_body: string;

  @Column()
  created_at: Date;

  @ManyToOne(() => Event, event => event.comments)
  event: Event;

  @ManyToOne(() => User, user => user.comments)
  user: User;
} 