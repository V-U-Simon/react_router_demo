import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Layout } from "src/components/Layout";
import {
  ProtectedComponents,
  ProtectedRoutes,
  ProtectedUniversal,
} from "./ProtectedRoutes";

// // Массив маршрутов
// export function DataRoutes() {
//   const routes = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         { path: "public", element: <h1>public</h1> },

//         // вложенный маршрут
//         {
//           path: "privateRoute",
//           element: <ProtectedRoutes />,
//           children: [{ index: true, element: <h1>using ProtectedRoutes</h1> }],
//         },

//         // вложенный компонент
//         {
//           path: "privateComponent",
//           element: (
//             <ProtectedComponents>
//               <h1>using ProtectedComponents</h1>
//             </ProtectedComponents>
//           ),
//         },
//       ],
//     },
//   ]);

//   return <RouterProvider router={routes} />;
// }

// Маршруты как комопоненты
export function DataRoutes() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="public" element={<h1>Public route</h1>} />

        {/* вложенный маршрут */}
        <Route path="privateRoute" element={<ProtectedRoutes />}>
          <Route index element={<h1>using privateRoute</h1>} />
        </Route>

        {/* вложенный компонент */}
        <Route
          path="privateComponent"
          element={
            <ProtectedComponents>
              <h1>using ProtectedComponents</h1>
            </ProtectedComponents>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
