import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty({ message: 'Vui lòng nhập tên vai trò' })
  @IsString({ message: 'Tên vai trò phải là chuỗi ký tự' })
  name: string;

  @IsNotEmpty({ message: 'Vui lòng chọn trạng thái' })
  @IsBoolean({ message: 'Trạng thái phải là true hoặc false' })
  default: boolean;
}
