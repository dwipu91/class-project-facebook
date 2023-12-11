import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.scss";
import router from "./router/Router";

function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
