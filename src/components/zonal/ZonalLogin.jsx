import { loginUser } from "../../services/Auth";
import { useForm } from "react-hook-form";
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { account } from "../../services/Appwrite";

const ZonalLogin = () => {
    const {register, handleSubmit, formState :{errors}} = useForm();
    const [  togglePassword, setTogglePassword] =useState(false);
    const [ loading, setLoading ] = useState(false);

    const togglePasswordButton = ()=>{
      if(togglePassword === false){
        setTogglePassword(true);
      }else{
        setTogglePassword(false)
      }
    }
    const nav = useNavigate();
    const onSubmit =  async (data)=>{
       try {
        setLoading(true);
       const res =  await loginUser(data);
       setLoading(false);
       console.log(res);
       const u = await account.get();
       console.log(u)
       nav(`/${u.name}/dashboard`)
       } catch (error) {
        console.log(error)
       }
    }

  return (
    <div className="h-screen justify-center flex flex-col mx-auto items-center">
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
        <input
              type="button"
              value={togglePassword ? "Hide" : "Show"}
              onClick={togglePasswordButton}
              className="absolute inset-y-0 bottom-20 right-3  pr-7 flex items-center cursor-pointer"
            />
        </div>
    <div className="form-control ">
    <button type="submit" className="btn btn-accent text-2xl antialiased">{
          loading ? <span className="loading loading-spinner text-primary"></span> :
          <span>Login</span>
          }</button>
    </div>
      </form>
    </div>
    </div>
  )
}

export default ZonalLogin;
