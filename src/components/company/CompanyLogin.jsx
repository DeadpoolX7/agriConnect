import { loginUser } from "../../services/Auth";
import { useForm } from "react-hook-form";
import React, { useState } from 'react'
import { getCurrentUser } from "../../services/Auth";
import { useNavigate, Link } from "react-router-dom";
import { account } from "../../services/Appwrite";
import Toast from "../../pages/Toast";

const CompanyLogin = () => {
    const {register, handleSubmit, formState :{errors}} = useForm();
    const nav = useNavigate();
    const [ loading, setLoading ] = useState(false);
    const [toast, setToast] = useState(null);

    const onSubmit =  async (data)=>{
       try {
         setLoading(true);
       const res =  await loginUser(data);
       setLoading(false)
       console.log(res);
       const u = await account.get();
       console.log(u)
       nav(`/${u.name}/dashboard`)
       } catch (error) {
        console.log(error);
        setLoading(false);
        setToast({
          message: error.message,
          type: 'error'
      });
       }
    }

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl">Login, Company/Organisation</h1>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
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
            No account yet?
          </span>
          <Link to='/company/register' className="text-blue-500 underline">SignUp</Link>
        </div>
    <div className="form-control ">
    <button type="submit" className="btn btn-accent text-2xl antialiased">
    {
          loading ? <span className="loading loading-spinner text-error"></span> :
          <span>Login</span>
          }
    </button>
    </div>
      </form>
    </div>
    </div>
  )
}

export default CompanyLogin;
