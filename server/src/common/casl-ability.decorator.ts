import { SetMetadata } from '@nestjs/common';

import { Action, Subjects } from '../ability/casl-ability.factory';

export const CHECK_ABILITY = 'CHECK_ABILITY';

export interface RequiredRule {
  action: Action;
  subject: Subjects;
}

export const CheckAbilities = (...requirements: RequiredRule[]) =>
  SetMetadata('CHECK_ABILITY', requirements);
