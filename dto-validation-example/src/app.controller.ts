import { Controller, Get, Post, Patch, Put, Delete, Body, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { ReplaceUserDTO } from './dto/replace-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';

@Controller("users")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers() {
    return this.appService.getUsers();
  }

  @Get(":id")
  getUser(@Param("id", ParseIntPipe) id : number) {
    return this.appService.getUser(id);
  }

  @Post()
  addUser(@Body() user : CreateUserDTO) {
    return this.appService.addUser(user);
  }

  @Put(":id")
  replaceUser(@Param("id", ParseIntPipe) id : number, @Body() newData : ReplaceUserDTO) {
    return this.appService.replaceUser(id, newData);
  }

  @Patch(":id")
  updateUser(@Param("id", ParseIntPipe) id : number, @Body() newData: UpdateUserDTO) {
    return this.appService.updateUser(id, newData);
  }

  @Delete(":id")
  deleteUser(@Param("id", ParseIntPipe) id: number) {
    return this.appService.deleteUser(id);
  }
}
