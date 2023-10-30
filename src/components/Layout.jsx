import { Link, Outlet } from "react-router-dom";
import useAuth from "src/hooks/useAuth";

export function Layout() {
  const { token, login, logout } = useAuth();

  return (
    <>
      <button onClick={() => login()} disabled={token}>
        Login
      </button>
      <button onClick={() => logout()} disabled={!token}>
        Logout
      </button>
      <h2>Authorization status: {JSON.stringify(token)}</h2>
      <Link to="/privateRoute">privateRoute</Link> /
      <Link to="/privateComponent">privateComponent</Link> /
      <Link to="/public">public</Link>
      <Outlet />
    </>
  );
}
