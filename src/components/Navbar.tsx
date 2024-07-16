// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/logo.svg'
import { BiUser, BiCog, BiLogOut } from 'react-icons/bi';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar bg-base-200 shadow-lg relative z-10"> {/* Ensure navbar has relative position and higher z-index */}
      <div className="container mx-auto flex justify-between items-center relative z-10">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            <img src={img} alt="Logo" className="h-14" />
          </Link>
        </div>

        {/* Navigation Categories */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="btn normal-case text-base hover:text-lg">Home</Link>
          <Link to="/movies" className="btn normal-case text-base hover:text-lg">Movies</Link>
          <Link to="/about" className="btn normal-case text-base hover:text-lg ">About</Link>
        </div>

        {/* Profile Dropdown Menu */}
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <BiUser size={24} />
          </button>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li><Link to="/profile" className="flex items-center space-x-2"><BiUser size={20} /> Profile</Link></li>
            <li><Link to="/settings" className="flex items-center space-x-2"><BiCog size={20} /> Settings</Link></li>
            <li><Link to="/logout" className="flex items-center space-x-2"><BiLogOut size={20} /> Logout</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
