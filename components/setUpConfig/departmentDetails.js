import Button from "../../components/shared/forms/button"
import { set, useForm } from "react-hook-form";
import {InputText,InputEmail} from "../../components/shared/forms/inputText"
import { useState } from 'react'


export default function CompanyDetails(props){
  const [isEdit, setIsEdit] = useState(false)
  const [isAdd, setIsAdd] = useState()
  const [department, setDepartment] = useState( [
    {department: 'CBIT'},
    {department: 'Spring Rock'},
    {department: '5C Limited'},
  ])
  const [addDepartment, setAddDepartment] = useState([])

  const {register,formState: { errors }, handleSubmit,watch } = useForm()

  // Onclick add input for new department
  function handelAddDepartment (){
    setAddDepartment([...addDepartment,{department:''}])
    console.log("working")
  }
  // Onclick Save input for new department
  function handelSave (){
    // setDepartment([...department,addDepartment])
    console.log("Saved")
  }
  // On Change Update add department array based on index

  function updateAddDepartment(value,id ){

  }

  return(
    <div className=" w-6/12 mx-auto px-10 py-5">
    <div className=" w-full text-left border-b border-secondary pb-3 mb-5"> 
      <span className=" text-primary text-lg font-medium block capitalize">
        Department details
      </span>
    </div>
    <div className="w-full  mb-3"> 
      <div className="grid grid-cols-1 gap-4 pt-1">
        <span className=" space-y-3">
        { department.map((list, i) => (
          <span className="h-12  flex bg-accent text-primary font-semibold rounded px-4" key={i}>
            <span className=" w-10/12 inline-block leading-10 pt-1 ">{list.department}</span>
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
         
        { addDepartment.map((name, i) => (
          <span className=" block py-4"  key={i} >
            {name.department}
          <InputText  type = "text" label="Department Name " 
            defaultValue={name.department} register={register} required 
            />
          </span>
        ))
        }
         
          
        <div className="flex w-full justify-center space-x-2 ">
          <span className=" text-base font-medium  inline-block pt-1"> Add Departments</span>
          <span 
          onClick={(e) => handelAddDepartment()}
          className=" flex-none py-1 px-2 inline-block  bg-primary-yellow rounded-full  cursor-pointer"> <i className="las la-plus text-primary"></i>  </span>
        </div>
        <div className=" text-center mt-7 space-x-3">
          <Button
          onClick={(e)=> handelSave()}
            className=" bg-call-to-action text-white text-sm uppercase w-32 py-3 rounded font-medium"
            label="CREATE"
          />
        </div>
      </div>
    </div>
</div>
  )
}