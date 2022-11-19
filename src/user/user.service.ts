import { Injectable } from '@nestjs/common';

import { EdgeDBService } from '../edgedb';
import e from '../../generated/edgeql';
import { getAllUsers, getUserById } from '../../generated/edgeql/queries';

@Injectable()
export class UserService {
  constructor(private readonly $edgedb: EdgeDBService) {}

  async getUserById(id: string) {
    return getUserById(this.$edgedb.client, { id });
  }

  async getUsers() {
    return getAllUsers(this.$edgedb.client);
  }

  async createUser(age: number, email: string, name: string) {
    const response = await this.$edgedb.query(
      e.insert(e.User, { age, email, name }).unlessConflict(),
    );

    if (response) {
      return this.getUserById(response.id);
    } else {
      return null;
    }
  }
}
