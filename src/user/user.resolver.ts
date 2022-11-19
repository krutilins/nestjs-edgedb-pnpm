import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput, UserObject } from './dtos';

import { UserService } from './user.service';

@Resolver(() => UserObject)
export class UserResolver {
  constructor(private readonly $user: UserService) {}

  @Query(() => UserObject, { nullable: true })
  async getUser(@Args('id') id: string): Promise<UserObject | null> {
    return this.$user.getUserById(id);
  }

  @Query(() => [UserObject])
  async getUsers(): Promise<UserObject[]> {
    return this.$user.getUsers();

  }

  @Mutation(() => UserObject)
  async createUser(
    @Args('input') { email, age, name }: CreateUserInput,
  ): Promise<UserObject> {
    return this.$user.createUser(age, email, name);
  }
}
