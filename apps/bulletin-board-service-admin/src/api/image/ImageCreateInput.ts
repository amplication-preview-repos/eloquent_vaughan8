import { BulletinWhereUniqueInput } from "../bulletin/BulletinWhereUniqueInput";

export type ImageCreateInput = {
  url?: string | null;
  bulletin?: BulletinWhereUniqueInput | null;
};
