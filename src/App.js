import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import AddData from './components/AddData';
import Allproducts from './components/Allproducts';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, updateCurrentUser } from 'firebase/auth';
import { auth } from './components/Config';
function App() {
  const [logedinUser, setLoginUser] = useState({})
  onAuthStateChanged(auth,(currentUser)=>{
    setLoginUser(currentUser);
  });
  return (
    <div className="container-fluid">
      <Router>
      <Header />
        <Routes>
        <Route path='/Login' element = {<Login />} />
        <Route path='/SignUp' element = {<SignUp />} />
        <Route path='/AddData' element = {<AddData />} />
        <Route path='/Allproducts' element = {<Allproducts />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
