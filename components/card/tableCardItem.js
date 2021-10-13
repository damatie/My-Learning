import Link from 'next/link'
import {useState} from 'react'

function TableCardItem({employeeData : {name,email,department,jobTitle,phoneNumber,numberOfOngoingTrainings},highlightEmployee,hideBtns,id}) {

    const [empInfo, setEmpInfo] = useState({
        name:'',
        email:'',
        department:'',
        jobTitle:'',
        phoneNumber:'',
        numberOfOngoingTrainings:''
    })

    return (
        <tr className=''>
            <td className='pb-3 text-sm font-medium text-primary pt-5'>
                {/* <input type='radio' id='employeeTab' name='employeeTab' onClick={(e)=>highlightEmployee(e,hideBtns,id)} className='hidden' /> */}
                <input type='checkbox' id='employeeTab' name='employeeTab' onClick={(e)=>highlightEmployee(e,hideBtns,id)} />
                {/* <label htmlFor='employeeTab' onClick={(e)=>highlightEmployee(e,hideBtns,id)} >
                    {<i className='las la-stop text-3xl'></i>}
                </label> */}
            </td>
            {/* <td className='pb-3 text-sm font-medium text-primary pt-5'onClick={(e)=>highlightEmployee(e,hideBtns,id)} >
                <i className='las la-check-circle'></i>
            </td> */}
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5 cursor-pointer'>
                {name}
                {/* <Link href='/admin/dashboard/profile'><a></a></Link> */}
            </td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{email}</td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{department}</td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{jobTitle}</td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{phoneNumber}</td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{numberOfOngoingTrainings}</td>
        </tr>
    );
}

export default TableCardItem;