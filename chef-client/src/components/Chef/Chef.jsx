import React, { useEffect, useState } from 'react';
import ChefCard from '../ChefCard/ChefCard';

const Chef = () => {
    const [chefs,setChefs]=useState([])
    
    useEffect( ()=>{
        fetch('https://chef-recipes-hunter-server-a2n426.vercel.app/data')
        .then(res=>res.json())
        .then(data=>setChefs(data))
    },[])
    return (
        <div className='lg:px-36 lg:mt-24 px-6'>
            <h2 className='text-4xl text-center mt-10 font-bold'>Welcome to <span className='text-yellow-800 text-5xl'>World Greatest</span> Chef World</h2>
            <div className='grid mt-7 lg:grid-cols-3 gap-5'>
                {
                    chefs?.map(chef=><ChefCard
                        key={chef.id}
                        chef={chef}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Chef;