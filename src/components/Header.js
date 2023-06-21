import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { auth } from './Config';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth'
const Header = () => {
  const navigate = useNavigate();
    const [user] = useAuthState(auth)
    const signUserOut = async() => {
      await signOut(auth);
      navigate('/Login')
    }
  return (
    <div className='row'>
      <Navbar bg="dark" variant="dark" sticky="top" >
        <Container>
          <Navbar.Brand>Malik Autos</Navbar.Brand>
          <Nav className="me-auto">
            {!user ? <> <Link to="/Login" className='nav-link'>login</Link></>:<>
            <Link to="/SignUp" className='nav-link'>SignUp</Link>
            <Link to="/AddData" className='nav-link'>add items</Link>
          <Link to="/Allproducts" className='nav-link'>Items list</Link></> }
          </Nav>
          {user && <>
          <Navbar.Text className='pull-right mr-3 custom_email'> {auth?.currentUser?.email}</Navbar.Text>
           <Navbar.Text className='pull-right ml-2'><button className='btn btn-danger' onClick={signUserOut}>SignOut</button></Navbar.Text></>}
        </Container>
      </Navbar>
      </div>
  );
}

export default Header;
