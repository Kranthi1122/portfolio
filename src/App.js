import logo from './logo.svg';
import './App.css';
import Example from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SimpleMap from './components/maps';
import Login from './components/login';
import MainHome from './components/MainHome';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Example/>}/>
      <Route path="/maps" element={<SimpleMap/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<MainHome/>}/>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
