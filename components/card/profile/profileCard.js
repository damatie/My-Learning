import Link from 'next/link'


const ProfileCard = () => {
    return (
        <div className='p-5 flex justify-between space-x-4 h-full w-full rounded-xl border-tr-2xl'>
            <div className='bg-img-placeholder border-img-placeholder border-2 rounded-2xl rounded-tl-none w-5/12'></div>
            <div className='w-8/12 flex flex-col justify-between'>
                <div className='flex flex-wrap justify-between'>
                    <h4 className='w-2/12 text-xbase font-semibold text-text-low'>Name</h4>
                    <p className='w-8/12 text-xbase text-primary font-semibold'>Adams bedford</p>
                </div>
                <div className='flex flex-wrap justify-between'>
                    <h4 className='w-2/12 text-xbase font-semibold text-text-low'>Email</h4>
                    <Link href=''>
                        <a href='mailto:Adamsbedford@gmail.com' className='w-8/12 text-xbase text-call-to-action underline font-semibold'>Adamsbedford@gmail.com</a>
                    </Link>
                </div>
                <div className='flex flex-wrap justify-between'>
                    <h4 className='w-2/12 text-xbase font-semibold text-text-low'>Department</h4>
                    <p className='w-8/12 text-xbase text-primary font-semibold'>Marketing</p>
                </div>
                <div className='flex flex-wrap justify-between'>
                    <h4 className='w-2/12 text-xbase font-semibold text-text-low'>Job title</h4>
                    <p className='w-8/12 text-xbase text-primary font-semibold'>HOD, Marketing</p>
                </div>
                <div className='flex flex-wrap justify-between'>
                    <h4 className='w-2/12 text-xbase font-semibold text-text-low'>Contact</h4>
                    <p className='w-8/12 text-xbase text-primary font-semibold'>+2349077766666</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;