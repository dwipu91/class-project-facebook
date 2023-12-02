import Layout from "../component/layout/Layout";
import Admin from "../pages/admin/Admin";

const PriverRouter = [
  {
    element: <Layout />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
      },
    ],
  },
];

export default PriverRouter;
