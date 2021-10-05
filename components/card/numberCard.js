import Link from "next/link";


function NumberCard() {
    return (
        <Link href='/dashboard'>
            <a className='bg-gray-300  transition-all text-primary border-2 w-6/12 h-full rounded-lg  border-call-to-action p-10 active:bg-call-to-action focus:bg-call-to-action hover:bg-call-to-action  hover:text-white  focus:text-white active:text-white '>
                <h4 className='text-2xl pb-5'>Number of trainings</h4>
                <h2 className='text-4xl font-semibold'>150</h2>
            </a>
        </Link>
    );
}

export default NumberCard;