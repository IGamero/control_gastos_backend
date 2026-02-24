import { IsString, IsNotEmpty, IsNumber, Min, IsOptional } from 'class-validator';

export class UpdateGastoDto {
    @IsString()
    @IsNotEmpty({ message: 'El tipo no puede estar vacío' })
    @IsOptional()
    type?: string;

    @IsString()
    @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
    @IsOptional()
    name?: string;

    @IsNumber({}, { message: 'La cantidad debe ser un número' })
    @Min(0, { message: 'La cantidad no puede ser negativa' })
    @IsOptional()
    amount?: number;
}