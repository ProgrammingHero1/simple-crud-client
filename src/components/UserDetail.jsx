import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetail = () => {
    const user = useLoaderData();
    console.log(user);
    return (
        <div>
            
        </div>
    );
};

export default UserDetail;