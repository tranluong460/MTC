import { IsNotEmpty } from 'class-validator';

export class CreateFactionDto {
  @IsNotEmpty({ message: 'Tên lưu phái không được để trống' })
  name: string;

  slug: string;
}
