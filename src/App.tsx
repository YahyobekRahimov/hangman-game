import {
   RouterProvider,
   createBrowserRouter,
} from "react-router-dom";
import "./App.css";
import GamePage from "./pages/GamePage/GamePage";
import MainPage from "./pages/MainPage/MainPage";
import HowToPlay from "./pages/HowToPlayPage/HowToPlayPage";
import Category from "./pages/CategoryPage/CategoryPage";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainPage />,
   },
   {
      path: "/how-to-play",
      element: <HowToPlay />,
   },
   {
      path: "/category",
      element: <Category />,
   },
   {
      path: "/play",
      element: <GamePage />,
   },
]);

function App() {
   return <RouterProvider router={router} />;
}

export default App;
