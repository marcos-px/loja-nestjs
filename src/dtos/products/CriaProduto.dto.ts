import { Type } from 'class-transformer';

import {
  ValidateNested,
  IsArray,
  IsNotEmpty,
  IsPositive,
  IsNumber,
  MaxLength,
  ArrayMinSize,
  IsString,
  IsUrl,
  IsUUID,
} from 'class-validator';
import constants from 'src/config/constants.config';

export class CaracteristicaProdutoDTO {
  @IsString()
  @IsNotEmpty({ message: constants.STATUS.MESSAGES.ERROR.NOMENOTEMPTY })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: constants.STATUS.MESSAGES.ERROR.NOMENOTEMPTY })
  descricao: string;
}

export class ImagemProdutoDTO {
  @IsUrl(undefined, { message: constants.STATUS.MESSAGES.ERROR.INVALIDURL })
  url: string;

  @IsString()
  @IsNotEmpty({ message: constants.STATUS.MESSAGES.ERROR.ISNOTEMPTY })
  descricao: string;
}

export class CriaProdutoDTO {
  @IsUUID(undefined, { message: constants.STATUS.MESSAGES.ERROR.INVALIDID })
  usuarioId: string;

  @IsString()
  @IsNotEmpty({ message: constants.STATUS.MESSAGES.ERROR.NOMENOTEMPTY })
  nome: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @IsPositive({ message: constants.STATUS.MESSAGES.ERROR.MINVALUE })
  valor: number;

  @IsNumber()
  @IsPositive()
  quantidade: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(1000)
  descricao: string;

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(2)
  @Type(() => CaracteristicaProdutoDTO)
  caracteristicas: CaracteristicaProdutoDTO[];

  @IsArray()
  @ValidateNested({ each: true })
  @ArrayMinSize(1)
  @Type(() => ImagemProdutoDTO)
  imagens: ImagemProdutoDTO[];

  @IsNotEmpty()
  categoria: string;
}
