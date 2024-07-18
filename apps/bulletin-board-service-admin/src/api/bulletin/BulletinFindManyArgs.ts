import { BulletinWhereInput } from "./BulletinWhereInput";
import { BulletinOrderByInput } from "./BulletinOrderByInput";

export type BulletinFindManyArgs = {
  where?: BulletinWhereInput;
  orderBy?: Array<BulletinOrderByInput>;
  skip?: number;
  take?: number;
};
