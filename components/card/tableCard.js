import Button from "../shared/forms/button";
import TableCardList from "./tableCardList";

function TableCard() {
    return (
        <div className=''>
            <div className=''>
                <Button className=''  label='ongoing  trainings' />
                <Button className=''  label='completed  trainings' />
            </div>
            <TableCardList/>
        </div>
    );
}

export default TableCard;