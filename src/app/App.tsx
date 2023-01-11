import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "../pages/MainPage";
import GlobalStyle from "../styles/GlobalStyle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);

export default function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
