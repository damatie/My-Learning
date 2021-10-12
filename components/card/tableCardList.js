import { trainingListData } from "../data/trainingListData";
import { employeeListData } from "../data/employeeListData";
import TableTrainingCardItem from "./tableTrainingCardItem";

function TableCardList() {
    return (
        <table className='table-fixed w-full text-left space-y-10'>
            <thead>
                <tr className='text-table-header '>
                    <th className='font-medium text-sm'>Trainings</th>
                    <th className='font-medium text-sm'>No of Employees</th>
                    <th className='font-medium text-sm'>Department</th>
                    <th className='font-medium text-sm'>Cost/Head($)</th>
                    <th className='font-medium text-sm'>Duration</th>
                    <th className='font-medium text-sm'>Start Date</th>
                </tr>
            </thead>
            <tbody>
                {trainingListData?.splice(0,3)?.map((trainingData,index)=>{
                    return (
                        <TableTrainingCardItem key={index} trainingData={trainingData} />
                    )
                })}
            </tbody>
        </table>
    );
}

export default TableCardList;