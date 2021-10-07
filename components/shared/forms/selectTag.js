import { dataDepartmentList } from "../../data/dataDepartmentList";

export const SelectTag = ({department,listOfDept}) => {
    return (
        <>
            <label className='block text-sm font-semibold pb-1' for={department}>Department</label>
            <span className='border border-primary rounded-md px-0 py-2
            pb-2'>
                <select name='' id={department} className='capitalize rounded-md text-sm  py-2 pb-1.5  w-full'>
                    {dataDepartmentList?.map((department,index)=>(
                        <option value={department} key={index}>{department}</option>
                    )) }
                </select>
            </span>
        </>
    );
}
