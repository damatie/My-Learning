import Button from "../shared/forms/button";

function AnnouncementCard() {
    return (
        <div className='h-full bg-white rounded-lg p-10'>
            <h3 className='pb-5 text-base font-semibold'>Announcements</h3>
            <p className='text-xbase  pb-5 text-announcement w-7/12'>The Azure trainings that is supposed to hold on the <span className='font-semibold'>16th March 2021</span> has been resheduled for <span className='font-semibold'>18th March 2021</span></p>
            <button className='rounded-md border-2 w-6/12  flex items-center  justify-center text-call-to-action  uppercase transition-all font-semibold border-call-to-action  py-2 px-4 hover:bg-call-to-action hover:text-white'>
                <i className='las la-plus text-2xl'></i>
                <span className='pl-4'>ADD announcements</span>
            </button>
        </div>
    );
}

export default AnnouncementCard;