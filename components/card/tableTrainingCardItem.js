function TableTrainingCardItem({trainingData : {name,noOfEmployees,department,cost,duration,startDate}}) {
    return (
        <tr className=''>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{name}</td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{noOfEmployees}</td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{department}</td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{cost}</td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{duration}</td>
            <td className='pb-3 text-sm font-medium text-primary break-words pt-5'>{startDate}</td>
        </tr>
    );
}

export default TableTrainingCardItem;