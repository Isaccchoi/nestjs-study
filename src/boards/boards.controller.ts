import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { BoardStatus } from './board.status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  // @Get('/')
  // getAllBoard(): Board[] {
  //   return this.boardService.getAllBoards();
  // }
  //
  // @Post('/')
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() createBoardDto: CreateBoardDto): Board {
  //   return this.boardService.createBoard(createBoardDto);
  // }
  //
  // @Get('/:id')
  // getBoardByID(@Param('id') id: string): Board {
  //   return this.boardService.getBoardById(id);
  // }

  @Get('/:id')
  getBoardByID(@Param('id') id: number): Board {
    return this.boardService.getBoardById(id);
  }

  //
  // @Patch('/:id')
  // updateBoard(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  // ): Board {
  //   return this.boardService.updateBoardStatus(id, status);
  // }
  //
  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): Board[] {
  //   return this.boardService.deleteBoard(id);
  // }
}
