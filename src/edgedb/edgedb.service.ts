import { OnModuleInit } from '@nestjs/common';
import { $infer, createClient } from '../../generated/edgeql';
import * as T from '../../generated/edgeql/typesystem';

export class EdgeDBService implements OnModuleInit {
  client = createClient();

  async onModuleInit() {
    await this.client.ensureConnected();
  }

  public async query<Expr extends T.Expression>(
    expression: Expr,
  ): Promise<$infer<Expr>> {
    return await expression.run(this.client);
  }
}
