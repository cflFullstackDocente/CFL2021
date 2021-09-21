import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareaController } from './tarea/tarea.controller';
import { TareaService } from './tarea/tarea.service';

@Module({
  imports: [ ServeStaticModule.forRoot( { rootPath: join(__dirname,'..','front')} )],
  controllers: [AppController, TareaController],
  providers: [AppService, TareaService],
})
export class AppModule {}
