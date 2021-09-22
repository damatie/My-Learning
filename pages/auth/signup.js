import {InputText,InputEmail} from "../../components/forms/inputText"
import Button from "../../components/forms/button"
import { useForm } from "react-hook-form";
import React, { useRef } from "react";

export default function Signup (){
  const {register,formState: { errors }, handleSubmit,watch } = useForm()
  const onSubmit = (data)=> {
    console.log(data)
  }
  // function saveData(){
  //   console.log("Submited")
  // }
  return(
    <>
      <div className="border w-4/12 px-4 py-16 m-auto my-10  ">
      <form onSubmit={handleSubmit(onSubmit)} className= "space-y-3">
        <span className="block">
          <InputText className= "border px-3 py-2 w-full outline-none" name = "firstName" type = "text" label="First Name" register={register} required />
          <span className="block text-xs text-red-500">{errors.firstName?.type === 'required' && "First name is required"}</span>
        </span>
        <span className="block">
          <InputText className= "border px-3 py-2 w-full outline-none" name = "lastName" label="Last Name" register={register} required />
          <span className="block text-xs text-red-500">{errors.lastName?.type === 'required' && "Last name is required"}</span>
        </span>
        <span className="block">
          <InputEmail className= "border px-3 py-2 w-full outline-none" name = "email" type = "text"  label="Email Address" register={register} required />
          <span className="block text-xs text-red-500">
            {errors.email?.type === 'required' && "Email Address is required"}
            {errors.email?.type === 'pattern' && "Please enter a valid email"}
          </span>
        </span>
        <span className="block">
          <InputText className= "border px-3 py-2 w-full outline-none" type="password" name = "password" label="Password" register={register} required />
          <span className="block text-xs text-red-500">{errors.password?.type === 'required' && "Password is required"}</span>
        </span>
      <Button
      className = "bg-blue-500 py-1 px-3  text-white"
      type = "submit"
      label = "Submit" 
      />
    </form>
      </div>
    </>
  )
}