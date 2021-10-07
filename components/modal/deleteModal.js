import Button from "../shared/forms/button";

function DeleteModal({openDeleteModal,setOpenDeleteModal}) {

    const clickedCancelDeleteModal = (prev) => {
        setOpenDeleteModal(!prev)
    }

    const clickedCancelBgDeleteModal = (e,prev) => {
        if(e.target.classList.contains('delete-bg')){
            setOpenDeleteModal(!prev)
        }
    }



    return (
        <div className='absolute delete-bg h-full overflow-y-auto w-full left-0 top-0 bg-black bg-opacity-25 z-20' onClick={(e)=>clickedCancelBgDeleteModal(e,openDeleteModal)}>
            <div className='bg-white rounded-lg p-4 py-10 top-1/4 right-1/4  pb-7 w-4/12 xl:w-5/12 flex items-center flex-col absolute'>
                <h3 className='w-7/12 text-center mb-5 text-xbase'>Do you really want to delete the Employee: <span className='text-success font-semibold'>ADAMS BEDFORD</span> from your employee list </h3>
                <div className='w-10/12 flex justify-between '>
                    <Button className='px-3 py-2 rounded-sm bg-error w-6/12 text-white border-error border font-semibold' label='DELETE EMPLOYEE' />
                    <Button className='px-3 py-1 rounded-sm bg-white w-6/12 text-call-to-action ml-5 font-semibold border border-call-to-action' label='CANCEL' onClick={()=>clickedCancelDeleteModal(openDeleteModal)} />
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;