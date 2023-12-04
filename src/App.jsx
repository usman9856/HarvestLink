import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Guide/Footer';
import LandingPage from './components/LandingPage';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Farmer_Landing from './components/Farmer/FarmerLanding';
import Homepage from './components/HomePage';
import Nav_Bar from './components/Guide/Navbar';
import Create from './components/Create';
import Trade from './components/Trade';
import FarmerCreate from './components/Farmer/FarmerCreate';
import ManufactureCreate from './components/Manufacture/ManufactureCreate';
import DriverCreate from './components/Driver/DriverCreate';
import AdminCreate from './components/Admin/AdminCreate';


function App() {
  const loggedIn = true;  //To be handled by backend developer; Tip fetch user status from backend

  return (

    <div className='app-body'>
      <Router>
        <header>
         <Nav_Bar/>
        </header>
        <Routes>
          {!loggedIn ? (
            <>
              <Route exact path="/" element={<LandingPage />} />
              <Route path="/HarvestLink" element={<LandingPage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Homepage />} />
              <Route path="/HarvestLink" element={<Homepage />} />
            </>
          )}
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/About" element={<></>} />
          <Route exact path="/Contact" element={<></>} />
          <Route exact path="/FarmerLanding" element={<Farmer_Landing />} />
          <Route exact path="/Create" element={<Create/>} />
          <Route exact path="/FarmerCreate" element={<FarmerCreate/>} />
          <Route exact path="/ManufactureCreate" element={<ManufactureCreate/>} />
          <Route exact path="/DriverCreate" element={<DriverCreate/>} />
          <Route exact path="/AdminCreate" element={<AdminCreate/>} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
