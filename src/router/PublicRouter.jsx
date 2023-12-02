import Layout from "../component/layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Blog from "../pages/blog/Blog";
import Service from "../pages/service/Service";
import Other from "../pages/oteher/Other";
import Auth from "../pages/auth/Auth";
const PublicRouter = [
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/other",
        element: <Other />,
      },
    ],
  },
];

export default PublicRouter;
