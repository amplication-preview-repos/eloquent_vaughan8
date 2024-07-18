import { Module } from "@nestjs/common";
import { BulletinModuleBase } from "./base/bulletin.module.base";
import { BulletinService } from "./bulletin.service";
import { BulletinController } from "./bulletin.controller";
import { BulletinResolver } from "./bulletin.resolver";

@Module({
  imports: [BulletinModuleBase],
  controllers: [BulletinController],
  providers: [BulletinService, BulletinResolver],
  exports: [BulletinService],
})
export class BulletinModule {}
