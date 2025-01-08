import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Event } from './event.entity';

@Entity('locations')
export class Location {
  @PrimaryGeneratedColumn('uuid')
  location_id: string;

  @Column()
  location_name: string;

  @OneToMany(() => Event, event => event.location)
  events: Event[];
} 