/* eslint-disable @next/next/link-passhref */
import AuthLayout from "../../components/layouts/authLayout"
import Button from "../../components/shared/forms/button"
import { useState,useEffect  } from "react" 
import Icon from "../../components/shared/icon"
import Link from 'next/link'
import {InputPwd,InputEmail} from "../../components/shared/forms/inputText"
import AlertCard from "../../components/shared/alertCard"
import { login } from "../../services/apiFactory"
import { useForm } from "react-hook-form";
// import { AlertTimeOut } from "../../utils/alertTimeout";
import { checkAuthorizedUser,setAuthorizedUser } from "../../services/auth"
import { useRouter } from "next/router"

export default function Signin(){
  const Router = useRouter()
  const [alert, setAlert] = useState('' || null)
  const [isLoading, setIsLoading] = useState(false)
// 
  // Handle create account
  const handleLogin = async(data) =>{
    setIsLoading(true)
    let payload  = {
      email:data.email,
      password: data.password
    }
   const res=login(payload).then(result => {
      const status =  result.data.message
      if(result.data.error === false){
        setAuthorizedUser(result.data.token)
      }
        setIsLoading(false)
        setAlert(<AlertCard msg={status}/>)
        Router.push('/admin/dashboard')
        // AlertTimeOut(setAlert= {setAlert})
    }).catch(error => {
      const status =  error.response.data.message
      setIsLoading(false)
      setAlert(<AlertCard msg={status}/>)
      // console.log(error.response.data.message)
  });
  }

   // Handle form validation 
   const {register,formState: { errors }, handleSubmit } = useForm()
   const onSubmit = (data)=> {
    handleLogin(data)
  };

  // On load check if user us logged in
  useEffect(() => {
    const check = checkAuthorizedUser()
    if(check){
      Router.push('/admin/dashboard')
    }
  }, []);

  return(
    <AuthLayout>
      <div className=" w-full pt-6 pb-10">
      {alert}
        <span className="block text-md font-bold">Welcome Back!</span>
        <span className="block text-sm text-text-low-light font-medium">Login to your Account </span>
        <div className=" block w-full my-6">
        <Link href="/">
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
          <form onSubmit={handleSubmit(onSubmit)} className= "space-y-3">
            <div className="grid grid-cols-1  gap-4 "> 
              <span>
                <InputEmail
                name = "email" type = "text"  label="Email  " register={register} required 
                />
                 <span className=" text-error text-xs">
                   {errors.email?.type === 'required' && "Email is required" }
                   {errors.email?.message }
                  </span>
              </span>
              <span>
                <InputPwd name = "password" type = "password"  label="Password  " register={register} required />
                <span className=" text-error text-xs">
                   {errors.password?.type === 'required' && "Password is required"}
                </span>
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
              isLoading = {isLoading}
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
