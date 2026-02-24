import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateGastoDto {
    @IsString()
    @IsNotEmpty({ message: 'El tipo es obligatorio' })
    type: string;

    @IsString()
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    name: string;

    @IsNumber({}, { message: 'La cantidad debe ser un número' })
    @Min(0, { message: 'La cantidad no puede ser negativa' })
    amount: number;
}