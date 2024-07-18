import { ImageCreateNestedManyWithoutBulletinsInput } from "./ImageCreateNestedManyWithoutBulletinsInput";

export type BulletinCreateInput = {
  description?: string | null;
  title?: string | null;
  author?: string | null;
  images?: ImageCreateNestedManyWithoutBulletinsInput;
};
