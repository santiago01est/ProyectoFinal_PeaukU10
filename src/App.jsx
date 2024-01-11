import Home from './pages/home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';

function App() {

  return (
    <>
     <GlobalStyle /> {}
      <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
