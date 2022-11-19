import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { EdgeDBModule } from './edgedb';
import { UserModule } from './user';

@Module({
  imports: [
    EdgeDBModule,
    UserModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
      playground: true,
      debug: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
