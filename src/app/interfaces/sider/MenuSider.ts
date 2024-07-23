import { ReactNode } from "react";

export interface MenuLink {
  title: string;
  link: URL | string;
  icon: ReactNode;
  isShow?: boolean;
}
