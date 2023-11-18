import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar';
import ChefBanner from '../../components/ChefBanner/ChefBanner';

const Details = () => {
    const chef = useLoaderData()
    return (
        <div>
            <div className='lg:px-36 px-6 mt-10'>
                <ChefBanner key={chef?.id} chef={chef}></ChefBanner>
            </div>
        </div>
    );
};

export default Details;