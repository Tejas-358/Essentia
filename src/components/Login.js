import React, { useState } from 'react';
import '../styles/login.css'; // Importing styles
import logo from '../public/Home_MeubelHouse_Logos05.png'; // Importing logo
import arrow from '../public/SignUp_Vector.png'; // Importing arrow icon
import axios from 'axios'; // Importing axios for making HTTP requests
import { useNavigate } from 'react-router-dom'; // Importing useNavigate hook for navigation
import Navbar from './Navbar'; // Importing Navbar component

const LoginPage = () => {
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email || !password) {
      alert('Email and password are required');
      return;
    }

    // Convert email to lowercase
    const lowerCaseEmail = email.toLowerCase();

    try {
      // Send login request to the server
      const response = await axios.post('http://localhost:3001/login', { email: lowerCaseEmail, password });
      
      // Check response message
      if (response.data.message === "Success") {
        const { username } = response.data; 
        // Navigate to shop page with username passed as state
        navigate('/shop', { state: { username: username } }); 
      } else if (response.data.message === "No User Found") { 
        alert('Email not registered. Please Register');
      } else if (response.data.message === "Password is Incorrect") { 
        alert('Incorrect password! Try Again');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred while logging in');
    }
  };

  return (
    <div className="login-page">
      <Navbar /> {/* Navbar component */}
      <LoginSection /> {/* LoginSection component */}
      <LoginForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      /> {/* LoginForm component */}
      <SignupLink /> {/* SignupLink component */}
    </div>
  );
};

// LoginSection component
const LoginSection = () => {
  return (
    <div className="login-section">
      <div className="login-overlay"></div>
      <img src={logo} alt="Logo" className="logo1_2" />
      <span className='login-text'>Login</span>
      <span className='Home'>Home</span>
      <span className='login2'>Login</span>
      <img className='Vector' src={arrow} alt="Arrow" />
    </div>
  );
};

// LoginForm component
const LoginForm = ({ email, setEmail, password, setPassword, handleSubmit }) => {
  return (
    <div className="login-content">
      <div className='welcome-container'>
        <span className='welcome'>Welcome</span>
      </div>
      {/* Login form */}
      <form className="login-form" onSubmit={handleSubmit}>
        {/* Email input field */}
        <FormGroup label="Email">
          <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </FormGroup>
        {/* Password input field */}
        <FormGroup label="Password">
          <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </FormGroup>
        {/* Login button */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

// FormGroup component
const FormGroup = ({ label, children }) => {
  return (
    <div className="form-group">
      <label htmlFor={label.toLowerCase()}>{label}</label>
      {children}
    </div>
  );
};

// SignupLink component
const SignupLink = () => {
  return (
    <div className="signup-link">
      <span>Don't have an account? </span>
      {/* Link to signup page */}
      <a href='/signup'>
        <span className="signup">Signup</span>
      </a>
    </div>
  );
};

export default LoginPage;
