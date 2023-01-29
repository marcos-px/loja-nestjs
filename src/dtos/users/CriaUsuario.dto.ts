import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import constants from 'src/config/constants.config';
import { UniqueEmail } from 'src/validations/unique-email.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: constants.STATUS.MESSAGES.ERROR.NOMENOTEMPTY })
  nome: string;

  @IsEmail(undefined, { message: constants.STATUS.MESSAGES.ERROR.EMAILINVALID })
  @UniqueEmail({ message: constants.STATUS.MESSAGES.ERROR.USEREXISTS })
  email: string;

  @MinLength(6, { message: constants.STATUS.MESSAGES.ERROR.MISSINGPASSWORD })
  senha: string;
}
