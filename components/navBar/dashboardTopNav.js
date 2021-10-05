import InputSearch, { InputText } from "../shared/forms/inputText";
import Icon from "../shared/icon";

function DashboardTopNav() {
    return (
        <nav className='py-6 w-full  flex items-center flex-wrap justify-between'>
            <InputSearch/>
            <div className='flex  items-center'>
                <Icon name='pp' width={40} height={40} />
                <div className='ml-2'>
                    <h4 className='text-xbase font-semibold'>Kevin Jude</h4>
                    <h5 className='text-sm font-semibold'>Admin</h5>
                </div>
            </div>
        </nav>
    );
}

export default DashboardTopNav;