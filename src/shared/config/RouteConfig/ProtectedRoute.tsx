import { Navigate, useLocation } from "react-router-dom";

import { ReactNode } from "react";

interface IProtected {
  onlyAuth?: boolean;
  component: ReactNode;
}

export const OnlyAuth = ({ component, onlyAuth = true }: IProtected) => {
  const location = useLocation();
  const isAuth = localStorage.getItem("isAuth");

  const { from } = location?.state || {
    from: { pathname: "/mytests" },
  };

  if (!onlyAuth && isAuth) {
    return <Navigate to={from} />;
  }

  if (onlyAuth && !isAuth) {
    return <Navigate to="/" state={{ from: location }} />;
    // updateToken().then((res) => {
    //   return res ? (
    //     <Navigate to={from} />
    //   ) : (
    //     <Navigate to="/" state={{ from: location }} />
    //   );
    // });
  }

  return component;
};

export const OnlyUnAuth = ({ component }: { component: ReactNode }) => (
  <OnlyAuth component={component} onlyAuth={false} />
);
