import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { Gasto } from './dto/gasto.interface';

@Injectable()
export class GastosService {
    private gastos: Gasto[] = [
        { id: randomUUID(), name: 'hipoteca', amount: 600, type: 'casa' },
        { id: randomUUID(), name: 'supermercado', amount: 50, type: 'compra' },
        { id: randomUUID(), name: 'cine', amount: 30, type: 'ocio' },
        { id: randomUUID(), name: 'ahorro', amount: 150, type: 'ahorros' },
    ];

    // Obtener un gasto por id
    async getGasto(id: string): Promise<Gasto> {
        const gasto = this.gastos.find(g => g.id === id);
        if (!gasto) throw new NotFoundException('Gasto no encontrado');
        return gasto;
    }

    // Obtener todos los gastos
    async getGastos(): Promise<Gasto[]> {
        return this.gastos;
    }

    // Crear gasto
    async createGasto(gastoDto: CreateGastoDto): Promise<Gasto> {
        const gasto: Gasto = {
            id: randomUUID(),
            ...gastoDto,
        };
        this.gastos.push(gasto);
        return gasto;
    }

    // Actualizar gasto
    async updateGasto(id: string, newGastoDto: UpdateGastoDto): Promise<Gasto> {
        const gasto = await this.getGasto(id);

        gasto.type = newGastoDto.type ?? gasto.type;
        gasto.name = newGastoDto.name ?? gasto.name;
        gasto.amount = newGastoDto.amount ?? gasto.amount;

        return gasto;
    }

    // Eliminar gasto
    async deleteGasto(id: string): Promise<{ message: string }> {
        const index = this.gastos.findIndex(g => g.id === id);

        if (index === -1) throw new NotFoundException('Gasto no encontrado');

        this.gastos.splice(index, 1);

        return { message: 'Gasto eliminado correctamente' };
    }
}