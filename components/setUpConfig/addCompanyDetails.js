import { set, useForm } from "react-hook-form";
import Button from "../../components/shared/forms/button"

import {InputText,InputEmail} from "../../components/shared/forms/inputText"

export default function addCompanyDetails(props){
  const {isEdit,setIsEdit} = props
   // Handle form validation 
   const {register,formState: { errors }, handleSubmit,watch } = useForm()
  return(
    <>
    <div className=" w-6/12 mx-auto px-10 py-5">
     <div className=" w-full text-center"> 
        <span className=" text-primary text-lg font-medium block"> Add Company Details</span>
        <span className="text-sm text-primary block">
          Kindly fill in the details of your company
        </span>
     </div>
     <div className="mt-3">
       <div className="grid grid-cols-1 gap-4">
          <span>
            <InputText  name = "firstName" type = "text" label="Company Name " register={register} required />
          </span>
          <span>
            <InputEmail  name = "firstName" type = "text" label="Office Email " register={register} required />
          </span>
          <span>
            <InputText name = "firstName" type = "text" label="Office Location   " register={register} required />
          </span>
          <span>
            <InputText  name = "firstName" type = "text" label="No of Employes" register={register} required />
          </span>
          <span>
            <InputText name = "firstName" type = "text" label="Office Contact " register={register} required />
          </span>
          { isEdit? 
          <div className=" text-center mt-7">
            <Button
              className=" bg-call-to-action text-white text-sm uppercase w-32 py-3 rounded font-medium"
              label="CREATE"
            />
          </div>
          :
          <div className=" text-center mt-7 space-x-3">
            <Button
              className=" bg-call-to-action text-white text-sm uppercase w-32 py-3 rounded font-medium"
              label="UPDATE"
            />
            <Button
              onClick ={ (e) => setIsEdit(!isEdit)}
              className=" bg-call-to-action text-white text-sm uppercase w-32 py-3 rounded font-medium"
              label="CANCEL"
            />
          </div>
            }
       </div>
     </div>
    </div>
    </>
  )
}