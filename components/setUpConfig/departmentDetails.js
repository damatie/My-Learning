import Button from "../../components/shared/forms/button"
import { set, useForm } from "react-hook-form";
import {InputText,InputEmail} from "../../components/shared/forms/inputText"
import { useState } from 'react'


export default function CompanyDetails(props){
  const [isEdit, setIsEdit] = useState(false)
  const [department, setDepartment] = useState( [])
  const [addInput, setAddInput] = useState([])
  const {register,formState: { errors }, handleSubmit,watch } = useForm()

  // Onclick add input for new department
  function handelAddInput (){
    setAddInput([...addInput,{department:''}])
    // console.log("working")
  }
   // On Change Update add department array based on index

   function handelInputChange(value,i){
    const  list = [...addInput]
    const changed = list[i].department = value
     console.log(value,i,changed )
  }
  // Onclick Save input for new department
  function handelSave (){
    setDepartment([...department,...addInput])
    setAddInput([])
    console.log("Saved")
  }
 

  return(
    <div className=" w-6/12 mx-auto px-10 py-5">
      { department.length>0?
        <div className=" w-full text-left border-b border-secondary pb-3 mb-5"> 
          <span className=" text-primary text-lg font-medium block capitalize">
            Department details
          </span>
        </div>
        :
        <div className="w-full"> 
          <span className=" bg-accent text-call-to-action  rounded px-4 py-3 block w-full text-center">
            <span className="block text-base font-semibold capitalize ">No department found</span>
            <span className="block font-normal text-xs"> Kindly add the different departments in your company</span>
          </span>
        </div>
      }     
    
    <div className="w-full  mb-3"> 
      <div className="grid grid-cols-1 gap-4 pt-1">
        <span className=" space-y-3">
        { department.map((list, i) => (
          <span className="h-12  flex bg-accent text-primary font-semibold rounded px-4" key={i}>
            <span className=" w-10/12 inline-block leading-10 pt-1 capitalize ">{list.department}</span>
            <span className=" w-2/12 inline-block leading-10 pt-2 text-right space-x-1">
              <span className="  inline-block cursor-pointer">
                <i className="las la-edit text-call-to-action text-2xl"></i>
              </span>
              <span className=" inline-block cursor-pointer"> 
                <i className="lar la-trash-alt text-2xl text-error"></i>
              </span>
            </span>
          </span>
           ))
          }
        </span>
        { addInput.map((list, i) => (
          <span className=" block py-0"  key={i} >
          <InputText  type = "text" label="Department Name " 
            defaultValue={list.department}
            onChange={ (e) => handelInputChange(e.target.value,i)}
            />
            {list.department}
          </span>
        ))
        }
        <div className="flex w-full justify-center space-x-2 ">
          <span className=" text-base font-medium  inline-block pt-1"> Add Departments</span>
          <span 
          onClick={(e) => handelAddInput()}
          className=" flex-none py-1 px-2 inline-block  bg-primary-yellow rounded-full  cursor-pointer"> <i className="las la-plus text-primary"></i>  </span>
        </div>
        { addInput.length >0?
          <div className=" text-center mt-7 space-x-3">
            <Button
              onClick={(e)=> handelSave(addInput)}
              className=" bg-call-to-action text-white text-sm uppercase w-32 py-3 rounded font-medium"
              label="CREATE"
            />
          </div>
          :
          ""
          }
      </div>
    </div>
</div>
  )
}