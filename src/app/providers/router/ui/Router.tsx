import { ListRoutes } from "@/shared/config/RouteConfig/RouteConfig";
import { Route, RouteProps, Routes } from "react-router-dom";

const Router = () => {
  return (
    <Routes>
      {Object.values(ListRoutes).map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
    </Routes>
  );
};

export default Router;
