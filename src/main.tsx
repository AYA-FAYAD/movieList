import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "./client.ts";
import { httpBatchLink } from "@trpc/client";
import { Provider } from "react-redux";
import { store } from "./stors";
// import App from "./App.tsx";
import "./index.css";
import { HomePage } from "./pages/homePage.tsx";
import NotFoundPage from "./pages/notFoundPage.tsx";
import MovieList from "./components/moviesList.tsx";
import ShowMovie from "./components/showMovie.tsx";
import SignUp from "./components/signUp.tsx";

const trpcUrl = "http://localhost:3000/trpc";
const queryClient = new QueryClient();
const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: trpcUrl,
    }),
  ],
});

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
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </trpc.Provider>
  </React.StrictMode>
);
