import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About/About';
import Home from "./Pages/Home/Home/Home"
import Notfound from './Pages/Home/Home/Notfound/Notfound';
import Login from './Pages/Home/Login/Login';
import ServiceDetail from './Pages/Home/ServiceDetail/ServiceDetail';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Register from './Pages/Home/Register/Register';
import RequireAuth from './Pages/Home/RequireAuth/RequireAuth';
import Checkout from './Pages/CheakOut/Checkout/Checkout';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/serviceDetail/:serviceId' element={<ServiceDetail></ServiceDetail>}></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
