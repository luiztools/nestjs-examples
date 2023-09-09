import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("users")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers() {
    return this.appService.getUsers();
  }

  @Get(":id")
  getUser(@Param("id") id) {
    return this.appService.getUser(id);
  }

  @Post()
  addUser(@Body() user) {
    return this.appService.addUser(user);
  }

  @Patch(":id")
  updateUser(@Param("id") id, @Body() newData) {
    return this.appService.updateUser(id, newData);
  }

  @Delete(":id")
  deleteUser(@Param("id") id): Promise<boolean> {
    return this.appService.deleteUser(id);
  }
}
