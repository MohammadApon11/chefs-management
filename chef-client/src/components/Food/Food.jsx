import React from 'react';

const Food = () => {
    return (
        <div className='lg:mt-24 divide-y-4 divide-red-600 mt-10 lg:px-36 px-6'>
            <div className='text-center'>
                <h2 className='text-5xl font-semibold '>Hot <span className='text-yellow-800'>Items</span>!!!</h2>
                <small className='italic text-red-700'>Exclusive Hot Items</small>
            </div>
            <div className='lg:grid grid-cols-3 gap-10'>
                <div className='mt-10 border border-red-600 rounded-lg p-5 text-center'>
                    <img className='w-96 transform hover:rotate-2 rounded-full' src="https://images.unsplash.com/photo-1604634077373-a279cadc62c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <button className='mt-2 bg-yellow-800 p rounded-2xl text-center left-24 text-white px-10 hover:bg-yellow-700 py-3 text-2xl'>Cake</button>
                </div>
                <div className='mt-10  border border-red-600 rounded-lg p-5 text-center'>
                    <img className='w-96 transform hover:rotate-2 rounded-full' src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <button className='mt-2 hover:bg-yellow-700 bg-yellow-800 p rounded-2xl text-center left-24 text-white px-10 py-3 text-2xl'>Burger</button>
                </div>
                <div className='mt-10 border border-red-600 rounded-lg p-5 text-center'>
                    <img className='w-96 transform hover:rotate-2 rounded-full' src="https://plus.unsplash.com/premium_photo-1663852297514-2211cfb8ae9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <button className='mt-2 bg-yellow-800 p rounded-2xl text-center left-24 hover:bg-yellow-700 text-white px-10 py-3 text-2xl'>Chicken</button>
                </div>
                <div className='mt-10  border border-red-600 rounded-lg p-5 text-center'>
                    <img className='w-96 transform hover:rotate-2 rounded-full' src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" />
                    <button className='mt-2 hover:bg-yellow-700 bg-yellow-800 p rounded-2xl text-center left-24 text-white px-10 py-3 text-2xl'>Burger</button>
                </div>
                <div className='mt-10 border border-red-600 rounded-lg p-5 text-center'>
                    <img className='w-96 transform hover:rotate-2 rounded-full' src="https://plus.unsplash.com/premium_photo-1663852297514-2211cfb8ae9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <button className='mt-2 bg-yellow-800 p rounded-2xl text-center left-24 hover:bg-yellow-700 text-white px-10 py-3 text-2xl'>Chicken</button>
                </div>
                <div className='mt-10 border border-red-600 rounded-lg p-5 text-center'>
                    <img className='w-96 transform hover:rotate-2 rounded-full' src="https://images.unsplash.com/photo-1604634077373-a279cadc62c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    <button className='mt-2 bg-yellow-800 p rounded-2xl text-center left-24 text-white px-10 hover:bg-yellow-700 py-3 text-2xl'>Cake</button>
                </div>
            </div>
        </div>
    );
};

export default Food;