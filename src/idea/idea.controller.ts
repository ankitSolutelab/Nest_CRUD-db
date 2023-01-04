import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Body,
  Param,
  UsePipes,
  Logger,
} from '@nestjs/common';
import { ValidationPipe } from 'src/shared/validaton.pipe';
//import { brotliDecompressSync } from 'zlib';
import { IdeaDto } from './idea.dto';
import { IdeaService } from './idea.service';

@Controller('api/idea')
export class IdeaController {
  private logger = new Logger('IdeaController');
  constructor(private ideaService: IdeaService) {}

  @Get()
  showAllIdeas() {
    return this.ideaService.showAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createIdea(@Body() data: IdeaDto) {
    this.logger.log(JSON.stringify(data));
    return this.ideaService.create(data);
  }

  @Get(':id')
  readIdea(@Param('id') id: string) {
    return this.ideaService.read(id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateIdea(@Param('id') id: string, @Body() data: Partial<IdeaDto>) {
    this.logger.log(JSON.stringify(data));
    return this.ideaService.update(id, data);
  }

  @Delete(':id')
  deleteIdea(@Param('id') id: string) {
    return this.ideaService.destroy(id);
  }
}
