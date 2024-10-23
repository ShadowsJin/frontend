import { ReactNode } from "react";
import { MainPage } from "@/pages/MainPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";
import { MyTestsPage } from "@/pages/MyTestsPage";
import { SupportPage } from "@/pages/SupportPage";
import { ProfilePage } from "@/pages/ProfilePage";
import { CreateTestPage } from "@/pages/CreateTestPage";
import { OnlyAuth, OnlyUnAuth } from "./ProtectedRoute";
import { PassingTestPage } from "@/pages/PassingTestPage";

export interface IListRoutes {
  element: ReactNode;
  path: string;
}

const onlyAuthRoutes: IListRoutes[] = [
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
    path: "/passingtest/:idTest",
  },
  {
    element: <PassingTestPage />,
    path: "/passingtest/:idTest/:numberQuestion",
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

const onlyUnAuthRoutes: IListRoutes[] = [
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
