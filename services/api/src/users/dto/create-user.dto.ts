import { Language } from '@sabiguide/shared-types';

export class CreateUserDto {
  phone: string;
  fullName: string;
  language: Language;
}
