import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
const Home = ()=> {
   const navigate = useNavigate();
    //extract company name frm db and store in variable and using placeholder use it in route
  return (
    <div>
      <Navbar />
      <div className='h-screen justify-center flex flex-col'>

      <div className='text-center text-5xl antialiased'>

      <h1 className='m-10'>You are at Home!</h1>
      </div>

      <div className='mx-auto'>
        <button className='btn  btn-accent  antialiased text-xl' onClick={()=>navigate('/company/register')}>Are you a Company?</button>


        <br />
        <p className='text-center m-5 text-3xl'>------OR------</p>
        <br />
        <button className='btn btn-secondary text-xl' onClick={()=>navigate('/farmer/register')}>Are you a Farmer?</button>
        </div>
      </div>
    
    </div>
  )
}

export default Home
