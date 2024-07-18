import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BulletinServiceBase } from "./base/bulletin.service.base";

@Injectable()
export class BulletinService extends BulletinServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
