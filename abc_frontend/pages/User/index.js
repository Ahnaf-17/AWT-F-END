
import Link from "next/link"
import { useState } from 'react'
import Head from "next/head"
import Header from "./component/header"
import MyLayout from "./component/layout"
import { useRouter } from 'next/router';
import axios from 'axios'



export default function Login() {

  const [email, setEmail] = useState('')
  // const [username,setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await axios.post('http://localhost:3000/user/login', { email, password })
      console.log("res: " + response.data)

      sessionStorage.setItem('email', response.data);
      router.push('/User/dashboard');

    } catch (error) {
      console.log("error22: " + error.message)
      setError("can't login")
    }
  }

  return (

    <>
      {/* <div>hello </div> */}

      <Header title="Login"></Header>
      {/* <form action="User/home"> */}

      <div class="min-h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-gray p-8 shadow-lg rounded-md">
          <h1 class="text-2xl font-bold mb-4">Login</h1>
          <form onSubmit={handleSubmit}>
            <div class="mb-4">
              <label for="email" class="block mb-2">Email:</label>
              <input type="email" id="email" class="border border-gray-300 rounded-md px-4 py-2 w-full" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div class="mb-4">
              <label for="password" class="block mb-2">Password:</label>
              <input type="password" id="password" class="border border-gray-300 rounded-md px-4 py-2 w-full" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Login</button>
            <Link href="User/signin">  Create new account?</Link>
            {error &&

<p >{error}</p>

}

          </form>
        </div>
      </div>



      {/* <form onSubmit={handleSubmit}>

        <h1>
          Login
        </h1>
        <br></br>
        Email :
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br></br>
        Password :
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} /><br></br>
        <input type="submit"></input>
        {error &&

          <p >{error}</p>

        }
      </form> */}






      {/* <Link href="User/signin">Create new account</Link> */}


      {/* <link href="/">Home</link>
    <link href="/about">About</link> */}
    </>

  )
}
