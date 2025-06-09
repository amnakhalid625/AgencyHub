import React from 'react'
import { useUserAuth } from '../context/UserAuthContext';

const Payment = () => {

const { user, logOut } = useUserAuth();

    const handlelogOut = async () => {
        try {
            await logOut();
            navigate('/login');
        } catch (error) {
            console.log(error.message);
        }
    };


  return (
   <>
   
   <h1>Hellow {user.name}</h1>

  {user && user.email}


  <button onClick={handlelogOut}>Logout</button>


   
   
   </>
  )
}

export default Payment