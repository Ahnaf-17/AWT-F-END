import { useForm } from 'react-hook-form';
import axios from "axios"
import { useState } from "react"
import MyLayout from "@/pages/User/component/layout"
import { useRouter } from 'next/router'
import SessionCheck from '@/pages/User/component/sessioncheck'
import MyFooter from './component/footer';
import Link from "next/link"


export default function addneuser() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const validateFile = (value) => {
    const file = value[0];
    const allowedtypes = ["image/jpg", "image/png"];

    if (!allowedtypes.includes(file.type)) {
      return false;
    }
  }

  const [success, setSuccess] = useState('')
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('uname', data.uname);
    formData.append('email', data.email);
    formData.append('currency', data.currency);
    formData.append('password', data.password);
    formData.append('filename', data.file[0]);
    formData.append('id', data.id);


    console.log(formData);
    try {
      const response = await axios.post("http://localhost:3000/user/signup",
        formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      });
      setSuccess('successfully added');
      console.log("check")
      reset();
    }
    catch (error) {
      console.log(error.response.data.message);
      setSuccess('something has been wrong' + error.response.data.message);
    }
  };

  return (
    <>
      <SessionCheck />
      {/* <MyLayout title="Add User" /> */}
      <div className="text-center">
        <div className="pt-40 sm:ml-10">
          <h1 className="text-2xl font-bold mb-4">Add New User</h1>
          <p>{success}</p>

          {/* Form start */}
          <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" action="#" className="max-w-md mx-auto">
            <div className="mb-4">
              <label htmlFor="name" className="block font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                required
                className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none"
                {...register('name', { required: true })}
              />
              {errors.name && <p className="text-red-500">Name is required</p>}
            </div>
            {/* <br></br> */}
            {/* username input */}
            <label htmlFor="username" className="block font-bold mb-2">Username</label>
            <input type="text" id="username" className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none"
              placeholder="username" required=""
              {...register('username', { required: true, pattern: /^[a-zA-Z]+$/ })}
            />
            {errors.username && (
              <p>
                {errors.username.type === 'required'
                  ?
                  <p >Username is required</p>

                  :
                  <p >username must not have anything other than letters and numbers</p>
                }
              </p>
            )}

            <br></br>
            {/* email input */}
            <label htmlFor="email" className="block font-bold mb-2">Your email</label>
            <input type="email" id="email" className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none"
              placeholder="name@company.com" required=""
              {...register('email', { required: true, pattern: /^[a-zA-Z0-9]+@[a-zA-Z]+(?:\.[a-zA-Z]+)*$/ })}
            />
            {errors.email && (
              <p>
                {errors.email.type === 'required'
                  ?
                  <p >Email is required</p>

                  :
                  <p >Invalid email address</p>
                }
              </p>
            )}
            <br></br>
            {/* password input  */}

            <label htmlFor="password" className="block font-bold mb-2">Password</label>
            <input
              type="password"
              id="password" placeholder="••••••••" required="" className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none"
              {...register('password', { required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/})}
            />
            {errors.password && (
              <p>
                {errors.password.type === 'required'
                  ?
                  <p >password is required</p>
                  :
                  <p >Password must be equal or more than 8 characters long with at least 1 special character, 1 capital letter, 1 small and 1 digit</p>

                }
              </p>
            )}
            <br></br>
            {/* mobile no input  */}

            {/* <label htmlFor="mbl_no" className="block font-bold mb-2">Mobile no.</label>
            <input
              type="text"
              id="mbl_no" placeholder="01xxxxxxxxx" required="" className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none"
              {...register('mbl_no', { required: true, pattern: /^(01)[3,5,6,7,8,9][0-9]{8}$/ })}
            />
            {errors.mbl_no && (
              <p>
                {errors.mbl_no.type === 'required'
                  ?
                  <p >Mobile no is required</p>
                  :
                  <p >Mobile no. is not correct</p>

                }
              </p>
            )}
            <br></br> */}
            {/* currency input  */}

            <label htmlFor="currency" className="block font-bold mb-2">Currency</label>
            <input type='text' id="currency" rows="4" className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none" placeholder="Currency" {...register('currency', { required: true })} />
            <br></br>

            {/* file input  */}

            <label htmlFor="file_input" className="block font-bold mb-2">Upload file</label>
            <input type="file" id="file" className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none"
              {...register('file', { required: true, validate: validateFile })}
            />
            {errors.filename &&
              <p>
                {errors.filename.type === 'required'
                  ?
                  <p >file is required</p>
                  :

                  <p >invalid file</p>
                }
              </p>}
            <br></br>
            {/* Submit button */}          <br></br>

            {/* <label htmlFor="id" className="block font-bold mb-2">id</label>
            <input type='id' id="currency" rows="4" className="border border-gray-300 rounded w-full px-3 py-2 focus:outline-none" placeholder="id" {...register('id', { required: true })} />
            <br></br> */}
            

            {/* <input type='text'>submit</input> */}

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
          <Link href="/">back to login page</Link>

          <br></br>
          <br></br>
          <br></br>
        </div>
        {/* <MyFooter /> */}
      </div>
    </>
  );
}
