import React from 'react';
import Recipes from '../Recipes/Recipes';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaThumbsUp } from 'react-icons/fa';

const ChefBanner = ({ chef }) => {
    const { name, img, experience, description, quantity, likes, id, recipes } = chef;
    return (
        <div>
            <div className='lg:grid grid-cols-2 justify-between gap-10'>
                <div>
                    <img className='rounded-xl' src={img} alt="" />
                </div>
                <div className='lg:text-start text-center'>
                    <h1 className='text-4xl text-yellow-800 hover:text-yellow-700 font-bold lg:mt-0 mt-10'>{name}</h1>
                    <p className='mt-3 text-xl'>{description}</p>
                    <div className='text-start border border-red-600 p-4 rounded-lg mt-2'>
                        <h2 className='text-2xl font-semibold'>Additional Information</h2>
                        <p className='text-xl mt-2 mb-2'><span className='font-semibold'>Number of Recipes:</span> {quantity} Items</p>
                        <p className='text-xl'><span className='font-semibold text-xl'>experience:</span> {experience}</p>
                        <div className='flex lg:mb-2 mb-10 lg:justify-normal items-center mt-2'>
                            <button className='px-6 py-1 rounded-2xl mr-3 flex gap-1 items-center font-semibold bg-yellow-800 hover:bg-yellow-700 text-white'><FaThumbsUp className='mb-1' />Like</button>
                            <p className='text-xl'>5000 Likes</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:grid lg:mt-24 gap-5 grid-cols-3'>
                {
                    recipes.map((recipe, index) => <Recipes
                        key={index}
                        recipe={recipe}
                        chef={chef}
                    ></Recipes>)
                }
            </div>
            <Link to='/favorite'>
                <div className='flex justify-end'>
                    <button className='bg-yellow-800 mt-4  hover:bg-yellow-700 px-6 flex items-center gap-2 py-2 rounded-lg font-semibold text-white '>My Favorite<FaArrowRight></FaArrowRight> </button>
                </div>
            </Link>
        </div>
    );
};

export default ChefBanner;