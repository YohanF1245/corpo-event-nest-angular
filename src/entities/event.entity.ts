import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Location } from './location.entity';
import { Comment } from './comment.entity';

@Entity('event')
export class Event {
  @PrimaryGeneratedColumn('uuid')
  event_id: string;

  @Column()
  event_name: string;

  @Column()
  event_description: string;

  @Column()
  starts_at: Date;

  @Column()
  created_at: Date;

  @Column()
  finish_at: Date;

  @ManyToOne(() => Location, location => location.events)
  location: Location;

  @ManyToOne(() => User, user => user.events)
  user: User;

  @OneToMany(() => Comment, comment => comment.event)
  comments: Comment[];
} 