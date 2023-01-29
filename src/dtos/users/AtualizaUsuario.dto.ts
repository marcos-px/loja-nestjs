import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import constants from 'src/config/constants.config';
import { UniqueEmail } from 'src/validations/unique-email.validator';

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: constants.STATUS.MESSAGES.ERROR.NOMENOTEMPTY })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: constants.STATUS.MESSAGES.ERROR.EMAILINVALID })
  @UniqueEmail({ message: constants.STATUS.MESSAGES.ERROR.USEREXISTS })
  @IsOptional()
  email: string;

  @MinLength(6, { message: constants.STATUS.MESSAGES.ERROR.MISSINGPASSWORD })
  @IsOptional()
  senha: string;
}
