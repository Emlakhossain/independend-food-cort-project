import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Header from './Page/SharePage/Header/Header';
import Home from './Page/Home/Home';
import Footer from './Page/SharePage/Footer/Footer';
import Services from './Page/Services/Services';
import About from './Page/About/About';
import Blogs from './Page/Blogs/Blogs';
import NotFound from './Page/NotFound/NotFound';
import Login from './Page/Login/Login';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
