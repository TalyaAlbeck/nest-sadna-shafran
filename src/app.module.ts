import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TeacherModule } from './teacher/teacher.module';
import { ChaptersModule } from './chapters/chapters.module';

@Module({
  imports: [StudentsModule, TeacherModule, ChaptersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
