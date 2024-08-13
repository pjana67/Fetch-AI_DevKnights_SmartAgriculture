import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Import the CSS file

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const history = useNavigate();

  const { email, password } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3001/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      history('/home');
  } catch (err) {
      if (err.response) {
          // The server responded with a status other than 2xx
          console.error('Server responded with an error:', err.response.data);
      } else if (err.request) {
          // The request was made, but no response was received
          console.error('No response received:', err.request);
      } else {
          // Something else happened while setting up the request
          console.error('Error in setting up the request:', err.message);
      }
  }
  };

  return (
    <div className="overlay">
      <form onSubmit={onSubmit}>
        <img src="https://img.icons8.com/fluency/96/000000/plant.png" alt="logo" className="logo" />
        <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
        <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <div className="footer">
        <p>&copy; 2024 Smart Agriculture | <a href="#!">Privacy Policy</a></p>
      </div>
    </div>
  );
}

export default Login;
