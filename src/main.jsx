import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import {
  Navbar,
  Home,
  About,
  Events,
  Sponsors,
  Gallery,
  Footer,
} from "./components";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="sponsor" element={<Sponsors />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="events" element={<Events />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
