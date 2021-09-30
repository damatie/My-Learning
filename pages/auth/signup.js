import { useState } from "react" 
import AuthLayout from "../../components/layouts/authLayout"
import Button from "../../components/shared/forms/button"
import Icon from "../../components/shared/icon"
import Link from 'next/link'
import {InputText,InputEmail,InputPwd} from "../../components/shared/forms/inputText"

export default function Signup(){
 
   // Handle form validation 
   const {register,formState: { errors }, handleSubmit,watch } = useForm()
  return(
    <AuthLayout>
      <div className=" w-full ">
        <span className="block text-md font-bold"> Create a My learning account</span>
        <span className="block text-sm text-text-low-light font-medium">Start developing your company by taking the first step </span>
        <div className=" block w-full my-6">
        <Link href="#">
          <span
          className=" text-primary font-medium text-sm border py-3 rounded-md w-full justify-center flex cursor-pointer">
            <Icon
            name = "flat-color-icons_google"
            width= {18} 
            height= {18}
            />
            <span className=" flex-none px-1 inline-block  text-sm "> Create Account with Google</span>
          </span>
          </Link>
        </div>
        <div className="w-full flex py-3 ">
          <div className=" w-5/12 flex-none"> <hr /></div>
          <span className="w-2/12 inline-block -mt-3 text-center text-base font-semibold text-text-low-light">Or</span>
          <div className="flex-none w-5/12 "> <hr /></div>
        </div>
        <div className="block ">
          <form  className= "space-y-3">
            <div className="grid grid-cols-2 gap-4 ">  
              <span>
              <InputText name = "firstName" type = "text" label="First Name" register={register} required />
              </span>
              <span>
              <InputText name = "firstName" type = "text"  label="Last Name " register={register} required />
              </span>
            </div>
            <div className="grid grid-cols-1  gap-4 "> 
              <span>
                <InputEmail  name = "firstName" type = "text"  label="Email  " register={register} required />
              </span>
              <span>
              <InputPwd  name = "password"   label="Password  " register={register} required
               />
              </span>
              <span>
                <InputPwd name = "password"      label="Confirm Password  " register={register} required 
                />
              </span>
            </div>
            <div className=" block w-full">
              <Button
              className=" bg-call-to-action text-white text-sm uppercase w-full py-3 rounded font-medium"
              label="Create an account"
              />
            </div>
            <div className="w-full text-xs font-semibold text-center text-primary">
              <span>
                By Creating an account , I agree to the terms of <span className=" text-success">Service</span> and <span className=" text-success"> Privacy policy</span>
              </span>
            </div>
          </form>
        </div>
      </div>
    </AuthLayout>
  )

}