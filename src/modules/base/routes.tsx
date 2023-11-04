import AppLayout from "./pages/appLayout";
import Home from "./pages/home";

export const mainRoute = {
  path: "/*",
  element: <AppLayout />,
  children: [
    {
      path: "home",
      element: <Home />,
    },
  ],
};
