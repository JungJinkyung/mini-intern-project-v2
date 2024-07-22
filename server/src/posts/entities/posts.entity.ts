import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('posts')
export class Post {
  // 데이터가 새로 생성 될 때 마다 1씩 올려준다.
  @PrimaryGeneratedColumn('increment', { type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'varchar', length: 45 })
  nickname: string;

  @Column({ type: 'varchar', length: 45 })
  category: string;

  @Column({ type: 'varchar', length: 45 })
  view_count: number;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'varchar', length: 255 })
  content: string;

  @Column({ type: 'varchar', length: 255 })
  created_time: string;

  @Column({ type: 'varchar', length: 255 })
  hashtag: string;

  @Column('json', { nullable: true })
  comments: { nickname: string; content: string; created_time: string }[];
}
