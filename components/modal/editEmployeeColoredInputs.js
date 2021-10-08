import { useForm } from "react-hook-form";
import Button from "../shared/forms/button";
import { InputText } from "../shared/forms/inputText";
import { SelectTag } from "../shared/forms/selectTag";

function EditEmployeeColoredInputs({openEditModal,setOpenEditModal}) {

    
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
                <p className='py-3 pb-1'>You are currently editing <span className='text-call-to-action font-semibold'>Adam Bedford</span></p>
                <form className='my-5 mt-3' >
                    <div className='mb-3 gap-3 grid grid-cols-1 md:grid-cols-2'>
                        <div>
                            <InputText label='First Name' what='firstName' type='text' name="editFirstName" register={register} required />
                        </div>
                        <div>
                            <InputText label='Last Name' name="editLastName" what='lastName' type='text' register={register} required />
                        </div>
                    </div>
                    <div className='mb-3 grid grid-cols-1'>
                        <div className='mb-3'>
                            <InputText label='Email' type='text' name="editEmail" what='email' register={register} required />
                        </div>
                        <div className='mb-3'>
                            <SelectTag what='department' />
                        </div>
                        <div className='mb-3'>
                            <InputText label='Contact Number' name="editContactNumber" what='contact' type='tel' register={register} required />
                        </div>
                        <div className='mb-3'>
                            <InputText label='Job Title' type='text' name="editJobTitle" what='title' register={register} required />
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