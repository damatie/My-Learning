import Button from "../shared/forms/button";
import { InputEmail, InputText } from "../shared/forms/inputText";

function EditEmployee() {
    return (
        <div className='absolute h-full w-full left-0  bg-black bg-opacity-25 z-20'>
            <div className=''>
                <i className='las la-times'></i>
                <h3>edit employee</h3>
                <p>You can edit the employee selected </p>
                <form>
                    <div className=''>
                        <InputText label='First Name' type='text' />
                        <InputText label='First Name' type='text' />
                    </div>
                    <div className=''>
                        {/* <InputEmail label='Email Address' type='email' /> */}
                        <InputText label='Contact Number' type='tel' />
                        <InputText label='Job Title' type='text' />
                    </div>
                    <Button className='' label='SAVE' />
                </form>
            </div>
        </div>
    );
}

export default EditEmployee;