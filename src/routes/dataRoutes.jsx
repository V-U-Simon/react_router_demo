import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Layout, Private, Public } from "src/components/Home";

export function DataRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="public" element={<Public />} />
        <Route path="private" element={<Private />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
