import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import BookPage from "../pages/BookPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Not Found Page</div>,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/books",
        element: <BookPage />,
      },
      {
        path: "/books/:idBook",
        element: <BookPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
