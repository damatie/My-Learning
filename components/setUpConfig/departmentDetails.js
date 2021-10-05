import Button from "../../components/shared/forms/button"
import { set, useForm } from "react-hook-form";
import {InputText,InputEmail} from "../../components/shared/forms/inputText"
import { useState } from 'react'


export default function CompanyDetails(props){
  const [isEdit, setIsEdit] = useState(false)
  const [department, setDepartment] = useState( [])
  const [addInput, setAddInput] = useState([])
  const {register,formState: { errors }, handleSubmit,watch } = useForm()

  // On click add input for new department
  function handelAddInput (){
    setAddInput([...addInput,{department:''}])
    // console.log("working")
  }
   // On change update add input array based on index
   function handelInputChange(value,i){
    const  list = [...addInput]
     list[i].department = value
  }
   // On click delete department array based on index
   function removeInput(i){
    addInput.splice(i,1)
    setAddInput([...addInput])
  }
  // On click Save input for new department
  function handelSave (){
    setDepartment([...department,...addInput])
    setAddInput([])
    console.log("Saved")
  }
   // On click delete department array based on index
   function handleDelete(i){
    department.splice(i,1)
    setDepartment([...department])
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
          <span key={i} className=" flex">
            <span className="h-12 w-10/12 bg-accent text-primary font-semibold rounded px-4" >
              <span className=" w-full  inline-block leading-10 pt-1 capitalize ">{list.department}</span>
            </span>
            <span className=" w-2/12 inline-block leading-10 pt-2 text-left pl-3 space-x-1">
              <span className="  inline-block cursor-pointer">
                <i className="las la-edit text-call-to-action text-2xl"></i>
              </span>
              <span 
              onClick ={(e) =>handleDelete(i)}
                className=" inline-block cursor-pointer"> 
                <i className="lar la-trash-alt text-2xl text-error"></i>
              </span>
            </span>
          </span>
           ))
          }
        </span>
        { addInput.map((list, i) => (
          <span className=" flex py-0"  key={i} >
            <span className=" w-10/12 inline-block">
              <InputText  name={"addInput"+i} type = "text" label="Department Name " 
              register={register}
              defaultValue={list.department}
              onChange={ (e) => handelInputChange(e.target.value,i)}
              />
              {list.department}
            </span>
            <span className=" w-1/12 inline-block leading-10 pt-7 text-left pl-3 space-x-1">
              <span 
              onClick ={(e) =>removeInput(i)}
                className=" inline-block cursor-pointer"> 
                {/* <i className="lar la-trash-alt text-2xl text-error"></i> */}
                <i className="las la-times-circle text-2xl text-error"></i>
              </span>
            </span>
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
              onClick={(e)=> handelSave()}
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