import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

export default function Signout(){
    const handleSignOut = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('https://localhost:3000/user/logout')
            console.log(response.data)
            sessionStorage.removeItem('email');
            setEmail(null);
            router.push('/User');
          } catch (error) {
            console.error(error)
          }
    
  };
  return(
    <p>Signed out</p>
  )
}