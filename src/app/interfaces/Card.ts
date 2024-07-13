import { Url } from "next/dist/shared/lib/router/router";
export interface Card {
  title: string;
  sub_title: string;
  image: string;
  link: Url;
}
