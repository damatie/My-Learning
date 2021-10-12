function EmployeeRow({employee:{firstName,lastName,dept,jobTitle},id,removeClickedEmployee}) {
    
    // const removeClickedEmployee = () => {
    //     // console.log(employee)
    //     console.log('hi')
    // }

    return (
        <div className='flex p-3 my-5 rounded-lg bg-call-to-action text-white justify-between'>
            <div className=''>
                <h5 className='text-sm'>Name </h5>
                <h4 className='text-xbase py-3 capitalize'>{firstName} {lastName}</h4>
            </div>
            <div className=''>
                <h5 className='text-sm'>Department</h5>
                <h4 className='text-xbase py-3 capitalize'>{dept}</h4>
            </div>
            <div className=''>
                <h5 className='text-sm'>Job title</h5>
                <h4 className='text-xbase py-3'>{jobTitle}</h4>
            </div>
            <div className='flex items-center '>
                {/* <button className='mr-4'>
                    <i className='las la-times text-2xl'></i>
                </button> */}
                <button className='' onClick={()=>removeClickedEmployee(id)}>
                    <i className='las la-trash-alt text-2xl'></i>
                </button>
            </div>
        </div>
    );
}

export default EmployeeRow;