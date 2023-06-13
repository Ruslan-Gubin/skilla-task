import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { CallsPage } from "../../pages";
import { NAV } from "../../shared/constants/navigation.js";
import { Layout } from "../../widgets";

export const routerApp = createBrowserRouter(
  createRoutesFromElements(
    <Route path={`${NAV.CALLS_PAGE}`} element={<Layout />}>
      <Route index element={<CallsPage />} />
    </Route>
  )
);
