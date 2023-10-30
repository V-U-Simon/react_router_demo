import { createContext, useMemo, useState } from "react";
import {
  getLocalStorageValue,
  setLocalStorageValue,
} from "src/utils/localStorage";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const initialToken = getLocalStorageValue("authToken");
  const [token, setToken] = useState(initialToken);

  async function login() {
    setLocalStorageValue("authToken", "some-token");
    setToken("some-token");
  }

  async function logout() {
    setLocalStorageValue("authToken", undefined);
    setToken(undefined);
  }

  const memoValues = useMemo(() => ({ token, login, logout }), [token]);

  return (
    <AuthContext.Provider value={memoValues}>{children}</AuthContext.Provider>
  );
};
