import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage from "../pages/MainPage";
import PaymentPage from "../pages/PaymentPage";
import GlobalStyle from "../styles/GlobalStyle";

import { ResultType } from "../config/type";

const mainLoader = async (): Promise<ResultType> => {
  const result = await fetch(process.env.REACT_APP_API_URL as string);
  const data = await result.json();

  return data;
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    id: "main",
    loader: mainLoader,
    children: [
      {
        path: "payment",
        element: <PaymentPage />,
      },
    ],
  },
]);

export default function App(): React.ReactElement {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}
