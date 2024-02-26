// Login.jsx
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/css/Login.css'

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Check if both email and password are entered
    if (email && password) {
      // Add your login logic here, e.g., sending data to a server, validating credentials
      console.log('Email:', email);
      console.log('Password:', password);
      // Redirect to home page after login
      navigate('/home');
    } else {
      // Notify the user to enter both email and password
      alert('Please enter both email and password.');
    }
  };
  
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" onClick={handleLogin}>Login</button>
        <p>New User? <Link to="/signup">Signup</Link></p>
      </form>
    </div>
  );
};

export default Login;
