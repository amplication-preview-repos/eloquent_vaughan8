import { ImageUpdateManyWithoutBulletinsInput } from "./ImageUpdateManyWithoutBulletinsInput";

export type BulletinUpdateInput = {
  description?: string | null;
  title?: string | null;
  author?: string | null;
  images?: ImageUpdateManyWithoutBulletinsInput;
};
