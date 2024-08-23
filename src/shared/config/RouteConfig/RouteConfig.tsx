import { ReactNode } from "react";
import { MainPage } from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { MyTestsPage } from "@/pages/MyTestsPage";
import { SupportPage } from "@/pages/SupportPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { CreateTestPage } from "@/pages/CreateTestPage";
import { PassingTestPage } from "@/pages/PassingTestPage";
import { OnlyAuth, OnlyUnAuth } from "./ProtectedRoute";

export interface IListRoutes {
  element: ReactNode;
  path: string;
}

export const onlyAuthRoutes: IListRoutes[] = [
  {
    element: <MyTestsPage />,
    path: "/mytests",
  },
  {
    element: <CreateTestPage />,
    path: "/createtest/:title",
  },
  {
    element: <PassingTestPage />,
    path: "/passingtest/:id",
  },
  {
    element: <SupportPage />,
    path: "/support",
  },
  {
    element: <ProfilePage />,
    path: "/profile",
  },
];

export const onlyUnAuthRoutes: IListRoutes[] = [
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
];

export const ListRoutes: IListRoutes[] = [
  ...onlyAuthRoutes.map((route) => ({
    ...route,
    element: <OnlyAuth component={route.element} />,
  })),
  ...onlyUnAuthRoutes.map((route) => ({
    ...route,
    element: <OnlyUnAuth component={route.element} />,
  })),
  {
    element: <NotFoundPage />,
    path: "*",
  },
];
