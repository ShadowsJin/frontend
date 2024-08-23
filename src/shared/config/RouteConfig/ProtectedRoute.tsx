import { Navigate, useLocation } from "react-router-dom";

import { ReactNode } from "react";
import { useAuthByEmailStore } from "@/features/AuthByEmail";

interface IProtected {
  onlyAuth?: boolean;
  component: ReactNode;
}

export const OnlyAuth = ({ component, onlyAuth = true }: IProtected) => {
  const location = useLocation();

  const token = useAuthByEmailStore((state) => state.isToken);

  if (!onlyAuth && token) {
    const { from } = location?.state || {
      from: { pathname: "/mytest" },
    };
    return <Navigate to={from} />;
  }

  if (onlyAuth && !token) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return component;
};

export const OnlyUnAuth = ({ component }: { component: ReactNode }) => (
  <OnlyAuth component={component} onlyAuth={false} />
);
