function TableCardList() {
    return (
        <table className='table-fixed w-full text-left'>
            <thead>
                <tr className='text-table-header'>
                    <th className='font-medium text-sm'>Trainings</th>
                    <th className='font-medium text-sm'>No of Employees</th>
                    <th className='font-medium text-sm'>Department</th>
                    <th className='font-medium text-sm'>Cost/Head($)</th>
                    <th className='font-medium text-sm'>Duration</th>
                    <th className='font-medium text-sm'>Start Date</th>
                </tr>
            </thead>
            <tbody>
                <tr className=''>
                    <td className='pb-1 text-sm font-medium text-primary'>Azure</td>
                    <td className='pb-1 text-sm font-medium text-primary'>10</td>
                    <td className='pb-1 text-sm font-medium text-primary'>DevOps</td>
                    <td className='pb-1 text-sm font-medium text-primary'>200</td>
                    <td className='pb-1 text-sm font-medium text-primary'>4 weeks</td>
                    <td className='pb-1 text-sm font-medium text-primary'>18th March 2021</td>
                </tr>
                <tr className=''>
                    <td className='pb-1 text-sm font-medium text-primary'>Azure</td>
                    <td className='pb-1 text-sm font-medium text-primary'>10</td>
                    <td className='pb-1 text-sm font-medium text-primary'>DevOps</td>
                    <td className='pb-1 text-sm font-medium text-primary'>200</td>
                    <td className='pb-1 text-sm font-medium text-primary'>4 weeks</td>
                    <td className='pb-1 text-sm font-medium text-primary'>18th March 2021</td>
                </tr>
                <tr className=''>
                    <td className='pb-1 text-sm font-medium text-primary'>Azure</td>
                    <td className='pb-1 text-sm font-medium text-primary'>10</td>
                    <td className='pb-1 text-sm font-medium text-primary'>DevOps</td>
                    <td className='pb-1 text-sm font-medium text-primary'>200</td>
                    <td className='pb-1 text-sm font-medium text-primary'>4 weeks</td>
                    <td className='pb-1 text-sm font-medium text-primary'>18th March 2021</td>
                </tr>
            </tbody>
        </table>
    );
}

export default TableCardList;