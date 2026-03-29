import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import { cn } from '../lib/utils';
import githubLogo from '../assets/github-logo.png';


const Header = () => {
    return (
       <header className="w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className='mx-auto flex h-16 items-center justify-between px-4 md:px-8'>
        <Link  to="/" className="flex items-center gap-2">
          <img src={logo} alt="Hero.io" className='h-8' />
          <span className='font-bold text-[#632EE3] text-xl '>Hero.IO</span>
        </Link>
         <nav className="hidden md:flex items-center gap-8">
            <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium transition-colors hover:text-indigo-600",
                isActive ? "text-indigo-600 border-b-2 border-indigo-600" : "text-slate-600"
              )
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/apps"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium transition-colors hover:text-indigo-600",
                isActive ? "text-indigo-600 border-b-2 border-indigo-600" : "text-slate-600"
              )
            }
          >
            Apps
          </NavLink>
          <NavLink
            to="/installation"
            className={({ isActive }) =>
              cn(
                "text-sm font-medium transition-colors hover:text-indigo-600",
                isActive ? "text-indigo-600 border-b-2 border-indigo-600" : "text-slate-600"
              )
            }
          >
            Installation
          </NavLink>
         </nav>
            {/* GitHub Button Section */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/minhazTech/A3-HERO.IO/graphs/contributors"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#632EE3] active:scale-95 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white shadow hover:opacity-90 h-9 px-4 py-2 gap-2"
          >
            <img src={githubLogo} alt="Github" className="h-5 w-5 brightness-0 invert" />
            <span>Contribute</span>
          </a>
        </div>
        </div>
       </header>
    );
};

export default Header;