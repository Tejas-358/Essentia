import React, { useState } from 'react';
import '../styles/signup.css'; // Importing styles
import logo from '../public/Home_MeubelHouse_Logos05.png'; // Importing logo
import arrow from '../public/SignUp_Vector.png'; // Importing arrow icon
import axios from 'axios'; // Importing axios for making HTTP requests
import { useNavigate, Link } from 'react-router-dom'; // Importing hooks for navigation
import Navbar from './Navbar'; // Importing Navbar component

const SignUpPage = () => {
  const [username, setUsername] = useState(''); // State for username
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate password
    const passwordLength = password.length >= 8;
    const containsNumber = /\d/.test(password);
    const containsAlphanumeric = /[a-zA-Z]/.test(password);
    const containsCapitalLetter = /[A-Z]/.test(password);

    if (!passwordLength) {
      window.alert('Password must be at least 8 characters long');
      return;
    }

    if (!containsNumber) {
      window.alert('Password must contain at least one number');
      return;
    }

    if (!containsAlphanumeric) {
      window.alert('Password must contain at least one alphanumeric character');
      return;
    }

    if (!containsCapitalLetter) {
      window.alert('Password must contain at least one capital letter');
      return;
    }

    try {
      // Send signup request to the server
      const response = await axios.post('http://localhost:3001/signup', { username, email, password });
      console.log(response.data);
      navigate('/login'); // Redirect to login page after successful signup
    } catch (error) {
      if (error.response && error.response.status === 400) {
        window.alert('Email already exists! Please login.');
      } else {
        console.error('Error signing up:', error);
      }
    }
  };

  return (
    <div className="signup-page">
      <Navbar /> {/* Navbar component */}
      <SignupSection /> {/* SignupSection component */}
      <Welcome /> {/* Welcome component */}
      <SignupForm // SignupForm component with props */}
        username={username}
        setUsername={setUsername}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
      <LoginLink /> {/* LoginLink component */}
    </div>
  );
};

// SignupSection component
const SignupSection = () => {
  return (
    <div className="signup-section">
      <div className="signup-overlay"></div>
      <img src={logo} alt="Logo" className="logo1_1" />
      <span className='signup-text'>Sign Up</span>
      <span className='Home'>Home</span>
      <span className='signup2'>SignUp</span>
      <img className='Vector' src={arrow} alt="Arrow" />
    </div>
  );
};

// Welcome component
const Welcome = () => {
  return (
    <div className='welcome-container'>
      <span className='welcome'>Welcome</span>
    </div>
  );
};

// SignupForm component
const SignupForm = ({ username, setUsername, email, setEmail, password, setPassword, handleSubmit }) => {
  return (
    <div className="signup-content">
      <div className='welcome-container'>
        <span className='welcome'>Welcome</span>
      </div>
      {/* Signup form */}
      <form className="signup-form" onSubmit={handleSubmit}>
        {/* Username input field */}
        <FormGroup label="Username">
          <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </FormGroup>
        {/* Email input field */}
        <FormGroup label="Email">
          <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </FormGroup>
        {/* Password input field */}
        <FormGroup label="Password">
          <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </FormGroup>
        {/* Signup button */}
        <button type="submit">Sign Up</button>
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

// LoginLink component
const LoginLink = () => {
  return (
    <div className="signup-link">
      <span>Already have an account? </span>
      <Link to='/login' className="signup">Login</Link>
    </div>
  );
};

export default SignUpPage;
