import { createBrowserRouter } from "react-router-dom";
import PublicRouter from "./PublicRouter";
import PriverRouter from "./PriverRouter";

const router = createBrowserRouter([...PublicRouter, ...PriverRouter]);

export default router;
