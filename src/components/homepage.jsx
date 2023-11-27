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
    const homepageItems = [
        { text: 'Inspection', link: '/inspection', icon: inspectorIcon },
        { text: 'Invoice', link: '/invoice', icon: invoiceIcon },
        { text: 'Driver', link: '/driver', icon: driverIcon },
        { text: 'Routes', link: '/routes', icon: routeIcon },
        { text: 'Farmer', link: '/farmer_landing', icon: farmerIcon },
        { text: 'Marketplace', link: '/marketplace', icon: marketplaceIcon },
        { text: 'Certificate', link: '/certificate', icon: certificateIcon },
        { text: 'Tax / Regulation', link: '/tax', icon: taxIcon },
        { text: 'Administeration', link: '/administeration', icon: adminIcon },
        // { text: 'Roles', link: '/roles', icon: farmerIcon }, // Placeholder, change the icon as needed
        { text: 'Blockchain Records', link: '/blockchain', icon: blockchainIcon },
        { text: 'Manufacturer', link: '/manufacturer', icon: manufacturingIcon },
        { text: 'Statistics', link: '/statistics', icon: barChartIcon },
        // Add more items as needed
      ];

  return (
    <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-screen p-10 ">
      {homepageItems.map((item, index) => (
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


// import React from "react";
// import { Link } from "react-router-dom";
// import adminIcon from '../assets/icons/admin.png';
// import barChartIcon from '../assets/icons/bar-chart.png';
// import blockchainIcon from '../assets/icons/blockchain.png';
// import certificateIcon from '../assets/icons/certificate.png';
// import driverIcon from '../assets/icons/chauffeur.png';
// import farmerIcon from '../assets/icons/farmer.png';
// import inspectorIcon from '../assets/icons/inspection.png';
// import invoiceIcon from '../assets/icons/invoice.png';
// import manufacturingIcon from '../assets/icons/manufacturing.png';
// import marketplaceIcon from '../assets/icons/marketplace.png';
// import routeIcon from '../assets/icons/route.png';
// import taxIcon from '../assets/icons/tax.png';
// function Homepage() {
//     return (
//         <div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-screen p-10 ">
//             <div className="flex text-center flex-col justify-center border border-red-100 aspect-w-4 aspect-h-5 bg-blue-500 floating-box"> <Link to='/inspection'> Inspection </Link> </div>
//             <div className="flex text-center flex-col justify-center border border-red-100 aspect-w-4 aspect-h-5 bg-blue-500 floating-box"> <Link to='/invoice'> Invoice </Link> </div>
//             <div className="flex text-center flex-col justify-center border border-red-100 aspect-w-4 aspect-h-5 bg-blue-500 floating-box"> <Link to='/driver'> Driver </Link> </div>
//             <div className="flex text-center flex-col justify-center border border-red-100 aspect-w-4 aspect-h-5 bg-blue-500 floating-box"> <Link to='/routes'> Routes </Link> </div>
//             <div className="flex text-center flex-col justify-center border border-red-100 aspect-w-4 aspect-h-5 bg-blue-500 floating-box"> <Link to='/farmer_landing'> Farmer </Link> </div>
//             <div className="flex text-center flex-col justify-center border border-red-100 aspect-w-4 aspect-h-5 bg-blue-500 floating-box"> <Link to='/marketplace'> Marketplace </Link> </div>
//             <div className="flex text-center flex-col justify-center border border-red-100 aspect-w-4 aspect-h-5 bg-blue-500 floating-box"> <Link to='/certificate'> Certificate </Link> </div>
//             <div className="flex text-center flex-col justify-center border border-red-100 aspect-w-4 aspect-h-5 bg-blue-500 floating-box"> <Link to='/tax'> Tax / Regulation </Link> </div>
//             <div className="flex text-center flex-col justify-center border border-red-100 aspect-w-4 aspect-h-5 bg-blue-500 floating-box"> <Link to='/statistics'> Statistics </Link> </div>
//             <div className="flex text-center flex-col justify-center border border-red-100 aspect-w-4 aspect-h-5 bg-blue-500 floating-box"> <Link to='/roles'> Roles </Link> </div>
//             <div className="flex text-center flex-col justify-center border border-red-100 aspect-w-4 aspect-h-5 bg-blue-500 floating-box"> <Link to='/blockchain'> Blockchain Records </Link> </div>
//             <div className="flex text-center flex-col justify-center border border-red-100 aspect-w-4 aspect-h-5 bg-blue-500 floating-box"> <Link to='/manufacturer'> Manufacturer </Link> </div>
//         </div>
//     )
// }
// export default Homepage;