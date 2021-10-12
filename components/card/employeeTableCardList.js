// import { employeeListData } from "../data/employeeListData";
import TableCardItem from "./tableCardItem";

function EmployeeTableCardList({employeeListData,highlightEmployee,hideBtns,deleteHighlightEmployee,}) {



    return (
        <table className='table-fixed border-separate w-full text-left space-y-8'>
            <thead>
                <tr className='text-table-header'>
                    <th className='font-medium text-sm w-8'><input type='checkbox' className='' /></th>
                    <th className='font-medium text-sm w-1/6'>Name</th>
                    <th className='font-medium text-sm w-2/6'>Email</th>
                    <th className='font-medium text-sm w-1/6'>Department</th>
                    <th className='font-medium text-sm w-1/6'>Job Time</th>
                    <th className='font-medium text-sm w-1/6'>Phone Number</th>
                    <th className='font-medium text-sm w-1/6'>No of Ongoing Trainings</th>
                </tr>
            </thead>
            <tbody>
            {employeeListData?.map((employeeData,index)=>{
                return (
                    <TableCardItem key={index} id={index} employeeData={employeeData} highlightEmployee={highlightEmployee} hideBtns={hideBtns} deleteHighlightEmployee={deleteHighlightEmployee} />
                )
            })}
            </tbody>
        </table>
    );
}

export default EmployeeTableCardList;