import { ListRoutes } from "@/shared/config/RouteConfig/RouteConfig";
import Sidebar from "@/widgets/Sidebar";
import { Suspense } from "react";
import { Route, RouteProps, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      {Object.values(ListRoutes).map(({ path, element, sidebar }) => (
        <Route
          key={path}
          path={path}
          element={
            <div className="flexPage">
              {sidebar && <Sidebar />}
              <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>
            </div>
          }
        />
      ))}
    </Routes>
  );
};

export default Router;
