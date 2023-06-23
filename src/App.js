import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Homepage from './components/pages/Homepage'
import Aboutpage from './components/pages/Aboutpage'
import Contactpage from './components/pages/Contactpage'
import NavBar from './components/pages/layout/NavBar';
import {BrowserRouter as Router,Route, Routes } from "react-router-dom";
import PageNotFound from './components/pages/pages/PageNotFound';
import AddUser from './components/user/AddUser';
import EditUser from './components/user/EditUser';
import ViewUser from './components/user/ViewUser';



function App() {
  return (
    <Router>
    <div >
<NavBar />
<Routes>
  <Route exact path = '/' element={<Homepage/>} />
  <Route exact path = '/about' element={<Aboutpage />} />
  <Route exact path = '/contact' element={<Contactpage />} />
  <Route exact path = '/users/add' element={<AddUser />} />
  <Route exact path = '/users/edit/:userId' element={<EditUser/>} />
  <Route exact path = '/users/view/:userId' element={<ViewUser/>} />
  <Route path='*' element={< PageNotFound />} />
</Routes>
    </div>
    </Router>
  );
}

export default App;


