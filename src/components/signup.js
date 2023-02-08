import React, { useState } from 'react';
// import Content from '../assets/content.png';
import {useNavigate} from 'react-router-dom';

const SignUp=()=> {

    const [name,setName] = useState("");
    const [password,setPassword] = useState("");
    const [email,setEmail] = useState("");
    const navigate = useNavigate();

    async function createAccount(){
        let item = {name, email, password};

        let result = await fetch("http://192.168.7.238:3000/user/create/test",{
            method:'POST',
            body: JSON.stringify(item),
            headers:{
                "Content-type":'application/json',
                "Accept":'application/json',
            }
        })

        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate('/login')
    }

    return (
      <div>
        <section className='sg'>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      {/* <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-black">
          <img class="w-8 h-8 mr-2" src={Content} alt="logo"/>
          Untitled   
      </a> */}
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:border-gray-100">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-black">
                  Create and account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                      <input type="email" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} class="bg-black-50 border border-black-200 text-black-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-black-100 dark:border-gray-100 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email" required=""/>                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-Black">Password</label>
                      <input type="password" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder="••••••••" class="bg-gray-50 border border-gray-200 text-gray-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>                  </div>
                  <div>
                      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Enter Name</label>
                      <input type="text" name="name" id="name" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}  class="bg-gray-50 border border-gray-200 text-gray-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-900 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 dark:text-gray-900">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="button" onClick={createAccount} class="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                  <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account? <a href='/login' class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
        
      </div>
    );
  }
  
  export default SignUp;