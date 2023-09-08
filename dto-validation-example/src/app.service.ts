import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  users = [];

  getUsers() {
    return this.users;
  }

  getUser(id) {
    return this.users.find(u => u.id == id);
  }

  addUser(newUser) {
    const nextId = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
    newUser.id = nextId;
    this.users.push(newUser);
    return newUser;
  }

  replaceUser(id, newData) {
    const index = this.users.findIndex(u => u.id == id);
    if (index === -1) return null;

    newData.id = id;
    this.users[index] = newData;

    return newData;
  }

  updateUser(id, newData) {
    const index = this.users.findIndex(u => u.id == id);
    if (index === -1) return null;

    const user = this.users[index];

    if (newData.name) user.name = newData.name;
    if (newData.age) user.age = newData.age;
    if (newData.uf) user.uf = newData.uf;
    this.users[index] = user;

    return user;
  }

  deleteUser(id) {
    const index = this.users.findIndex(u => u.id == id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}
