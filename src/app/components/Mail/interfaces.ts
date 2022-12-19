export type Base64<imageType extends string> =
  `data:image/${imageType};base64${string}`;

export interface IMailLetter {
  author: IAuthor;
  bookmark: boolean;
  folder: string;
  date: string;
  flag: string;
  text: string;
  title: string;
  to: IReciever[];
  read: boolean;
  important: boolean;
  id: number;
  height: number;
  path: string;
  doc?: IDoc;
}
// Base64<"png" | "jpg">;
export interface IReciever {
  avatar?: string;
  email: string;
  name: string;
  surname: string;
}

export interface IAuthor {
  avatar?: string;
  email: string;
  name: string;
  surname: string;
}

export interface IDoc {
  img: string;
}
