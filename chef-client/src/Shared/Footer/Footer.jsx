import React from 'react';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaFacebookMessenger, FaPhoneAlt, FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare, FaInstagramSquare } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='lg:h-72 mt-16 bg-gray-800'>
            <div className='lg:grid grid-cols-3'>
                <div className='border p-8'>
                    <h1 className='text-2xl font-bold text-white mb-4'>Subscribe</h1>
                    <p className='text-gray-400'>Register and get notified al the news & updates before it gets too late.</p>
                    <div className='flex gap-2 mt-2'>
                        <input className='bg-gray-700 rounded-lg text-gray-500 px-4 py-3' placeholder='Your Email Address' type="text" name="text" id="" />
                        <Link className='bg-yellow-900 hover:bg-yellow-700 text-white font-semibold px-4 py-3 rounded-lg' to='/sign-up'>Sign up</Link>
                    </div>
                </div>
                <div className='p-8 border'>
                    <h1 className='font-bold text-white mb-4'>Explore</h1>
                    <div className='text-gray-400'>
                        <p>Browse Recipes</p>
                        <p>Submit Recipe</p>
                        <p>Our Chefs</p>
                        <p>Latest News</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='border p-8'>
                    <h2 className='font-bold text-white mb-4'>Contact</h2>
                    <div className='text-gray-400'>
                        <p className='flex items-center gap-2'><FaMapMarkerAlt /> 707 Mark View Street</p>
                        <p className='mb-2'>New Town, California</p>
                        <p className='flex mb-2 items-center gap-2'><FaFacebookMessenger /> needhelp/facebook.com</p>
                        <p className='flex items-center gap-2'><FaPhoneAlt /> 666 777 00000</p>
                    </div>
                </div>
            </div>
            <div className='flex text-gray-400 items-center justify-between p-8 bg-gray-800'>
                <p>All Rights Reserved. Your company name here.</p>
                <div className='flex gap-3 text-4xl'>
                    <FaFacebookSquare />
                    <FaTwitterSquare />
                    <FaInstagramSquare />
                    <FaYoutubeSquare />
                </div>
            </div>
        </div>
    );
};

export default Footer;