import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BulletinWhereUniqueInput } from "../bulletin/BulletinWhereUniqueInput";

export type ImageWhereInput = {
  id?: StringFilter;
  url?: StringNullableFilter;
  bulletin?: BulletinWhereUniqueInput;
};
