import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import Navbar from './components/navbar';
import LoginSignup from './pages/login_signup';
import { getRolUser, login } from './services/auth';
import Profile from './pages/profile';

function App() {

  /* Validar Logueo de usuario */
  login('admin');

  

  return (
    <>
    <GlobalStyle /> {}
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/loginsignup' element={<LoginSignup/>} />
        <Route path='/profile' element={ getRolUser() === 'admin' ? <Profile/> : <></>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
