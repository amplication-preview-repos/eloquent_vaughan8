import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ImageListRelationFilter } from "../image/ImageListRelationFilter";

export type BulletinWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  title?: StringNullableFilter;
  author?: StringNullableFilter;
  images?: ImageListRelationFilter;
};
