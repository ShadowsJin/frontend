import { lazy } from "react";

const PassingTestPageAsync = lazy(() => import("./PassingTestPage"));
export default PassingTestPageAsync;
