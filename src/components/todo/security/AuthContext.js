import { createContext, useContext, useEffect, useState } from "react";
import { authenticate } from "../api/UserApiService";
import { useCookies } from 'react-cookie';
import { useNavigate } from "react-router";


export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

function AuthProvider({ children }) {
  const [userCookie, setUserCookie] = useCookies(["user"]);

  const [isAuthenticated, setAuthenticated] = useState(
    userCookie.authenticated === "true"
  );
  const [user, setUser] = useState(userCookie.user);
  const [token, setToken] = useState(userCookie.token);

  async function login(username, password) {
    var jwt = "";

    try {
      const response = await authenticate(username, password);

      if (response.status == 200) {
        jwt = "Bearer " + response.data.token;
        setAuthenticated(true);
        setUser(username);
        setToken(jwt);

        setUserCookie("user", username, { path: "/" });
        setUserCookie("token", jwt, { path: "/" });
        setUserCookie("authenticated", "true", { path: "/" });

        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      logout();
      return false;
    }
  }

  const logout = () => {
    setAuthenticated(false);
    setUser(null);
    setToken(null);

    setUserCookie("user", "", { path: "/" });
    setUserCookie("token", "", { path: "/" });
    setUserCookie("authenticated", "false", { path: "/" });
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthenticated, login, logout, user, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;