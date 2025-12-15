
import './App.css';
import Footer from './components/FooterComponent/Footer';
import Home from './components/HomeComponent/Home';
import Nav from './components/NavComponent/Nav';
import { Route , Routes } from 'react-router-dom';
import Register from './components/RegisterComponent/Register';
import Header from './components/HeaderComponent/Header';
import Login from './components/LoginComponent/Login';
import Admin from './components/AdminComponent/Admin';
import UserHome from './components/UserComponent/User';
import Logout from './components/Logout/Logout';
import ManageUsers from './components/ManageUserComponent/ManageUser';
import CPAdmin from './components/CPAdminComponent/CPAdmin';
import EPAdmin from './components/EPAdminComponent/EPAdmin';
import Verifyuser from './components/VerifyUserComponent/VerifyUser';
import CPUser from './components/CPUserComponent/CPUser';
import EPUser from './components/EPUserComponent/EPUser';

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Addcategory from './components/AddCategoryComponent/AddCategory';
import AddSubCategory from './components/AddSubCategoryComponent/AddSubCategory';

function App() {

const drkClsName = "-dark"

  
  const [isDark, setIsDark] = useState(false);
  const onClickThemeHandler = (ev) => {
    console.log(ev , isDark)
    setIsDark((preState) => {
      console.log("dState", preState);
      return !preState
    })

  }


  return (
  <>
  < Nav themeHandler={onClickThemeHandler} />

  <Header />
   
  <Routes>
    <Route path="" element={<Home/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/vmail/:email" element={<Verifyuser/>}></Route>
    <Route path="*" element={<div>404 Not Found</div>} />

    <Route path="/login" element={<Login/>}></Route>
    <Route path="/admin" element={<Admin/>}></Route>
    <Route path="/manageusers" element={<ManageUsers/>}></Route>
    <Route path="/CPAdmin" element={<CPAdmin/>}></Route>
    <Route path="/EPAdmin" element={<EPAdmin/>}></Route>
    
    <Route path="/CPUser" element={<CPUser/>}></Route>
    <Route path="/EPUser" element={<EPUser/>}></Route>

    <Route path="/AddCategory" element={<Addcategory/>}></Route>
    <Route path="/AddSubCategory" element={<AddSubCategory/>}></Route>

    
    <Route path="/user" element={<UserHome/>}></Route>
    <Route path="/logout" element={<Logout/>}></Route>

  </Routes>

  

  <Footer />
      



   

  </>
  );
}

export default App;
