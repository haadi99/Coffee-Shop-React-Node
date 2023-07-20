import React from 'react';
import logo from '../../src/assets/images/more/logo1.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#3A2A2A] px-5 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href="/add-coffee">Add Coffee</a></li>
                            <li>
                                <a>Parent</a>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <img src={logo} height="40" width="40" alt="" />
                    <a className="btn btn-ghost normal-case text-xl" href='/'>Espresso Emporium</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a href='/add-coffee'>Add Coffee</a></li>
                        <li><a href="">Item 3</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;