import AuthLayout from "../../components/layouts/authLayout"
import Button from "../../components/shared/forms/button"
import Icon from "../../components/shared/icon"
import Link from 'next/link'
import {InputPwd,InputEmail} from "../../components/shared/forms/inputText"
import { useForm } from "react-hook-form";

export default function Signin(){
   // Handle form validation 
   const {register,formState: { errors }, handleSubmit,watch } = useForm()
  return(
    <AuthLayout>
      <div className=" w-full pt-6 pb-10">
        <span className="block text-md font-bold">Welcome Back!</span>
        <span className="block text-sm text-text-low-light font-medium">Login to your Account </span>
        <div className=" block w-full my-6">
        <Link href="#">
          <span
          className=" text-primary font-medium text-sm border py-3 rounded-md w-full justify-center flex cursor-pointer">
            <Icon
            name = "flat-color-icons_google"
            width= {18} 
            height= {18}
            />
            <span className=" flex-none px-1 inline-block  text-sm "> Signin with Google</span>
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
            <div className="grid grid-cols-1  gap-4 "> 
              <span>
                <InputEmail
                name = "email" type = "text"  label="Email  " register={register} required 
                />
              </span>
              <span>
                <InputPwd name = "password" type = "text"  label="Password  " register={register} required />
              </span>
            </div>
            <div className="flex pt-3">
             <div className="flex flex-1">
              <span className=" inline-block">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
              </span>
              <span className=" inline-block text-primary text-sm px-2">
                Remember Password 
              </span>
             </div>
             <span className="flex-1 text-error  underline text-sm  inline-block w-full text-right">
               Forgot Password ?
             </span>
            </div>
            <div className=" block w-full">
              <Button
              className=" bg-call-to-action text-white text-sm uppercase w-full py-3 rounded font-medium"
              label="Login"
              />
            </div>
            
          </form>
        </div>
      </div>
    </AuthLayout>
  )

}