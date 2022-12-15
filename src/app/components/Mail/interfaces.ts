type Base64<imageType extends string> =
  `data:image/${imageType};base64${string}`;

export interface IMailLetter {
  author: IAuthor;
  bookmark: boolean;
  folder: string;
  date: Date;
  text: string;
  title: string;
  to: IReciever[];
  read: boolean;
  important: boolean;
  id: string;
  height: number;
}

export interface IReciever {
  avatar?: Base64<"png" | "jpg">;
  email: string;
  name: string;
  surname: string;
}

export interface IAuthor {
  avatar?: Base64<"png" | "jpg">;
  email: string;
  name: string;
  surname: string;
}

export interface IDoc {
  img: Base64<"png" | "jpg">;
}
