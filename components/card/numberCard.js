import Link from "next/link";


function NumberCard({title,number,active}) {
    return (
        <Link href='/dashboard'>
            <a className={`${active ? 'bg-success  transition-all text-white border-2 w-6/12 rounded-lg border-success py-5  px-5' : 'text-primary border-2 w-6/12 rounded-lg border-success py-5  px-5 bg-white' }`}>
                <h4 className='text-base pb-3'>{title}</h4>
                <div className='flex justify-between items-center'>
                    <h2 className='text-4xl font-semibold'>{number}</h2>
                    <i class="las la-users text-5xl"></i>
                </div>
            </a>
        </Link>
    );
}

export default NumberCard;