import { AnyClass } from '@casl/ability/dist/types/types';
import { applyDecorators, UseGuards } from '@nestjs/common';
import { SubjectBeforeFilterHook, SubjectBeforeFilterTuple } from '../interfaces/hooks.interface';
import { AuthorizableRequest } from "../interfaces/request.interface";
import { AccessGuard } from '../access.guard';
import { SetAbility } from './set-ability';

export function UseAbility<Subject = any, Request = AuthorizableRequest>(
  action: string,
  subject: AnyClass<Subject>,
  subjectHook?: AnyClass<SubjectBeforeFilterHook<Subject, Request>> | SubjectBeforeFilterTuple<Subject, Request>,
) {
  return applyDecorators(
    SetAbility(action, subject, subjectHook),
    UseGuards(AccessGuard)
  );
}
