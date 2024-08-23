import { ListRoutes } from "@/shared/config/RouteConfig/RouteConfig";
import Loader from "@/shared/ui/Loader";

import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      {ListRoutes.map((route) => (
        <Route
          key={route.path}
          element={
            <div className="flexPage">
              <Suspense fallback={<Loader />}>{route.element}</Suspense>
            </div>
          }
          path={route.path}
        />
      ))}
    </Routes>
  );
};

export default Router;
