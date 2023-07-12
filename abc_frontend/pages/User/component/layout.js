import Header from "./header"
import Link from "next/link"
import Image from 'next/image'
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';




export default function MyLayout(props)   
{
    const [email, setEmail] = useState(null);
    const router = useRouter();
    
  useEffect(() => {
      if (typeof window !== 'undefined')
      {
          const session = sessionStorage.getItem('email');
          if (session) {
            setEmail(session);
           
          }          
      }
   
  }, []);
  const handleSignOut = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.get('http://localhost:3000/user/logout')
        console.log(response.data)
        sessionStorage.removeItem('email');
        setEmail(null);
        router.push('/User');
      } catch (error) {
        console.error(error)
      }

};



    return(
        <>
        <Header title={props.title} />
        <nav>






            
      <i><h3><p>Start your crypto journey</p></h3></i><br></br>
        <Link href="./home"> Home</Link> <br></br>
        <Link href="./about"> About US</Link><br></br>
        <Link href="./status"> Status</Link><br></br>
        <Link href="./updateuser"> Update User</Link><br></br>
        <Link href="./deleteuser"> Delete User</Link><br></br>
        <Link href="./editstatus"> Edit Status</Link><br></br>
        <Link href="./deletestatus"> Delete Status</Link><br></br>
        <Link href="./profile"> My profile</Link><br></br>
        <Link href="./tradehistory"> Trade History</Link><br></br>
        <Link href="./contact"> contact</Link><br></br>
        <Link href="./"> sign out</Link><br></br>
        <Link href="./dashboard"> Dashboard</Link><br></br> 
        {/* <button onClick={handleSignOut}>Sign out</button> */}

        {/* <Link href="./getusers"> Dashboard</Link><br></br> */}


        {/* <Link href="./index"> Index</Link><br></br> */}



    
        
        </nav> 
        
        
        {/* <main> */}

        {/* </main> */}
        <main className="container mx-auto">{props.children}</main>

        <center><div style={{ position: "absolute", bottom: 0, width:"100%" }}>
            Digital Crypto Currency @copyright<br></br>
            
            <Link href="./privacy"> Privacy</Link> |
            <Link href="./faq"> FAQ</Link> |
            <Link href="./support"> Support</Link>
            </div></center>
        
        </>
    )
}