import { IsNotEmpty } from 'class-validator';

export class CreateWorldDto {
  @IsNotEmpty({ message: 'Tên bối cảnh thế giới không được để trống' })
  name: string;

  slug: string;
}
