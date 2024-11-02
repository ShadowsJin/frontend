import { Navigate, useLocation } from "react-router-dom";

import { ReactNode } from "react";
import { Cookies } from "react-cookie";
import { updateToken } from "@/features/AuthByEmail/model/services/AuthByEmail/AuthByEmail";

interface IProtected {
  onlyAuth?: boolean;
  component: ReactNode;
}

export const OnlyAuth = ({ component, onlyAuth = true }: IProtected) => {
  const location = useLocation();
  const cookie = new Cookies();
  const token = cookie.get("access_token");

  if (!onlyAuth && token) {
    const { from } = location?.state || {
      from: { pathname: "/mytests" },
    };
    return <Navigate to={from} />;
  }

  if (onlyAuth && !token) {
    const { from } = location?.state || {
      from: { pathname: "/mytests" },
    };
    updateToken().then((res) => {
      res ? (
        <Navigate to={from} />
      ) : (
        <Navigate to="/" state={{ from: location }} />
      );
    });
  }

  return component;
};

export const OnlyUnAuth = ({ component }: { component: ReactNode }) => (
  <OnlyAuth component={component} onlyAuth={false} />
);
