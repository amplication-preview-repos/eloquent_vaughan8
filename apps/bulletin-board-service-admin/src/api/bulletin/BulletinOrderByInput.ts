import { SortOrder } from "../../util/SortOrder";

export type BulletinOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  title?: SortOrder;
  author?: SortOrder;
};
