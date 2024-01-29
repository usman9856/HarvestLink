import React from "react";
import { Link } from 'react-router-dom';

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

function Homepage() {

  const user = 'Driver'; //To be handled by backend developer; Tip fetch user type from backend

  const homepageItems = [
    { text: 'Inspection', link: '/InspectionLanding', icon: inspectorIcon, access: ['Farmer', 'Manufacture', 'Driver', 'Admin',] },
    { text: 'Invoice', link: '/Invoice', icon: invoiceIcon, access: ['Farmer', 'Manufacture', 'Driver', 'Admin',] },
    { text: 'Driver', link: '/DriverLanding', icon: driverIcon, access: ['Driver', 'Admin',] },
    { text: 'Routes', link: '/RouteLanding', icon: routeIcon, access: ['Farmer', 'Manufacture', 'Driver', 'Admin',] },
    { text: 'Farmer', link: '/FarmerLanding', icon: farmerIcon, access: ['Farmer', 'Admin',] },
    { text: 'Marketplace', link: '/Marketplace', icon: marketplaceIcon, access: ['Farmer', 'Manufacture', 'Admin',] },
    { text: 'Certificate', link: '/Certificate', icon: certificateIcon, access: ['Farmer', 'Manufacture', 'Driver', 'Admin',] },
    { text: 'Tax / Regulation', link: '/Tax', icon: taxIcon, access: ['Farmer', 'Manufacture', 'Driver', 'Admin',] },
    { text: 'Administeration', link: '/Administeration', icon: adminIcon, access: ['Admin',] },
    { text: 'Blockchain Records', link: '/Blockchain', icon: blockchainIcon, access: ['Farmer', 'Manufacture', 'Driver', 'Admin',] },
    { text: 'Manufacturer', link: '/Manufacturer', icon: manufacturingIcon, access: ['Manufacture', 'Admin',] },
    { text: 'Statistics', link: '/Statistics', icon: barChartIcon, access: ['Farmer', 'Manufacture', 'Driver', 'Admin',] },
    // Add more items as needed
  ];

  const filteredItems = homepageItems.filter(item => item.access.includes(user));

  return (
    <div className="text-white grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 min-h-screen p-10 ml-6">
      {filteredItems.map((item, index) => (
        <div key={index} className="flex text-center flex-col justify-center border border-red-100 aspect-w-4 aspect-h-5 bg-blue-500 floating-box">
          <Link to={item.link}>
            <div className="h-[200] flex flex-col items-center just">
              <img src={item.icon} alt={item.text} className="w-6 h-6 inline-block mr-2" />
              <br />
              {item.text}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );

}

export default Homepage;
