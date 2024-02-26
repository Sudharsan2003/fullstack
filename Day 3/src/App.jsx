import { Routes, Route } from 'react-router-dom';
import Login from './assets/pages/Login';
import Signup from './assets/pages/Signup';
import Home from './assets/pages/Home'
import Kisan from './assets/Kisan';
import Eligibility from './assets/pages/Eligibility';
import Profile from './assets/pages/Profile';
import About from './assets/pages/About';
import Schemes from './assets/pages/Schemes';
import LoanInterest from './assets/pages/LoanInterest';
import Delivery from './assets/pages/Delivery';
import LoanQuantum from './assets/pages/LoanQuantum';
import Circular from './assets/pages/Circular';
import Contact from './assets/pages/Contact';
import LoanForm from './assets/pages/LoanForm';
import Terms from './assets/pages/Tems';
import AdminLogin from './assets/Admin/AdminLogin';
import AdminDashboard from './assets/Admin/AdminDashBoard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/kisan" element={<Kisan />} />
      <Route path="/eligibility" element={<Eligibility />} />
      <Route path="/schemes" element={<Schemes />} />
      <Route path="/loaninterest" element={<LoanInterest />} />
      <Route path="/loanquantum" element={<LoanQuantum />} />
      <Route path="/delivery" element={<Delivery />} />
      <Route path="/circular" element={<Circular />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/loanform" element={<LoanForm />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/adminlogin" element={<AdminLogin/>} />
      <Route path="admindashboard" element={<AdminDashboard/>} />
    </Routes>
  );
}

export default App;