import React, { useContext, useState } from 'react';
import { Menu, X } from "lucide-react";
import logo from '../assets/logo.png';
import { navItems } from '../constants/index.jsx';
import { Link } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext'; // Use default import

const Navbar = () => {
    const { state, logout } = useContext(AuthContext); // Get auth state and logout function from context
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 m-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">MasterAI</span>
                    </div>
                    <ul className="hidden lg:flex ml-5 space-x-12">
                        {/* Render navigation items only if logged in */}
                        {state.isLoggedIn && navItems.map((item, index) => (
                            <li key={index}>
                                <Link to={item.href}>{item.label}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        {/* Conditional rendering for SignIn or SignOut */}
                        {state.isLoggedIn ? (
                            <button onClick={logout} className="py-2 px-3 border rounded-md">Sign Out</button>
                        ) : (
                            <Link to="/signin" className="py-2 px-3 border rounded-md">Sign In</Link>
                        )}
                    </div>
                    <div className="lg:hidden md:flex flex-cols justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {state.isLoggedIn ? (
                                navItems.map((item, index) => (
                                    <li key={index} className="py-4">
                                        <Link to={item.href}>{item.label}</Link>
                                    </li>
                                ))
                            ) : (
                                <li className="py-4">
                                    <Link to="/signin">Sign In</Link>
                                </li>
                            )}
                        </ul>
                        <div className='flex space-x-6'>
                            {state.isLoggedIn ? (
                                <button onClick={logout} className='py-2 px-3 border rounded-md'>Sign Out</button>
                            ) : (
                                <Link to="/signin" className='py-2 px-3 border rounded-md'>Sign In</Link>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
