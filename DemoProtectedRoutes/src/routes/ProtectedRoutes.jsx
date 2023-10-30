import { Navigate, Outlet } from "react-router-dom";
import useAuth from "src/hooks/useAuth";

export function ProtectedComponents({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return <Navigate to="/public" />;
  return children;
}

export function ProtectedRoutes() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to="/public" />;
  return <Outlet />;
}

export function ProtectedUniversal({ children, redirectPath = "/public" }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) return <Navigate to={redirectPath} />;
  return children ? children : <Outlet />;
}
