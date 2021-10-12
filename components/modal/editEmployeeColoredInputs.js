import { useForm } from "react-hook-form";
import { dataDepartmentList } from "../data/dataDepartmentList";
import Button from "../shared/forms/button";
import { InputText } from "../shared/forms/inputText";
import { SelectTag } from "../shared/forms/selectTag";

function EditEmployeeColoredInputs({openEditModal,setOpenEditModal,editSingleEmployee}) {


   const {register,formState: { errors }, handleSubmit,watch } = useForm()

    const clickedCancelEditModal = (prev) => {
        setOpenEditModal(!prev)
    }

    const clickedCancelBgEditModal = (e,prev) => {
        if(e.target.classList.contains('edit-bg')){
            setOpenEditModal(!prev)
        }
    }


    return (
        <div className='absolute h-full edit-bg overflow-y-auto w-full left-0 top-0 bg-black bg-opacity-25 z-20' onClick={(e)=>clickedCancelBgEditModal(e,openEditModal)} >
            <div className='bg-white absolute left-1/3 top-4 w-5/12 xl:w-5/12 p-5 pb-10 rounded-sm text-primary'>
                <div className='flex justify-end items-center' onClick={()=>clickedCancelEditModal(openEditModal)} >
                    <i className='las la-times text-3xl font-semibold cursor-pointer'></i>
                </div>
                <h3 className='capitalize  text-xl '>edit employee</h3>
                <p className='py-3 pb-1'>You are currently editing <span className='text-call-to-action font-semibold'>{editSingleEmployee?.name}</span></p>
                <form className='my-5 mt-3' >
                    <div className='mb-3 gap-3 grid grid-cols-1 md:grid-cols-2'>
                        <div>
                        <label htmlFor='name' className='text-sm font-semibold pb-1 block'>First Name</label>
                        <span className="border border-primary flex rounded-md px-3 py-2">
                            <input
                            id='name'
                            type='text'
                            defaultValue={editSingleEmployee?.name.split(' ')[0]}
                            className= " rounded-md text-sm  py-1  w-full outline-none"
                            // onChange={(e)=>setNewEmployee({...newEmployee,firstName:e.target.value})}
                            />
                        </span>
                            {/* <InputText label='First Name' what='firstName' type='text' name="editFirstName" register={register} required defaultValue={editSingleEmployee?.name.split(' ')} /> */}
                        </div>
                        <div>
                            <label htmlFor='lname' className='text-sm font-semibold pb-1 block'>Last Name</label>
                            <span className="border border-primary flex rounded-md px-3 py-2">
                                <input
                                id='lname'
                                type='text'
                                defaultValue={editSingleEmployee?.name.split(' ')[1]}
                                className= " rounded-md text-sm  py-1  w-full outline-none"
                                // onChange={(e)=>setNewEmployee({...newEmployee,lastName:e.target.value})}
                                />
                            </span>
                            {/* <InputText label='Last Name' name="editLastName" what='lastName' type='text' register={register} required /> */}
                        </div>
                    </div>
                    <div className='mb-3 grid grid-cols-1'>
                        <div className='mb-3'>
                            <label htmlFor='email' className='text-sm font-semibold pb-1 block'>Email</label>
                            <span className="border border-primary flex rounded-md px-3 py-2">
                                <input
                                id='email'
                                type='email'
                                defaultValue={editSingleEmployee?.email}
                                className= " rounded-md text-sm  py-1  w-full outline-none"
                                // onChange={(e)=>setNewEmployee({...newEmployee,email:e.target.value})}
                                />
                            </span>
                            {/* <InputText label='Email' type='text' name="editEmail" what='email' register={register} required /> */}
                        </div>
                        <div className='mb-3'>
                            <label className='block text-sm font-semibold pb-1' htmlFor='dept'>Department</label>
                            <span className='border border-primary rounded-md px-0 py-2
                            pb-2'>
                                <select
                                    name=''
                                    id='dept'
                                    className='capitalize rounded-md text-sm  py-2 pb-1.5  w-full'
                                    // onChange={(e)=>setNewEmployee({...newEmployee,dept:e.target.value})}
                                >
                                <option defaultValue={editSingleEmployee.department} value={editSingleEmployee.department}>{editSingleEmployee.department}</option>
                                    {dataDepartmentList?.map((department,index)=>{
                                        return (
                                            <>
                                                if(department !==  editSingleEmployee?.department){
                                                    <option value={department} key={index}>{department}</option>
                                                }
                                                
                                            </>
                                        )
                                    }) }
                                </select>
                            </span>
                            {/* <SelectTag what='department' /> */}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='contactNumber' className='text-sm font-semibold pb-1 block'>Contact Number</label>
                            <span className="border border-primary flex rounded-md px-3 py-2">
                                <input
                                id='contactNumber'
                                type='tel'
                                defaultValue={editSingleEmployee?.phoneNumber}
                                className= " rounded-md text-sm  py-1  w-full outline-none"
                                // onChange={(e)=>setNewEmployee({...newEmployee,contactNum:e.target.value})}
                                />
                            </span>
                            {/* <InputText label='Contact Number' name="editContactNumber" what='contact' type='tel' register={register} required /> */}
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='title' className='text-sm font-semibold pb-1 block'>Job Title</label>
                            <span className="border border-primary flex rounded-md px-3 py-2">
                                <input
                                id='title'
                                type='text'
                                defaultValue={editSingleEmployee?.jobTitle}
                                className= " rounded-md text-sm  py-1  w-full outline-none"
                                // onChange={(e)=>setNewEmployee({...newEmployee,jobTitle:e.target.value})}
                                />
                            </span>
                            {/* <InputText label='Job Title' type='text' name="editJobTitle" what='title' register={register} required /> */}
                        </div>
                    </div>
                    <div className='w-full my-5 flex items-center justify-center'>
                        <Button className='w-1/4 rounded-sm py-1.5 bg-call-to-action text-white font-semibold text-base' label='SAVE' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditEmployeeColoredInputs;