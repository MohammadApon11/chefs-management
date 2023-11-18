import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import LazyLoad from 'react-lazy-load';

const ChefCard = ({ chef }) => {
    const { name, img, experience, quantity, likes, id } = chef;
    return (
        <div className='border border-red-600 rounded-xl font-semibold p-4 mt-8'>
            <img className='w-full lg:mx-1 h-56 rounded-xl' src={img} alt="" />
            <h3 className='text-2xl mt-2 font-semibold'>{name}</h3>
            <p className='mt-2'>experience: {experience}</p>
            <p>Number Of Recipes: {quantity}</p>
            <div className='flex items-center mt-2 mb-2'>
                <button className='px-6 py-1 rounded-2xl mr-3 flex gap-1 items-center bg-yellow-800 hover:bg-yellow-700 text-white'><FaThumbsUp className='mb-1' />Like</button>
                <p>5000 Likes</p>
            </div>
            <Link to={`/view/${id}`}>
                <button className='bg-yellow-800 hover:bg-yellow-700 text-white mt-2 w-full py-3 rounded-lg font-semibold'>View Recipes</button>
            </Link>
        </div>
    );
};

export default ChefCard;