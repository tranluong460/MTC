import { IAuthor } from "./author";
import { ICategory } from "./category";
import { IUser } from "./user";

export interface IBook {
  name: string;
  slug: string;
  description: string;
  new_chap_at: string;
  new_chap_id: string;
  category_id: ICategory;
  author_id: IAuthor;
  user_id: IUser;
}
