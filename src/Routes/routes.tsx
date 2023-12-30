import { createBrowserRouter } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Layout from "../Pages/Layout";
import GameDetailPage from "../components/GameDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
