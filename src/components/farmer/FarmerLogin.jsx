import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
const FarmerLogin = () => {
const { register, handleSubmit, formState : {errors}} = useForm();
  const onSubmit =  async (data)=>{
    try {
    const res =  await loginUser(data);
    console.log(res);
    const u = await account.get();
    console.log(u)
    nav(`/${u.name}/dashboard`)
    } catch (error) {
     console.log(error)
    }
 }
  return (
    <div className='h-screen flex flex-col mx-auto items-center justify-center'>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit = {handleSubmit(onSubmit)} className="card-body">
        <div className='form-control'>
          <label className="label">
            <span className="label">
              Email:
            </span>
          </label>

        <input type="text " placeholder="Email address" 
        {...register('email', {required: true})}
        className="input input-primary"
        />
        {errors.email && <span>This field is required</span>}
        </div>

      <div className="form-control">
        <label className="label">
          <span className="">
            Password:
          </span>
        </label>
        <input type="password" placeholder="Password"
         {...register('password', {required: true})}
         className="input input-primary"
        />
        {errors.password && <span>This field is required</span>}
        </div>
        <div>
          <span>
            Already have an account?
          </span>
          <Link to='/farmer/register' className='text-blue-500'>Register</Link>
        </div>
    <div className="form-control ">
    <button type="submit" className="btn btn-accent text-2xl antialiased">Login</button>
    </div>

      </form>
    </div>
    </div>
  )
}

export default FarmerLogin;
