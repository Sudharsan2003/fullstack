import { Link } from 'react-router-dom';
import '../assets/SideBar.css';

const Sidebar = () => {
  const openSidebar = () => {
    document.getElementById("mySidebar").style.display = "block";
  };

  const closeSidebar = () => {
    document.getElementById("mySidebar").style.display = "none";
  };

  return (
    <>
      <div className="sidebar-header">
        <button className="sidebar-toggle-btn" onClick={openSidebar}>☰</button>
      </div>
      <div className="sidebar-menu" style={{ display: "none" }} id="mySidebar">
        <button onClick={closeSidebar} className="close-button">Close</button>
        <hr></hr>
        <Link to="/asdf" className="sidebar-link">Link 1</Link>
        <Link to="/asdf" className="sidebar-link">Link 2</Link>
        <Link to="/" className="sidebar-link">Logout</Link>
      </div>
    </>
  );
}

export default Sidebar;
