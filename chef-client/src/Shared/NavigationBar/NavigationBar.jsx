import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../Providers/AuthProviders';

const NavigationBar = ( ) => {
    const { user, logOut } = useContext(UserContext)
    const handleLogOut = () => {
        logOut()
    }

    return (
        <div className="navbar lg:flex bg-gray-100 p-4 rounded-md lg:px-36 justify-between items-center">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink className="hover:text-yellow-600" to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'text-yellow-800 font-bold tracking-wide transition-colors duration-200' : 'hover:text-yellow-700')} to='/blog'>Blog</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? 'text-yellow-800 font-bold tracking-wide transition-colors duration-200' : 'hover:text-yellow-700')} to='/about'>About</NavLink>
                    </ul>
                </div>
                <div className='lg:mx-0 mx-2'>
                    <Link to='/' className="btn btn-ghost normal-case text-xl"><span className='text-yellow-800'>Fat </span> Chef</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex gap-10 font-semibold">
                <NavLink className="hover:text-white text-lg btn btn-ghost normal-case" to='/'>Home</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-yellow-800 hover:text-white btn btn-ghost normal-case text-xl font-bold tracking-wide transition-colors duration-200' : 'hover:text-yellow-700 text-lg')} to='/blog'>Blog</NavLink>
                <NavLink className={({ isActive }) => (isActive ? 'text-yellow-800 hover:text-white btn btn-ghost normal-case text-xl font-bold tracking-wide transition-colors duration-200' : 'hover:text-yellow-700 text-lg')} to='/about'>About</NavLink>
            </div>
            <div className="navbar-end flex lg:gap-3 gap-10">
                <div>
                    {
                        user
                        &&
                        <div className='relative group lg:flex'>
                            <Link to='/user'>
                                <img className='lg:w-14 lg:h-10 h-10 w-10 rounded-full' src={user?.photoURL} alt="Not Found" />
                            </Link>
                            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 
                        -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto">{user?.displayName}</span>
                        </div>
                    }
                </div>
                {
                    user ?
                        <Link onClick={handleLogOut} className='bg-yellow-800 lg:px-6 px-3 py-3 text-white rounded-md font-semibold hover:bg-yellow-700'>Log out</Link>
                        :
                        <Link to='/login' className='bg-yellow-800 text-white lg:px-10 font-semibold px-4 py-2 rounded-md hover:bg-yellow-700'>login</Link>

                }
            </div>
        </div>
    );
};

export default NavigationBar;