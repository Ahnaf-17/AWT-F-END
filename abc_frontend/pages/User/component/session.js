import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Session() {
  const [email, setEmail] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const session = sessionStorage.getItem('email');
      if (session) {
        setEmail(session);
      }
    }
  }, []);

  const handleSignOut = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('https://localhost:3000/user/logout');
      console.log(response.data);
      sessionStorage.removeItem('email');
      setEmail(null);
      router.push('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {email !== null ? (
        <>
          <a href="#">{email}</a>
          <button onClick={handleSignOut}>Log out</button>
          <Link href="/User/dashboard">Dashboard</Link>
        </>
      ) : (
        <Link href="/signin">Sign in</Link>
      )}
    </>
  );
}
