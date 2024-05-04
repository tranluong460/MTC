import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
} from 'class-validator';

@ValidatorConstraint({ name: 'PasswordMatches', async: false })
class PasswordMatches {
  validate(value: any, args: ValidationArguments) {
    return args.object['password'] === value;
  }
}

export class RegisterAuthDto {
  @IsEmail({}, { message: 'Email không đúng định dạng' })
  @IsNotEmpty({ message: 'Email không được để trống' })
  email: string;

  @IsNotEmpty({ message: 'Mật khẩu không được để trống' })
  @MinLength(8, { message: 'Mật khẩu phải có độ dài tối thiểu 8 ký tự' })
  password: string;

  @Validate(PasswordMatches, { message: 'Hai mật khẩu không khớp' })
  confirm_password: string;
}
