import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BulletinService } from "./bulletin.service";
import { BulletinControllerBase } from "./base/bulletin.controller.base";

@swagger.ApiTags("bulletins")
@common.Controller("bulletins")
export class BulletinController extends BulletinControllerBase {
  constructor(protected readonly service: BulletinService) {
    super(service);
  }
}
