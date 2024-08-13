import React, { useEffect, useState } from 'react';
import './Home.css'
import axios from 'axios';
import {Link} from "react-router-dom"

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('http://localhost:3001/api/auth/verify', {
        headers: { 'x-auth-token': token }
      })
        .then(res => setUser(res.data))
        .catch(err => console.error(err.response.data));
    }
  }, []);

  if (!user) {
    return <h2>Please log in to access this page.</h2>;
  }

  return(
  
    <div class="container">
        <h1> Welcome, {user.username}! to Smart Agriculture Dashboard</h1>
        <div class="button-grid">
            <Link to='/weather'><button class="btn" id="weather">Weather</button></Link>
            <Link to='/soil'><button class="btn" id="soil">Soil</button></Link>
            <Link to='/weather'><button class="btn" id="crops">Suggested Crops</button></Link>
            <Link to='/ecommerce'><button class="btn" id="ecommerce">E-Commerce</button></Link>
            <Link to='/weather'><button class="btn" id="activity">Daily Activity</button></Link>
        </div>
    </div>

  ) 
}

export default Home;
