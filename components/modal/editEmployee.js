import Button from "../shared/forms/button";
import { InputText } from "../shared/forms/inputText";

function EditEmployee({openEditModal,setOpenEditModal}) {

    const clickedCancelEditModal = (prev) => {
        setOpenEditModal(!prev)
    }

    const clickedCancelBgEditModal = (e,prev) => {
        if(e.target.classList.contains('delete-bg')){
            setOpenEditModal(!prev)
        }
    }


    return (
        <div className='absolute h-full w-full left-0  bg-black bg-opacity-25 z-20'>
            <div className='bg-white absolute  right-1/4 w-8/12 p-5'>
                <div className='flex justify-end items-center cursor-pointer' onClick={()=>clickedCancelEditModal(openEditModal)} >
                    <i className='las la-times text-3xl font-semibold'></i>
                </div>
                <h3 className='capitalize  text-xl '>edit employee</h3>
                <p className='py-3'>You are currently editing <span className='text-call-to-action font-semibold'>Adam Bedford</span></p>
                <form className='my-5' >
                    <div className='mb-3 gap-3 grid grid-cols-1 md:grid-cols-2'>
                        <div>
                            <InputText label='First Name' type='text' />
                        </div>
                        <div>
                            <InputText label='Last Name' type='text' />
                        </div>
                    </div>
                    <div className='mb-3'>
                        <div className='mb-3'>
                            <InputText label='Email' type='text' />
                        </div>
                        <div className='mb-3'>
                            <InputText label='Contact Number' type='tel' />
                        </div>
                        {/* <div className='mb-3'>

                        </div> */}
                        <div className='mb-3'>
                            <InputText label='Job Title' type='text' />
                        </div>
                    </div>
                    <div className='w-full my-5 flex items-center justify-center'>
                        <Button className='w-1/4 rounded-md py-2 bg-call-to-action text-white font-semibold text-lg' label='SAVE' />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditEmployee;