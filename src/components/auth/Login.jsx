import { loginUser } from "../../services/Auth";
import { useForm } from "react-hook-form";
import React from 'react'
import { getCurrentUser } from "../../services/Auth";
import { useNavigate } from "react-router-dom";
import { account } from "../../services/Appwrite";

const Login = () => {
    const {register, handleSubmit, formState :{errors}} = useForm();
    const nav = useNavigate();
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
    <div>
      <form onSubmit = {handleSubmit(onSubmit)}>
        <input type="text " placeholder="email" 
        {...register('email', {required: true})}
        />
        {errors.email && <span>This field is required</span>}

        <input type="password" placeholder="password"
         {...register('password', {required: true})}
        />
        {errors.password && <span>This field is required</span>}

    <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
