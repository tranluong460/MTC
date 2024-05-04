import {
  IsNotEmpty,
  Validate,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

import { Action, Subjects } from '../casl-ability.factory';

@ValidatorConstraint({ name: 'isValidEnum', async: false })
export class IsValidEnum implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const [enumType] = args.constraints;

    if (value && enumType && Object.values(enumType).includes(value)) {
      return true;
    }

    return false;
  }

  defaultMessage(args: ValidationArguments) {
    const [enumType] = args.constraints;

    return `${args.property} không hợp lệ. ${args.property} phải là một trong: ${Object.values(enumType).join(', ')}`;
  }
}

export class CreateAbilityDto {
  @Validate(IsValidEnum, [Action])
  @IsNotEmpty({ message: 'Hành động không được để trống' })
  action: string;

  @Validate(IsValidEnum, [Subjects])
  @IsNotEmpty({ message: 'Chủ thể không được để trống' })
  subject: string;
}
