import { createContext, useMemo, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const initialToken = localStorage.getItem("authToken");
  const [token, setToken] = useState(initialToken);

  async function login() {
    localStorage.setItem("authToken", "some-token");
    setToken("some-token");
  }

  async function logout() {
    localStorage.setItem("authToken", null);
    setToken(null);
  }

  const memoValues = useMemo(() => ({ token, login, logout }), [token]);

  return (
    <AuthContext.Provider value={memoValues}>{children}</AuthContext.Provider>
  );
};
