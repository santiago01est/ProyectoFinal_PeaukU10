let isLoggedIn = false;
let rolUser = "client";
let token= "";
let nombre="";
export const getIsLoggedIn = () => {
  return isLoggedIn;
};

export const getRolUser = () => {
  return rolUser;
}

export const getToken = () => {
  return token;
}

export const getName = () => {
  return nombre;
}

export const login = (isLogin,rol, tokenAuth, name) => {
  isLoggedIn = isLogin;
  rolUser = rol;
  token = tokenAuth;
  nombre= name;
};

export const logout = () => {
  isLoggedIn = false;
  rolUser = "user";
};