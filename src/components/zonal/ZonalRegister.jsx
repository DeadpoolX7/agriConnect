import React, {useState} from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';

const ZonalRegister = () => {
    const {register, handleSubmit, formState : { errors }} = useForm();
    const [loading, setLoading] = useState(false);
  const [ togglePassword, setTogglePassword] = useState(false);
    const togglePasswordButton = () => {
      if (togglePassword === false) {
        setTogglePassword(true);
      } else {
        setTogglePassword(false);
      }
    };
    const onSubmit = async (data) => {
        try {
          setLoading(true);
          const res = await registerUser(data);
          setLoading(false);
          console.log(res);
          //const logRes = await loginUser(data); //I added a session code on yesterday, 29/08/24
          //console.log(logRes);
          const companyName = data.name;
          navigate(`/${companyName}/dashboard`);
        } catch (error) {
          console.error('Registration failed:', error);
        }
      };
  return (
    <div className='h-screen flex flex-col items-center justify-center'>
        <h1>Welcome, Zonal!</h1>
        <em>Enter your Credentials</em>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
        <div className='form-control'>
        <label className='label'>
          <span className='label-text '>Email</span>
        </label>
        <input {...register('email', { required: true })} type="email" placeholder="Enter your valid Email" 
         className="input input-bordered"
         />
        {errors.email && <span>This field is required</span>}

        </div>

      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>Password</span>
        </label>
        <input {...register('password', { required: true })} type="password" placeholder="Set Password"   className="input input-bordered"
        />
        {errors.password && <span>This field is required</span>}
        <input
              type="button"
              value={togglePassword ? "Hide" : "Show"}
              onClick={togglePasswordButton}
              className="absolute inset-y-0 bottom-20 right-3  pr-7 flex items-center cursor-pointer"
            />

      </div>

      <div className='form-control'>
        <label htmlFor="company_name" className='label'>
          <span className='label-text'>Company Name:</span>
        </label>
        <input {...register('name', { required: true })} placeholder="Name" 
         className="input input-bordered"
         />
        {errors.name && <span>This field is required</span>}
      </div>
      <div className='form-control mt-6'>
      <button type="submit" className="btn btn-primary">
              {loading ? (
                <span className="loading loading-spinner text-primary"></span>
              ) : (
                <span>Register</span>
              )}  
              </button>
              </div>
      <div >
          <span className='mr-2 text-xl'>
            Already Have an Account?
          </span>
          <Link to='/company/login' className='underline text-blue-500'> Try Login</Link>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ZonalRegister
