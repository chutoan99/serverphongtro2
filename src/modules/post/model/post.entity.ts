import { AttributeEntity } from 'src/modules/attribute/model/attribute.entity';
import { ImageEntity } from 'src/modules/image/model/image.entity';
import { OverviewEntity } from 'src/modules/overview/model/overview.entity';
import {
  Entity,
  Column,
  OneToOne,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';

import { v4 as uuidv4 } from 'uuid';

@Entity('Posts')
export class PostEntity {
  @PrimaryColumn('uuid', { default: uuidv4() })
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  start: string;

  @Column()
  labelCode: string;

  @Column()
  address: string;

  @Column()
  attributesId: string;

  @Column()
  categoryCode: string;

  @Column()
  priceCode: string;

  @Column()
  areaCode: string;

  @Column()
  provinceCode: string;

  @Column('text')
  description: string;

  @Column()
  userId: string;

  @Column()
  overviewId: string;

  @Column()
  imagesId: string;

  @Column('float')
  priceNumber: number;

  @Column('float')
  areaNumber: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => ImageEntity, (image) => image.post)
  images: ImageEntity;

  @OneToOne(() => AttributeEntity, (attribute) => attribute.post)
  attributes: AttributeEntity;

  @OneToOne(() => OverviewEntity, (overview) => overview.post)
  overviews: OverviewEntity;

  // @ManyToOne(() => UserEntity, (user) => user.posts)
  // user: UserEntity[];
}