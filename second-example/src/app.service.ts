import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  age: number;
  uf: string;
}

@Injectable()
export class AppService {

  users: User[] = [];

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User {
    return this.users.find(u => u.id == id);
  }

  addUser(newUser: User): User {
    const nextId = this.users.length > 0 ? this.users[this.users.length - 1].id + 1 : 1;
    newUser.id = nextId;
    this.users.push(newUser);
    return newUser;
  }

  replaceUser(id: number, newData: User): User {
    const index = this.users.findIndex(u => u.id == id);
    if (index === -1) return null;

    newData.id = id;
    this.users[index] = newData;
    
    return newData;
  }

  updateUser(id: number, newData: User): User {
    const index = this.users.findIndex(u => u.id == id);
    if (index === -1) return null;

    const user = this.users[index];

    if (newData.name) user.name = newData.name;
    if (newData.age) user.age = newData.age;
    if (newData.uf) user.uf = newData.uf;
    this.users[index] = user;

    return user;
  }

  deleteUser(id: number): boolean {
    const index = this.users.findIndex(u => u.id == id);
    if (index === -1) return false;

    this.users.splice(index, 1);
    return true;
  }
}
