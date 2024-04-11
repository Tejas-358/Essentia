import React, { useState} from 'react';
import '../styles/signup.css';
import logo from '../public/Home_MeubelHouse_Logos05.png';
import arrow from '../public/SignUp_Vector.png';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const SignUpPage = () => {
  return (
    <div className="signup-page">
      <Navbar />
      <SignupSection />
      <Welcome />
      <SignupForm />
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
          <a href="/home">Essentia</a>
        </span>
      </div>
    </div>
  );
};

const SignupSection = () => {
  return (
    <div className="signup-section">
      <div className="signup-overlay"></div>
      <img src={logo} alt="Logo" className="logo1"/>
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
    try {
      const response = await axios.post('http://localhost:3001/signup', { username, email, password });
      console.log(response.data); 
      navigate('/login')
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className="signup-content">
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

export default SignUpPage;
