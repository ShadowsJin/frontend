import { ReactNode } from "react";
import { MainPage } from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { MyTestsPage } from "@/pages/MyTestsPage";
import { SupportPage } from "@/pages/SupportPage";
import { ProfilePage } from "@/pages/ProfilePage";

export interface IListRoutes {
  element: ReactNode;
  path: string;
  sidebar?: boolean;
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
    element: <MyTestsPage />,
    path: "/mytests",
    sidebar: true,
  },
  {
    element: <SupportPage />,
    path: "/support",
    sidebar: true,
  },
  {
    element: <ProfilePage />,
    path: "/profile",
    sidebar: true,
  },

  {
    element: <NotFoundPage />,
    path: "*",
  },
];
