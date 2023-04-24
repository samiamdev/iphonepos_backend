import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async insertUser(user: User): Promise<User> {
    const createUser = await this.userModel.create(user);
    return createUser;
  }

  async findAllUsers() {
    return await this.userModel.find().exec();
  }

  async findUser(id: string) {
    return await this.userModel.findOne({ _id: id }).exec();
  }

  async updateUser(id: string, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user);
  }

  deleteUser(id: string) {
    const deleteUser = this.userModel.findByIdAndRemove({ _id: id });
    return deleteUser;
  }
}
