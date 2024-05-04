import { IsNotEmpty } from 'class-validator';

export class CreateAuthorDto {
  @IsNotEmpty({ message: 'Tên tác giả không được để trống' })
  name: string;

  slug: string;
}
