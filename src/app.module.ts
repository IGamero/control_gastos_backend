import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { GastosModule } from './gastos/gastos.module';

@Module({
  imports: [AuthModule, GastosModule],
})
export class AppModule {}