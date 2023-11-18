import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='lg:px-36 px-6'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold mt-10'>About Us</h1>
                <p className='font-semibold lg:mt-2 mt-5'>Food First’s work is made possible by a vast network of donors, supporters, and partners based in the US and globally. This support has allowed us to maintain the strong, critical, and independent voice Food First is known for. There are numerous ways to support Food First and we hope you will consider doing so!</p>
                <h2 className='font-semibold mt-16 text-4xl mb-5 text-yellow-800'>WHO WE ARE</h2>
            </div>
            <div className='lg:grid grid-cols-3 gap-5'>
                <div className='border mt-4 border-red-600 mx-auto p-5 rounded-lg'>
                    <img className='rounded-lg' src="https://img.freepik.com/free-psd/elegant-certificate-achievement-with-red-golden-details_69286-449.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                    <h2 className='text-3xl font-semibold mt-3'>Certified By World Food Association</h2>
                    <p className='text-lg'>Food First’s work is made possible by a vast network of donors, supporters,</p>
                    <button className='bg-yellow-800 hover:bg-yellow-700 px-5 py-2 rounded-lg font-semibold text-white mt-2'>More Info</button>
                </div>
                <div className='border mt-4 border-red-600 mx-auto p-5 rounded-lg'>
                    <img className='rounded-lg' src="https://img.freepik.com/free-vector/gradient-elegant-certificate-template_23-2148973721.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                    <h2 className='text-3xl font-semibold mt-3'>Certified By World Food Association</h2>
                    <p className='text-lg'>Food First’s work is made possible by a vast network of donors, supporters,</p>
                    <button className='bg-yellow-800 hover:bg-yellow-700 px-5 py-2 rounded-lg font-semibold text-white mt-2'>More Info</button>
                </div>
                <div className='border mt-4 border-red-600 mx-auto p-5 rounded-lg'>
                    <img className='rounded-lg' src="https://img.freepik.com/free-vector/flat-certificate-template_52683-61537.jpg?size=626&ext=jpg&ga=GA1.1.24677610.1673838713&semt=ais" alt="" />
                    <h2 className='text-3xl font-semibold mt-3'>Certified By World Food Association</h2>
                    <p className='text-lg'>Food First’s work is made possible by a vast network of donors, supporters,</p>
                    <button className='bg-yellow-800 hover:bg-yellow-700 px-5 py-2 rounded-lg font-semibold text-white mt-2'>More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;