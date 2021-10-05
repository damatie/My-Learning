import { useState } from "react" 
import AuthLayout from "../../components/layouts/authLayout"
import Button from "../../components/shared/forms/button"
import Icon from "../../components/shared/icon"
import Link from 'next/link'
import {InputText,InputEmail,InputPwd} from "../../components/shared/forms/inputText"
import { useForm } from "react-hook-form"

export default function Signup(){
  const [isPwdVisible, setIsPwdVisible] = useState(true)
  const [isPwdConfirmVisible, setIsPwdConfirmVisible] = useState(true)
  const [password, setPassword] = useState('password')
  const [confirmPassword, setConfirmPassword] = useState('password')

  function show(value){
    if(value==='password'){
      {isPwdVisible? setPassword('text')|| setIsPwdVisible(!isPwdVisible):setPassword('password')||setIsPwdVisible(!isPwdVisible)}
      
    }
    if(value==='confirmPassword'){
      {isPwdConfirmVisible? setConfirmPassword('text')|| setIsPwdConfirmVisible(!isPwdConfirmVisible):setConfirmPassword('password')||setIsPwdConfirmVisible(!isPwdConfirmVisible)}
    }
  }

 
   // Handle form validation 
   const {register,handleSubmit,formState: { errors } } = useForm()
   const onSubmit = async data => {
    await login(data.email, data.password);
  };
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
          <form onSubmit={handleSubmit(onSubmit)} className= "space-y-3">
            <div className="grid grid-cols-1  gap-4 "> 
            <span>
              <InputText name = "companyName" type = "text" label="Company Name" register={register} required  />
             <span className=" text-error text-xs">{errors.companyName?.type === 'required' && "Company name is required"} </span>
              </span>
              <span>
                <InputEmail  name = "email" type = "text"  label="Email  " register={register} required />
                  <span className=" text-error text-xs">
                   {errors.email?.type === 'required' && "Email is required"}
                  </span>
              </span>
              <span>
              <InputPwd  name = "password"   label="Password  " 
                type={password}
                register={register} required
               onClick={(e) => show('password')} />
                <span className=" text-error text-xs">
                   {errors.password?.type === 'required' && "Password is required"}
                </span>
              </span>
              <span>
                <InputPwd name = "confirmPassword" label="Confirm Password "
                type={confirmPassword}
                register={register} 
                required onClick={(e) => show('confirmPassword')}
                />
                <span className=" text-error text-xs">
                   {errors.confirmPassword?.type === 'required' && "Confirm is required"}
                </span>
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