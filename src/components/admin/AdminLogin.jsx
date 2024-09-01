import React, { useState } from 'react'
import {  useForm } from 'react-hook-form'
import { isAdmin, loginAdmin } from '../../services/AdminAuth';
import { useNavigate } from 'react-router-dom';
import Toast from '../../pages/Toast';

const AdminLogin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [toast, setToast] = useState(null);
    const [togglePassword, setTogglePassword] = useState(false);

    const togglePasswordButton = ()=>{
      if(togglePassword === false){
        setTogglePassword(true);
      }else{
        setTogglePassword(false)
      }
    }
    const navigate = useNavigate();
    const onSubmit = (data,e)=>{
        e.preventDefault();
        if(isAdmin(data)){
            localStorage.setItem('isAdminLoggedIn', true);
            navigate('/admin/dashboard');
        }else{
            setToast({
                message: `You're not an Admin`,
                type: 'success'
            });
        }
    }


    return (
        <div className='h-screen flex flex-col mx-auto items-center justify-center'>
         {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
        <h1 className='text-5xl antialiased'>Welcome, Admin!</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className='card-body' onSubmit = {handleSubmit(onSubmit)}>
                <div className='form-control'>
                    <label className='label'>
                        <span>
                            Email:
                        </span>
                    </label>
                <input type="text " placeholder="Admin Email"
                    {...register('email', { required: true })}
                    className='input input-bordered'
                />
                {errors.email && <span>This field is required</span>}

                </div>

                <div className='form-control'>
            <label className='label'>
                <span>
                    Password:
                </span>
            </label>
                <input type={togglePassword ? 'text' : 'password'} placeholder="Password"
                    {...register('password', { required: true })}
                    className='input input-bordered'
                />
                <input type="button" value={togglePassword ? "Hide" : "Show"} onClick={togglePasswordButton} className='absolute inset-y-12 bottom-0 right-3  pr-7 flex items-center cursor-pointer'/>
                {errors.password && <span>This field is required</span>}
                </div>

            <div className='form-control mt-6'>

                <button type="submit" className='btn btn-error'>Login</button>
            </div>
            </form>
        </div>
        </div>
    )
}

export default AdminLogin
