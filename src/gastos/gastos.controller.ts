import { Body, Controller, Delete, Get, Headers, Param, Post, Put, UnauthorizedException, UseGuards } from '@nestjs/common';
import { GastosService } from './gastos.service';
import { AuthGuard } from 'src/auth/authGuard/auth.guard';

@UseGuards(AuthGuard) // protege todo el controller
@Controller('gastos')
export class GastosController {
    constructor(private readonly gastosService: GastosService) { }
    @Get(':id')
    getGasto(
        @Param('id') id: string,
        @Headers('authorization') authHeader: string
    ) {

        return this.gastosService.getGasto(id);
    }

    @Get()
    getGastos(
        @Headers('authorization') authHeader: string
    ) {
        return this.gastosService.getGastos();
    }

    @Post()
    createGasto(
        @Headers('authorization') authHeader: string,
        @Body() body: any
    ) {
        return this.gastosService.createGasto(body);
    }

    @Put(':id')
    updateGasto(
        @Param('id') id: string,
        @Body() body: any,
        @Headers('authorization') authHeader: string
    ) {

        return this.gastosService.updateGasto(id, body)
    }


    @Delete(':id')
    deleteGasto(
        @Param('id') id: string,
        @Headers('authorization') authHeader: string
    ) {
        return this.gastosService.deleteGasto(id);
    }
}