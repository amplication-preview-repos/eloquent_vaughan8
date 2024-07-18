import { Bulletin as TBulletin } from "../api/bulletin/Bulletin";

export const BULLETIN_TITLE_FIELD = "title";

export const BulletinTitle = (record: TBulletin): string => {
  return record.title?.toString() || String(record.id);
};
