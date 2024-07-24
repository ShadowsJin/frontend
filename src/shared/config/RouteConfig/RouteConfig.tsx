import { ReactNode } from "react";
import { MainPage } from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage";

export interface IListRoutes {
  element: ReactNode;
  path: string;
}

export const ListRoutes: IListRoutes[] = [
  {
    element: <MainPage />,
    path: "/",
  },

  {
    element: <NotFoundPage />,
    path: "*",
  },
];
