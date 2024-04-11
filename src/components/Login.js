// LoginPage.js

import React, { useState } from 'react';
import '../styles/login.css';
import logo from '../public/Home_MeubelHouse_Logos05.png';
import arrow from '../public/SignUp_Vector.png';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      console.log(response.data);
      if (response.data === "Success") {
        navigate('/shop');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="login-page">
      <Navbar />
      <LoginSection />
      <Welcome />
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
      <SignupLink />
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="/home">
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <span className="title">
          <a href="/shop">Essentia</a>
        </span>
      </div>
    </div>
  );
};

const LoginSection = () => {
  return (
    <div className="login-section">
      <div className="login-overlay"></div>
      <img src={logo} alt="Logo" className="logo1" />
      <span className='login-text'>Login</span>
      <span className='Home'>Home</span>
      <span className='login2'>Login</span>
      <img className='Vector' src={arrow} alt="Arrow" />
    </div>
  );
};

const Welcome = () => {
  return (
    <div className='welcome-container'>
      <span className='welcome'>Welcome</span>
    </div>
  );
};

const LoginForm = ({ email, setEmail, password, setPassword, handleSubmit }) => {
  return (
    <div className="login-content">
      <form className="login-form" onSubmit={handleSubmit}>
        <FormGroup label="Email">
          <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </FormGroup>
        <FormGroup label="Password">
          <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </FormGroup>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const FormGroup = ({ label, children }) => {
  return (
    <div className="form-group">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      {children}
    </div>
  );
};

const SignupLink = () => {
  return (
    <div className="signup-link">
      <span>Don't have an account? </span>
      <a href='/signup'>
        <span className="signup">Signup</span>
      </a>
    </div>
  );
};

export default LoginPage;