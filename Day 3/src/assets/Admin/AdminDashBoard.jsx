// components/AdminDashboard.js
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function AdminDashboard({ onLogout }) {
  const handleLogout = () => {
    // Add logout logic here if necessary
    // For example, clearing session storage, etc.
    onLogout();
  };

  return (
    <div>
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          {/* Add more sidebar links as needed */}
        </ul>
      </div>
      <div className="content">
        <h2>Admin Profile</h2>
        {/* Add profile information here */}
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default AdminDashboard;
