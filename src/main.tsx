import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import { Products } from "./Apps/Products/Products";
import { IconContext } from "react-icons";
import { GlobalProvider } from "./Context/GlobalContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/customers",
        element: <Products />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <IconContext.Provider value={{}}>
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </IconContext.Provider>
  </React.StrictMode>
);
