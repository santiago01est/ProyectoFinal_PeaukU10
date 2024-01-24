let isLoggedIn = false;
let rolUser = "client";
export const getIsLoggedIn = () => {
  return isLoggedIn;
};

export const getRolUser = () => {
  return rolUser;
}

export const login = (rol) => {
  isLoggedIn = true;
  rolUser = rol;
};

export const logout = () => {
  isLoggedIn = false;
  rolUser = "user";
};