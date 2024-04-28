import React, { useState} from 'react';
import '../styles/signup.css';
import logo from '../public/Home_MeubelHouse_Logos05.png';
import arrow from '../public/SignUp_Vector.png';
import axios from 'axios';
import {useNavigate, Link } from 'react-router-dom'
import Navbar from './Navbar';

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <Navbar />
      <SignupSection />
      <Welcome />
      <SignupForm />
      <LoginLink/>
    </div>
  );
};



const SignupSection = () => {
  return (
    <div className="signup-section">
      <div className="signup-overlay"></div>
      <img src={logo} alt="Logo" className="logo1_1"/>
      <span className='signup-text'>Sign Up</span>
      <span className='Home'>Home</span>
      <span className='signup2'>SignUp</span>
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

const SignupForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Password conditions
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
      const response = await axios.post('http://localhost:3001/signup', { username, email, password });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        window.alert('Email already exists! Please login.');
      } else {
        console.error('Error signing up:', error);
      }
    }
};


  return (
    <div className="signup-content">
      <div className='welcome-container'>
        <span className='welcome'>Welcome</span>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <FormGroup label="Username">
          <input type="text" id="username" name="username" placeholder="Username" value={username} onChange={(e)=>setUsername(e.target.value)} required />
        </FormGroup>
        <FormGroup label="Email">
          <input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </FormGroup>
        <FormGroup label="Password">
          <input type="password" id="password" name="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        </FormGroup>
        <button type="submit">Sign Up</button>
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

const LoginLink = () => {
  return (
    <div className="signup-link">
      <span>Already have an account? </span>
      <Link to='/login' className="signup">Login</Link>
    </div>
  );
};

export default SignUpPage;
