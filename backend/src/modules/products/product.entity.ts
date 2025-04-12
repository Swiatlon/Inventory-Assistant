import { Entity, ObjectIdColumn, ObjectId, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Products')
export class Product {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Column('double')
  price: number;

  @Column()
  category: string;

  @Column()
  store: string;

  @Column({ nullable: true })
  barcode?: string;

  @Column({ nullable: true })
  brand?: string;

  @Column('double', { nullable: true })
  weight?: number;

  @Column({ nullable: true })
  weightUnit?: string;

  @Column({ nullable: true })
  unit?: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
