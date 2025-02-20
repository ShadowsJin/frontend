import "./styles/index.scss";
import Router from "./providers/router";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import {
  logout,
  updateToken,
} from "@/features/AuthByEmail/model/services/AuthByEmail/AuthByEmail";

function App() {
  useEffect(() => {
    // updateToken().then((res) =>
    //   res ? localStorage.setItem("isAuth", "true") : logout
    // );
  }, []);
  return (
    <>
      <Router />
    </>
  );
}

export default App;
