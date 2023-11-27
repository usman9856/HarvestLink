import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../assets/images/HarvestLink_Logo.png';
import user from '../assets/icons/user.png';
import more from '../assets/icons/more.png'
import adminIcon from '../assets/icons/admin.png';
import barChartIcon from '../assets/icons/bar-chart.png';
import blockchainIcon from '../assets/icons/blockchain.png';
import certificateIcon from '../assets/icons/certificate.png';
import driverIcon from '../assets/icons/chauffeur.png';
import farmerIcon from '../assets/icons/farmer.png';
import inspectorIcon from '../assets/icons/inspection.png';
import invoiceIcon from '../assets/icons/invoice.png';
import manufacturingIcon from '../assets/icons/manufacturing.png';
import marketplaceIcon from '../assets/icons/marketplace.png';
import routeIcon from '../assets/icons/route.png';
import taxIcon from '../assets/icons/tax.png';
import settingIcon from '../assets/icons/setting.png';
import logoutIcon from '../assets/icons/logout.png';
import profile from '../assets/icons/profile.png';

function Nav_Bar() {
  const sideBarItems = [
    { text: 'Inspection', link: '/inspection', icon: inspectorIcon },
    { text: 'Invoice', link: '/invoice', icon: invoiceIcon },
    { text: 'Drivers', link: '/drivers', icon: driverIcon },
    { text: 'Routes', link: '/routes', icon: routeIcon },
    { text: 'Statistics', link: '/statistics', icon: barChartIcon },
    { text: 'Marketplace', link: '/marketplace', icon: marketplaceIcon },
    { text: 'Certificates', link: '/certificate', icon: certificateIcon },
    { text: 'Taxes/Regulation', link: '/tax', icon: taxIcon },
    { text: 'Administeration', link: '/administeration', icon: adminIcon },
    { text: 'Roles', link: '/roles', icon: farmerIcon },
    { text: 'Blockchain Records', link: '/blockchain', icon: blockchainIcon },
    { text: 'Manufacturer', link: '/manufacturer', icon: manufacturingIcon },
  ];
  const loggedIn = true; // Set to true if the user is logged in

  const landingNav = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" }
  ];

  const userNav = [
    { label: "Home", path: "/" },
    { label: "Create", path: "/create" },
    { label: "Trade", path: "/trade" },
  ];


  //backend developer handle signout in this function
  const handleSignOut = () => {
    // Implement your sign-out logic here
  };

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isUserbarOpen, setUserbarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const toggleUserbar = () => {
    setUserbarOpen(!isUserbarOpen);
  };

  return (
    <nav className="flex items-center justify-between p-2 border-2 shadow-lg ">
      <ul className="flex items-center space-x-4">
        {/* Logo */}
        <li className="relative w-10 h-10 m-1 object-contain">
          <button className="" onClick={toggleSidebar}>
            <img src={more} alt="Menu" />
          </button>
          {isSidebarOpen && (
            <aside className={`bg-gray-800 text-white w-72 absolute top-[52px] left-[-30px] h-screen sideBar_open px-10 border-2`}>
              <ul className="space-y-4 mt-6">
                {sideBarItems.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link} className="block py-2 px-4 hover:bg-gray-700">
                      <img src={item.icon} alt={item.text} className="w-6 h-6 inline-block mr-2 bg-slate-300" />
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </li>
        <li><img src={logo} alt="Harvest Link Logo" className="w-12 h-12 object-contain" /></li>
      </ul>
      <ul className='hidden lg:flex items-center justify-between ml-20 '>
        {(loggedIn ? userNav : landingNav).map((item, index) => (
          <li key={index} className="px-4">
            <Link to={item.path} className="link">{item.label}</Link>
          </li>
        ))}
      </ul>

      {loggedIn ? (
        <ul className='hidden lg:flex items-center justify-between '>
          <li>
            <button className="btn-ca w-8 h-8 object-contain mr-8 " onClick={toggleUserbar}>
              <img src={user} alt="User Icon" />
            </button>
            {isUserbarOpen && (
              <aside className={`bg-gray-800 text-white w-72 absolute h-screen sideBar_open px-10 border-2 top-[66px] left-[1231px] h-40 userBar_open`}>
              <ul className="space-y-4 mt-6">
                <li>
                  <Link to='/profile' className="flex items-center py-2 px-4 hover:bg-gray-700">
                    <span><img src={profile} alt="profile" className="w-6 h-6 bg-slate-300" /></span>
                    <span className="ml-6">Profile</span>
                  </Link>
                </li>
                <li>
                  <Link to='/setting' className="flex items-center py-2 px-4 hover:bg-gray-700">
                    <span><img src={settingIcon} alt="settings" className="w-6 h-6 bg-slate-300" /></span>
                    <span className="ml-6">Setting</span> 
                  </Link>
                </li>
                <li>
                  <p onClick={handleSignOut} className="flex items-center py-2 px-4 hover:bg-gray-700 hover:cursor-pointer">
                    <span className="mr-6"><img src={logoutIcon} alt="Logout" className="w-6 h-6 bg-slate-300" /></span>
                    Logout
                  </p>
                </li>
              </ul>
            </aside>
            
            )}
          </li>
        </ul>
      ) : (
        <ul className="flex items-center lg:justify-between">
          <li className='pr-3 pl-2'>
            <button className="bg-[#C1FF72] hover:bg-green-600 text-white py-2 px-4 rounded-xl w-20 hover:opacity-90 hover:text-white text-black"><Link to="/login">Login</Link></button>
          </li>
          <li className="pr-3">
            <button className="bg-[#C1FF72] hover:bg-green-600 text-white py-2 px-4 rounded-xl w-50 hover:opacity-90 hover:text-white text-black"><Link to="/signup">Book An Appointment</Link></button>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Nav_Bar;