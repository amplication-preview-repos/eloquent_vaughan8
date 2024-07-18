import * as graphql from "@nestjs/graphql";
import { BulletinResolverBase } from "./base/bulletin.resolver.base";
import { Bulletin } from "./base/Bulletin";
import { BulletinService } from "./bulletin.service";

@graphql.Resolver(() => Bulletin)
export class BulletinResolver extends BulletinResolverBase {
  constructor(protected readonly service: BulletinService) {
    super(service);
  }
}
