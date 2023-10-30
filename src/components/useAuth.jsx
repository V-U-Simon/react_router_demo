import { useContext } from "react";
import { AuthContext } from "src/app/providers/AuthProvider";
import { getLocalStorageValue } from "src/utils/localStorage";

export default function useAuth() {
  const { token, login, logout } = useContext(AuthContext);

  const isAuthenticated = Boolean(getLocalStorageValue("authToken") && token);
  return { token, isAuthenticated, login, logout };
}
