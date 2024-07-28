import { lazy } from "react";

const MyTestsPageAsync = lazy(() => import("./MyTestsPage"));
export default MyTestsPageAsync;
