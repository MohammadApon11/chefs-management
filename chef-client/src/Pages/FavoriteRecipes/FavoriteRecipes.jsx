import React, { useEffect, useState } from 'react';
import Favorite from '../../components/Favorite/Favorite';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import Footer from '../../Shared/Footer/Footer';

const FavoriteRecipes = () => {
    const [favorite, setFavorite] = useState([])
    useEffect(() => {
        const get = JSON.parse(localStorage.getItem('chefs') || '[]')
        setFavorite(get)
    }, [])
    return (
        <>
            <NavigationBar />
            <div >
                <h2 className='text-4xl mt-10 font-bold text-center'>Your <span className='text-yellow-800 hover:text-yellow-700'>Favorite Recipes</span> Here</h2>
            </div>
            <div className='lg:px-36'>
                {
                    favorite?.map((favorite, index) => <Favorite
                        key={index}
                        favorite={favorite}
                    ></Favorite>)
                }
            </div>
            <Footer />
        </>
    );
};

export default FavoriteRecipes;