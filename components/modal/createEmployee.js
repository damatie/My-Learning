import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { dataDepartmentList } from "../data/dataDepartmentList";


import Button from "../shared/forms/button";
import { InputText } from "../shared/forms/inputText";
import { SelectTag } from "../shared/forms/selectTag";
import EmployeeRow from "./employeeRow";


function CreateEmployee({openAddEmployeeModal,setOpenAddEmployeeModal}) {

    const router = useRouter()

    const [newEmployee, setNewEmployee] = useState({
        firstName: '',
        lastName:  '',
        email:'',
        dept: '',
        contactNum:'',
        jobTitle: ''
    })

    const [newEmployeeList, setNewEmployeeList] = useState([
        // {
        //     firstName: 'Adams',
        //     lastName:  'Bedford',
        //     dept: 'Marketing',
        //     jobTitle: 'HOD Marketing'
        // },
        // {
        //     firstName: 'Bedford',
        //     lastName:  'Adams',
        //     dept: 'Human Resources',
        //     jobTitle: 'HOD Human Resources'
        // },
    ])

    const [addNewEmployee, setAddNewEmployee] = useState([...newEmployeeList])


    const {register,formState: { errors }, handleSubmit,watch } = useForm()

    const addEmployeeBtn = (e) => {
        e.preventDefault()
        const newEmployeeInfo = [...newEmployeeList, { firstName:newEmployee.firstName, lastName:newEmployee.lastName, email:newEmployee.email, dept:newEmployee.dept, contactNum:newEmployee.contactNum, jobTitle:newEmployee.jobTitle }]
        setNewEmployeeList(newEmployeeInfo);
        console.log(newEmployeeList)
        console.log(newEmployeeInfo)
        setNewEmployee()
        router.push('#formBlock')
    }

    const removeClickedEmployee = (id) => {
        const newSetOfEmployees = [...newEmployeeList]
        newSetOfEmployees.splice(id,1)
        setNewEmployeeList(newSetOfEmployees)
    }


    const clickedCancelCreateModal = (prev) => {
        setOpenAddEmployeeModal(!prev)
    }

    const clickedCancelBgCreateModal = (e,prev) => {
        if(e.target.classList.contains('create-bg')){
            setOpenAddEmployeeModal(!prev)
        }
    }


    return (
        <div className='absolute h-full create-bg overflow-y-auto w-full left-0 top-0 bg-black bg-opacity-25 z-20' onClick={(e)=>clickedCancelBgCreateModal(e,openAddEmployeeModal)} >
        <div className='bg-white absolute left-1/3 top-4 w-5/12 xl:w-5/12 p-5 pb-10 rounded-sm'>
            <div className='flex justify-end items-center' onClick={()=>clickedCancelCreateModal(openAddEmployeeModal)} >
                <i className='las la-times text-3xl font-semibold cursor-pointer'></i>
            </div>
            <h3 className='capitalize  text-xl text-primary'>Add employee</h3>
            <p className='py-3 pb-1 text-xbase text-primary'>You can add one or more employees to MYlearning just here by filling the form below </p>
            {newEmployeeList?.map((employee,index)=> (
                <EmployeeRow key={index} employee={employee} id={index} removeClickedEmployee={removeClickedEmployee} />
            ))}
            <form className='my-5 mt-3' id='formBlock'>
                <div className='mb-3 gap-3 grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <label htmlFor='name' className='text-sm font-semibold pb-1 block'>First Name</label>
                        <span className="border border-primary flex rounded-md px-3 py-2">
                            <input
                            id='name'
                            type='text'
                            className= " rounded-md text-sm  py-1  w-full outline-none"
                            onChange={(e)=>setNewEmployee({...newEmployee,firstName:e.target.value})}
                            />
                        </span>
                            {/* onChange={(e)=> console.log(e.target.value)} */}
                        {/* <InputText label='First Name' what='firstName' type='text' name="editFirstName" register={register} required onChange={(e)=>setNewEmployee({...newEmployee,firstName:e.target.value})} /> */}
                    </div>
                    <div>
                        <label htmlFor='lname' className='text-sm font-semibold pb-1 block'>Last Name</label>
                        <span className="border border-primary flex rounded-md px-3 py-2">
                            <input
                            id='lname'
                            type='text'
                            className= " rounded-md text-sm  py-1  w-full outline-none"
                            onChange={(e)=>setNewEmployee({...newEmployee,lastName:e.target.value})}
                            />
                        </span>
                        {/* <InputText label='Last Name' name="editLastName" what='lastName' type='text' register={register} required onChange={(e)=>setNewEmployee({...newEmployee,lastName:e.target.value})} /> */}
                    </div>
                </div>
                <div className='mb-3 grid grid-cols-1'>
                    <div className='mb-3'>
                        <label htmlFor='email' className='text-sm font-semibold pb-1 block'>Email</label>
                        <span className="border border-primary flex rounded-md px-3 py-2">
                            <input
                            id='email'
                            type='email'
                            className= " rounded-md text-sm  py-1  w-full outline-none"
                            onChange={(e)=>setNewEmployee({...newEmployee,email:e.target.value})}
                            />
                        </span>
                        {/* <InputText label='Email' type='text' name="editEmail" what='email' register={register} required  onChange={(e)=>setNewEmployee({...newEmployee,email:e.target.value})} /> */}
                    </div>
                    <div className='mb-3'>
                        <label className='block text-sm font-semibold pb-1' htmlFor='dept'>Department</label>
                        <span className='border border-primary rounded-md px-0 py-2
                        pb-2'>
                            <select name='' id='dept' className='capitalize rounded-md text-sm  py-2 pb-1.5  w-full' onChange={(e)=>setNewEmployee({...newEmployee,dept:e.target.value})}>
                                {dataDepartmentList?.map((department,index)=>(
                                    <option value={department} key={index}>{department}</option>
                                )) }
                            </select>
                        </span>
                        {/* <SelectTag what='department'  onChange={(e)=>setNewEmployee({...newEmployee,dept:e.target.value})}/> */}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='contactNumber' className='text-sm font-semibold pb-1 block'>Contact Number</label>
                        <span className="border border-primary flex rounded-md px-3 py-2">
                            <input
                            id='contactNumber'
                            type='tel'
                            className= " rounded-md text-sm  py-1  w-full outline-none"
                            onChange={(e)=>setNewEmployee({...newEmployee,contactNum:e.target.value})}
                            />
                        </span>
                        {/* <InputText label='Contact Number' name="editContactNumber" what='contact' type='tel' register={register} required onChange={(e)=>setNewEmployee({...newEmployee,contactNum:e.target.value})} /> */}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='title' className='text-sm font-semibold pb-1 block'>Job Title</label>
                        <span className="border border-primary flex rounded-md px-3 py-2">
                            <input
                            id='title'
                            type='text'
                            className= " rounded-md text-sm  py-1  w-full outline-none"
                            onChange={(e)=>setNewEmployee({...newEmployee,jobTitle:e.target.value})}
                            />
                        </span>
                        {/* <InputText label='Job Title' type='text' name="editJobTitle" what='title' register={register} required onChange={(e)=>setNewEmployee({...newEmployee,jobTitle:e.target.value})} /> */}
                    </div>
                </div>
                <div className='flex items-center justify-center mt-2 mb-3'>
                    <Button label='Add more Employees' className='text-sm font-semibold text-primary' onClick={(e)=>addEmployeeBtn(e)} />
                </div>
                <div className='w-full mt-0 mb-5 flex items-center justify-center'>
                    <Button className='w-1/4 rounded-sm py-1.5 bg-call-to-action text-white font-semibold text-base' label='SAVE' />
                </div>
            </form>
        </div>
    </div>
    );
}

export default CreateEmployee;