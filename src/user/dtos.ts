import { Field, ID, InputType, ObjectType, OmitType } from '@nestjs/graphql';

@ObjectType('User')
export class UserObject {
  @Field(() => ID)
  id!: string;

  @Field(() => String)
  email!: string;

  @Field(() => String)
  name!: string;

  @Field(() => Number)
  age!: number;
}

@InputType()
export class CreateUserInput extends OmitType(UserObject, ['id'], InputType) {}
