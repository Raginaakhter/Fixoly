import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {

    const handleDelete = _id =>{
        console.log("Delete",_id);
        fetch(`https://fixolyserver.vercel.app/users/${_id}`,{
            method:"DELETE"
            // "content-type":"application/json"
        })
        
.then(res=>res.json())
.then(data=>{
    console.log(data);
    if(data.deletedCount>0){
        alert('deleted successfully');
    }
})
    }
    const users = useLoaderData();
    return (
        <div>
            <h2>users:{users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email} {user._id}
                    <button className='ml-5 text-red-700 '
                    
                    onClick={ ()=> handleDelete(user._id)}
                    >Delete</button>
                    
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;