import { BulletinWhereUniqueInput } from "../bulletin/BulletinWhereUniqueInput";

export type ImageUpdateInput = {
  url?: string | null;
  bulletin?: BulletinWhereUniqueInput | null;
};
