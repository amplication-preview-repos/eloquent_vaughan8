import { Bulletin } from "../bulletin/Bulletin";

export type Image = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  url: string | null;
  bulletin?: Bulletin | null;
};
