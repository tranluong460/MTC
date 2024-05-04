import { Injectable } from '@nestjs/common';
import {
  AbilityBuilder,
  MongoAbility,
  createMongoAbility,
} from '@casl/ability';

import { User } from '../user/entities/user.entity';

export enum Action {
  Manage = 'manage',
  Publish = 'publish',
  View = 'view',
  Read = 'read',
  Create = 'create',
  Update = 'update',
  Delete = 'delete',
}

export enum Subjects {
  All = 'all',
  Auth = 'auth',
  Ability = 'ability',
  Role = 'role',
  User = 'user',
}

export type AppAbility = MongoAbility<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {
  defineAbilityFor(user: User) {
    const { can, build } = new AbilityBuilder<AppAbility>(createMongoAbility);

    if (user?.roles_list.some((role) => role.name === 'administrator')) {
      can(Action.Manage, Subjects.All);
    } else {
      can(Action.Publish, Subjects.Auth);
      can(Action.Publish, Subjects.User);
    }

    user?.abilities_list.map(({ action, subject }) => {
      can(action as Action, subject as Subjects);
    });

    return build({
      detectSubjectType: (item: any) => item.constructor,
    });
  }
}