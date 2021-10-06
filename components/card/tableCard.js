import Button from "../shared/forms/button";
import TableCardList from "./tableCardList";

function TableCard() {
    return (
        <div className='pl-10 bg-white rounded-lg py-3 w-full pr-5'>
            <div className='mb-4'>
                <Button className='text-table-header text-sm font-medium capitalize py-0 mr-5 transition-all hover:text-gray-500 border-b-2 border-transparent active:text-call-to-action active:border-call-to-action focus:text-call-to-action focus:border-call-to-action'  label='ongoing  trainings' />
                <Button className='text-table-header text-sm font-medium capitalize py-0 mr-5 transition-all hover:text-gray-500 border-b-2 border-transparent active:text-call-to-action active:border-call-to-action focus:text-call-to-action focus:border-call-to-action'  label='completed  trainings' />
            </div>
            <TableCardList/>
        </div>
    );
}

export default TableCard;