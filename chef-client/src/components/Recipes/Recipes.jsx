import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Recipes = ({ recipe, chef }) => {
    const { img, method, name, rating, spices } = recipe;

    const recipes = chef;

    const [active, setActive] = useState(false)
    const handleFavorite = (event) => {

        let newCart = [];
        const exists = JSON.parse(localStorage.getItem('chefs'));
        if (exists) {
            newCart = [...exists, recipes]
        }
        else {
            newCart.push(recipes)
        }
        localStorage.setItem('chefs', JSON.stringify(newCart))
        toast("Favorite List Added");
        const disabled = event.currentTarget.disabled = true;
        setActive(disabled)

    }

    return (
        <div className='border mt-5 lg:mt-0 border-red-600 p-5 rounded-md'>
            <img className='rounded-lg' src={img} alt="" />
            <h1 className='text-2xl text-yellow-800 mt-2 font-semibold mb-3'>{name}</h1>
            <p className='font-semibold'>{method}</p>
            <div className='mb-1'>
                <p className='text-xl font-bold text-yellow-800'>Cooking Method</p>
                {spices?.map((spice, index) => <li key={index} className='font-semibold'>{spice}</li>)}
            </div>
            <p className='text-xl gap-2 flex'>Ratings:  <Rating style={{ maxWidth: 150 }} value={rating} readOnly /></p>
            <button onClick={handleFavorite} className={`w-full p-2 font-semibold text-white rounded-lg mt-3 ${active ? 'bg-yellow-400' : "bg-yellow-800 hover:bg-yellow-700"}`}>Favorite</button>
        </div>
    );
};

export default Recipes;