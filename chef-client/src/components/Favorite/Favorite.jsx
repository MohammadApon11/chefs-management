import React from 'react';
import { Toaster,toast } from 'react-hot-toast';

const Favorite = ({ favorite }) => {
    const { img, method, name, recipes, rating, spices } = favorite;
    const handleRemove = ()=>{
        toast("Remove From Favorite")
    }
    return (
        <div className='border lg:border-none rounded-lg border-red-600 p-5'>
            <h2 className='text-4xl font-bold text-center mb-5'>{name}</h2>
            {
                recipes.map((single,index) => <div key={index} className='border px-4 rounded-xl border-red-600 mb-3'>
                    <h1 className='text-center font-semibold text-2xl mt-3'>{single.name}</h1>
                    <img className='w-[50%] mx-auto rounded-xl mb-5' src={single.img} alt="" />
                </div>)
            }
            <button onClick={handleRemove} className='bg-yellow-800 hover:bg-yellow-700 w-full text-white py-3 rounded-lg font-semibold'>Remove From Favorite</button>
            <Toaster />
        </div>
    );
};

export default Favorite;