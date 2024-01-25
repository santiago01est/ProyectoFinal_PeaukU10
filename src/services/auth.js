let isLoggedIn = false;
let rolUser = "client";
let token= "ccc";
export const getIsLoggedIn = () => {
  return isLoggedIn;
};

export const getRolUser = () => {
  return rolUser;
}

export const login = (isLogin,rol, token) => {
  isLoggedIn = isLogin;
  rolUser = rol;
  token = token;
};

export const logout = () => {
  isLoggedIn = false;
  rolUser = "user";
};