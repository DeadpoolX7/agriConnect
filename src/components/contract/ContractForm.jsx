import React from 'react'
import { useForm } from "react-hook-form";
import { createContract } from '../../services/Contracts';

import { useNavigate } from 'react-router-dom';


const ContractForm = ()=> {

    const {register, handleSubmit, formState : { errors }} = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data)=>{
        try {
            const res = await createContract(data);
            console.log(res);
            navigate(`/:companyName/dashboard`);
            //add a toast showing succesful posting
        } catch (error) {
            console.log(error); //add a toast for error
            
        }
    }

  return (
    <div className='h-screen justify-center items-center flex flex-col'>
<h1 className='text-4xl antialiased'>
  Post your contract
</h1>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
        <div className='form-control'>
          <label className='label'>
            <span>
              Crop Name: 
            </span>
          </label>
        <input type="text" 
        {...register('title', { required: true })}
         placeholder='Enter Crop name...'
         className='input input-accent'
         />
        {errors.title && <span>This field is required</span>}
        </div>

        <div className='form-control'>
          <label className='label'>
            <span>Description: </span>
          </label>
        <textarea
        {...register('description', { required : true})}
        placeholder='Enter description with Quantity'
        className='textarea textarea-accent'></textarea>
        {errors.description && <span>This field is required</span>}
        </div>

{/* 
        <input type="nu"
        {...register('budget', {required : true})}
         placeholder='Bid price'/>
        {errors.Budget && <span>This field is required</span>} */}
        <div className='form-control mt-6'>
        <button className='btn btn-outline text-xl' type='submit'>Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ContractForm;
