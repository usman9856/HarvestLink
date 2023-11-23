import logo from '../assets/images/HarvestLink Logo.png';
import React from "react";
import { Link } from 'react-router-dom';

function Nav_Bar() {
    // Placeholder for user authentication status
    const loggedIn = false; // Set to true if the user is logged in

    const landingNav = [
        { label: "Home", path: "/" },
        { label: "About", path: "/about" },
        { label: "Contact", path: "/contact" }
    ];

    const userNav = [
        { label: "Home", path: "/farmer_landing" },
        { label: "Create", path: "/create" },
        { label: "Trade", path: "/trade" },
    ];

    const handleSignOut = () => {
        // Implement your sign-out logic here
    };

    return (
        <nav className="flex items-center justify-between p-2 lg:px-16">
        <ul className='flex items-center space-x-4'>
          <li>
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Harvest Link Logo" className="w-12 h-12 object-contain" />
            </div>
          </li>
        </ul>
        <ul className='hidden lg:flex items-center justify-between ml-20'>
          {(loggedIn ? userNav : landingNav).map((item, index) => (
            <li key={index} className="px-4">
              <Link to={item.path} className="link">{item.label}</Link>
            </li>
          ))}
        </ul>
        {loggedIn ? (
          <ul className='hidden lg:flex items-center justify-between'>
            <li>
              <button className="btn-ca" onClick={handleSignOut}>Sign out</button>
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

// function Nav_Bar() {
//     return (
//         <nav className='flex items-center justify-between p-1 shadow'>
//             <ul className='flex items-center justify-between'>
//                 <li>
//                     <div className="flex items-center space-x-4">
//                         <img src={logo} alt="Harvest Link Logo" className="w-12 h-12 object-contain" />
//                     </div>
//                 </li>
//             </ul>
//             <ul className='flex items-center justify-between'>
//                 <li className='px-10'><Link to={'/'}>Home</Link></li>
//                 <li className='px-10'><Link to={'/about'}>About</Link></li>
//                 <li className='px-10'><Link to={'/contact'}>Contact</Link></li>
//             </ul>
//             <ul className='flex items-center justify-between'>
//                <button> <li className='px-3'><Link to={'/login'}>Login</Link></li></button>
//                 <button><li className='px-3'><Link to={'/signup'}>Signup</Link></li></button>
//             </ul>
//         </nav>
//     );
// }

export default Nav_Bar;
