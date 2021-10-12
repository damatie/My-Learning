/* eslint-disable @next/next/link-passhref */
import { useState,useEffect  } from "react" 
import React, { useRef } from "react";
import AuthLayout from "../../components/layouts/authLayout"
import Button from "../../components/shared/forms/button"
import Icon from "../../components/shared/icon"
import Link from 'next/link'
import {InputText,InputEmail,InputPwd} from "../../components/shared/forms/inputText"
import { useForm } from "react-hook-form"
import { createAccount, googleAuth } from "../../services/apiFactory"
import AlertCard from "../../components/shared/alertCard"
import { AlertTimeOut } from "../../utils/alertTimeout";

export default function Signup(){
  const pwdType = 'password'
  const [isPwdVisible, setIsPwdVisible] = useState(true)
  const [isPwdConfirmVisible, setIsPwdConfirmVisible] = useState(true)
  const [passwordType, setPasswordType] = useState(pwdType)
  const [confirmPasswordType, setConfirmPasswordType] = useState(pwdType)
  const [alert, setAlert] = useState()
  const [isLoading, setIsLoading] = useState(false)

  // Onclick show and hide password
  function show(value){
    if(value==='password'){
      {isPwdVisible? setPasswordType('text')|| setIsPwdVisible(!isPwdVisible):setPasswordType('password')||setIsPwdVisible(!isPwdVisible)}
    }
    if(value==='confirmPassword'){
      {isPwdConfirmVisible? setConfirmPasswordType('text')|| setIsPwdConfirmVisible(!isPwdConfirmVisible):setConfirmPasswordType('password')||setIsPwdConfirmVisible(!isPwdConfirmVisible)}
    }
  }
  //  Google Auth
  const googleSign = async() =>{
    const res = googleAuth().then(result => {
      console.log(result)
        // setAlert(<AlertCard msg={status}/>)
        // alertTimeOut()
    })
    console.log(res)
  }
// Handle create account
  const handleCreateAccount = async(data) =>{
    setIsLoading(true)
    let payload  = {
      companyName:data.companyName,
      companyEmail:data.email,
      password: data.password
    }
    createAccount(payload).then(result => {
      const status =  result.data.message
      console.log(status)
        setIsLoading(false)
        setAlert(<AlertCard msg={status}/>)
        AlertTimeOut()
    }).catch((error) => {
      console.log(error)
      setIsLoading(false)
    });
  }

   // Handle form validation 
   const {register,handleSubmit,formState: { errors } , watch} = useForm();
   const companyName = watch('companyName','')
   const email = watch('email','')
   const password = watch('password','')
   const confirmPassword = watch('confirmPassword','')

   const onSubmit = (data)=> {
    handleCreateAccount(data)
  };
  return(
    <AuthLayout>
      <div className=" w-full ">
        {alert}
        <span className="block text-md font-bold"> Create a My learning account</span>
        <span className="block text-sm text-text-low-light font-medium">Start developing your company by taking the first step </span>
        <div className=" block w-full my-6">
          <span
            onClick={() => googleSign()}
          className=" text-primary font-medium text-sm border py-3 rounded-md w-full justify-center flex cursor-pointer">
            <Icon
            name = "flat-color-icons_google"
            width= {18} 
            height= {18}
            />
            <span className=" flex-none px-1 inline-block  text-sm "> Create Account with Google</span>
          </span>
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
              <InputText name = "companyName" type = "text" label="Company Name" register={register} required
               />
             <span className=" text-error text-xs">
               {errors.companyName?.type === 'required' && "Company name is required"}
              
               </span>
              </span>
              <span>
                <InputEmail  name = "email" type = "text"  label="Email  " register={register} required
                 />
                  <span className=" text-error text-xs">
                   {errors.email?.type === 'required' && "Email is required" }
                   {errors.email?.message }
                  </span>
              </span>
              <span>
              <InputPwd  name = "password"   label="Password  " 
                type={passwordType}
                register={register} required
               onClick={(e) => show('password')} 
               />
                <span className=" text-error text-xs">
                   {errors.password?.type === 'required' && "Password is required"}
                   {errors.password?.type === 'minLength' && errors.password.message}
                </span>
              </span>
              <span>
                <InputPwd name = "confirmPassword" label="Confirm Password "
                type={confirmPasswordType}
                register={register} 
                required 
                onClick={() => show('confirmPassword')}
                />
                <span className=" text-error text-xs">
                   {errors.confirmPassword?.type === 'required' && ""}
                   {confirmPassword === password?  "": "Confirm password does not match"}
                </span>
              </span>
            </div>
            <div className=" block w-full">
              <Button
              disabled ={  
                companyName === ""? 'disabled':
                email ===""? 'disabled':  
                password === ""? 'disabled' : 
                confirmPassword === ""? 'disabled' : 
                confirmPassword === password? '' : 'disabled'
              }
              isLoading = {isLoading}
              className=" bg-call-to-action text-white text-sm uppercase w-full py-4 rounded font-medium"
              label= { !isLoading? "Create an account" :""}
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