import { ReactNode } from "react";
import { MainPage } from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";

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
    element: <LoginPage />,
    path: "/login",
  },
  {
    element: <RegisterPage />,
    path: "/register",
  },

  {
    element: <NotFoundPage />,
    path: "*",
  },
];
