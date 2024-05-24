import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./stors";
// import App from "./App.tsx";
import "./index.css";
import { HomePage } from "./pages/homePage.tsx";
import NotFoundPage from "./pages/notFoundPage.tsx";
import MovieList from "./components/moviesList.tsx";
import ShowMovie from "./components/showMovie.tsx";
import SignUp from "./components/signUp.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/movie/list",
    element: <MovieList />,
  },
  {
    path: "/movie",
    element: <ShowMovie />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
