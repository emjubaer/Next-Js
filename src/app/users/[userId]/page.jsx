import React from 'react';

const UserPageDetails = async ({params}) => {
    const {userId} = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await res.json();
    
    return (
            <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p>{user.email}</p>
            <p>{user.phone}</p>
        </div>
    );
};

export default UserPageDetails;