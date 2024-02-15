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
import Invoice from './components/Invoice/Invoice';
import InvoiceNew from './components/Invoice/InvoiceNew';
import InvoiceView from './components/Invoice/InvoiceView';
import InspectionLanding from './components/Inspection/InspectionLanding';
import InspectionRequest from './components/Inspection/InspectionRequest';
import DriverLanding from './components/Driver/DriverLanding';
import DriverView from './components/Driver/DriverView';
import RouteLanding from './components/Route/RouteLanding';
import RouteCreate from './components/Driver/DriverCreate';
import Manufacture_Landing from './components/Manufacture/ManufactureLanding';
import CertificateLanding from './components/Certification/CertificationLanding';
import CertificateDetail from './components/Certification/CertificateDetail';
import AdminLanding from './components/Admin/AdminLanding';
import EditRole from './components/Admin/EditRole';
import ViewRole from './components/Admin/ViewRole';
import DeleteRole from './components/Admin/DeleteRole';
import AddRole from './components/Admin/AddRole';
import AddFormComponent from './components/Admin/AddRole';
import Appointment from './components/Admin/Appointements';


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
          <Route exact path="/Trade" element={<Trade/>} />
          <Route exact path="/Invoice" element={<Invoice/>} />
          <Route exact path="/InvoiceNew" element={<InvoiceNew/>} />
          <Route exact path="/InvoiceView" element={<InvoiceView/>} />
          <Route exact path="/InspectionLanding" element={<InspectionLanding/>} />
          <Route exact path="/InspectionRequest" element={<InspectionRequest/>} />
          <Route exact path="/DriverLanding" element={<DriverLanding/>} />
          <Route exact path="/DriverView" element={<DriverView/>} />
          <Route exact path="/RouteLanding" element={<RouteLanding/>} />
          <Route exact path="/RouteCreate" element={<RouteCreate/>} />
          <Route exact path="/ManufactureLanding" element={<Manufacture_Landing/>} />
          <Route exact path="/CertificateLanding" element={<CertificateLanding/>} />
          <Route exact path="/CertificateDetail" element={<CertificateDetail/>} />
          <Route exact path="/AdminLanding" element={<AdminLanding/>} />
          <Route exact path="/EditRole" element={<EditRole/>} />
          <Route exact path="/ViewRole" element={<ViewRole/>} />
          <Route exact path="/AddRole" element={<AddRole/>} />
          <Route exact path="/Appointment" element={<Appointment/>} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
