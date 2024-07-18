import { Image } from "../image/Image";

export type Bulletin = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  title: string | null;
  author: string | null;
  images?: Array<Image>;
};
