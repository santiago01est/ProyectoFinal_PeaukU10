import Home from './pages/home';
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import Navbar from './components/navbar';
import LoginSignup from './pages/login_signup';
import { getRolUser, login } from './services/auth';
import Profile from './pages/profile';
import ProtectedRoute from './routes/protectedroute';
import { Children } from 'react';

function App() {

  /* Validar Logueo de usuario */
  //login('admin');

  const router= createBrowserRouter([
    {
      path: '/',
      element: <>
      <Navbar />
      <Home />
    </>
    },
    {
      path: '/loginsignup',
      element: <>
      <Navbar />
      <LoginSignup/>
    </>
    },
    {
      path: '/',
      element: <ProtectedRoute/>,
      children: [
        {
          path: '/profile',
          element: <>
          <Navbar />
          <Profile/>
          </>
        }
      ]
    }
  ]);

  return (
    <>
    <GlobalStyle /> {}
    <RouterProvider router={router} />
    </>
  )
}

export default App
