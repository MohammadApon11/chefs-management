import React, { useContext } from 'react';
import { UserContext } from '../../Providers/AuthProviders';

const UserInfo = () => {

    const {user}=useContext(UserContext)
    console.log(user)
    return (
        <div>
            <h2 className='text-3xl font-semibold text-center mt-5'>{user?.displayName}</h2>
        </div>
    );
};

export default UserInfo;