import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () => { },
  saveUser: (isLogin, token) => { },
  logout: () => { },
});

function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  function getAccessToken() {
    return accessToken;
  }

  function saveUser(isLogin, token) {
    setIsAuthenticated(true);
    setAccessToken(token);
    console.log(token);
    // setRefreshToken(userData.body.refreshToken);
    // localStorage.setItem("Token", JSON.stringify(userData.body.refreshToken));
  }

  function logout() {
    setIsAuthenticated(false);
    setAccessToken("");
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, getAccessToken, saveUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };
