import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import HowToUse from "./HowToUse";
import "./index.css";
import SearchResult from "./SearchResult";
import WatchList from "./Watchlist";
import React from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HowToUse />} />
      <Route path="watchlist" element={<WatchList />} />
      <Route path="searchresult" element={<SearchResult />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    //{" "}
  </React.StrictMode>
);
