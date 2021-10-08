function TableCardItem({employeeData : {name,email,department,jobTitle,phoneNumber,numberOfOngoingTrainings}}) {
    return (
        <tr className=''>
            <td className='pb-3 text-sm font-medium text-primary pt-5'><input type='checkbox' /></td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{name}</td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{email}</td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{department}</td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{jobTitle}</td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{phoneNumber}</td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{numberOfOngoingTrainings}</td>
        </tr>
    );
}

export default TableCardItem;