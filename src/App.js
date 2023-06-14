// import logo from './logo.svg';
import './App.css';
import Contact from './Pages/Contact/Contact';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import CreateList from './Pages/CreateList/CreateList';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
function App() {

  useEffect(() => {
 // Define the 'otpless' function
 window.otpless = (otplessUser) => {
  // alert(JSON.stringify(otplessUser));
  console.log(JSON.stringify(otplessUser))
 };
}, []);


  return (
   <>
           <ToastContainer position='top-center'/> 

    <Routes>
      <Route path='/' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/footer' element={<Footer/>}/>
      <Route path='/create' element={<CreateList/>}/>
      <Route path='/create' element={<CreateList/>}/>
      <Route path='/create/:name' element={<CreateList/>}/>

    </Routes>
    <Footer/>
   </>
   );
}

export default App;
