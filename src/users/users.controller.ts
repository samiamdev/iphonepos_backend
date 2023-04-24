import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './schema/user.schema';
import { UpdateUser } from './dto/update.user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  async insertUser(@Body() user: User): Promise<User> {
    const userId = await this.userService.insertUser(user);
    return userId;
  }

  @Get()
  async findAllUsers() {
    return await this.userService.findAllUsers();
  }

  @Get(':id')
  async findUser(@Param('id') id: string) {
    return await this.userService.findUser(id);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUser: User,
  ): Promise<UpdateUser> {
    await this.userService.updateUser(id, updateUser);
    return await this.findUser(id);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.userService.deleteUser(id);
    return await this.findAllUsers();
  }
}
