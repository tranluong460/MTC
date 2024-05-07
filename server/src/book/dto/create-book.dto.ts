import { IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty({ message: 'Tên sách không được để trống' })
  name: string;

  slug: string;

  @IsNotEmpty({ message: 'Mô tả sách không được để trống' })
  synopsis: string;

  @IsNotEmpty({ message: 'Bìa sách không được để trống' })
  poster: string;

  user_id: string;

  @IsNotEmpty({ message: 'Id danh mục không được để trống' })
  category_id: string;

  @IsNotEmpty({ message: 'Id bối cảnh thế giới không được để trống' })
  world_id: string;

  @IsNotEmpty({ message: 'Id lưu phái không được để trống' })
  faction_id: string;

  @IsNotEmpty({ message: 'Id tác giả không được để trống' })
  author_id: string;
}
