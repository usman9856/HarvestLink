import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer';
import LandingPage from './components/landing_page';
import Login from './components/login';
import Signup from './components/signup';
import Nav_Bar from './components/navbar';

function App() {
  return (

    <div className='app-body'>
      <Router>
        <header>
          <Nav_Bar />
        </header>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/about" element={<></>} />
          <Route exact path="/contact" element={<></>} />
          <Route exact path="/farmer_landing" element={<></>} />
          <Route exact path="/create" element={<></>} />
          <Route exact path="/trade" element={<></>} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </Router>
    </div>
  );
}

export default App;
