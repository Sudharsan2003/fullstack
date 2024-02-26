// Signup.jsx
import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import '../pages/css/Signup.css'
const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
  
    // Check if any of the fields are empty
    if (!username || !email || !password) {
      alert('Please fill in all fields');
      return; // Exit the function early if any field is empty
    }
  
    // Add your signup logic here, e.g., sending data to a server, validating inputs
    console.log('User signed up:', { username, email, password });
    // Redirect to login page after signup
    navigate('/');
  };
  
  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
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
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" onClick={handleSignup}>Sign Up</button>
        <p>Already have an account? <Link to="/">Login</Link></p>
      </form>
    </div>
  );
};

export default Signup;
