import { Link, useLoaderData, Outlet, useSubmit } from "react-router-dom";
import useAuth from "src/hooks/useAuth";

export function Layout() {
  const { token, login, logout } = useAuth();

  return (
    <>
      <Link to="/private">private</Link> / <Link to="/public">public</Link>
      <h2>Authorization status: {JSON.stringify(token)}</h2>
      <button onClick={() => login()} disabled={token}>
        Login
      </button>
      <button onClick={() => logout()} disabled={!token}>
        Logout
      </button>
      <Outlet />
    </>
  );
}

export function Public() {
  return <h1>Public</h1>;
}

export function Private() {
  return <h1>Private</h1>;
}
