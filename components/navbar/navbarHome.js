import Image from 'next/image'  
import Link from 'next/link'     
import Button from '../shared/forms/button';
import Icon from '../shared/icon';



export default function NavbarHome() {
    return (
        <div class='w-full mb-5'>
            <nav className='nav w-11/12 mx-auto flex flex-row bg-white justify-between flex-wrap items-center pr-5'>
                <div className='nav__logo flex items-center justify-center'>
                    <Icon name='logo' alt='my learning app' width={100} height={100} />
                </div>
                <ul className='nav__links flex items-center py-1'>
                    <li className='mr-1'>
                        <Link href='/'>
                        <a   className='transition-all text-base leading-7 font-normal not-italic text-gray-700   py-1 mx-4 border-b-4 rounded-sm   border-transparent focus:border-success focus:text-success hover:text-success hover:border-success'>Home</a>
                        </Link>
                    </li>
                    <li className='mr-1'>
                        <Link href='#features'>
                            <a  className='transition-all text-base leading-7 font-normal not-italic text-gray-700   py-1 mx-4 border-b-4 rounded-sm border-transparent focus:border-success focus:text-success hover:text-success hover:border-success'>Key Features</a>
                        </Link>
                    </li>
                    <li className='mr-1'>
                        <Link href='/'>
                            <a  className='transition-all text-base leading-7 font-normal not-italic text-gray-700   py-1 mx-4 border-b-4 rounded-sm   border-transparent focus:border-success focus:text-success hover:text-success hover:border-success'>Pricing</a>
                        </Link>
                    </li>
                    <li className='mr-1'>
                        <Link href='#testimonials'>
                            <a  className='transition-all text-base leading-7 font-normal not-italic text-gray-700  py-1 mx-4 border-b-4 rounded-sm  border-transparent focus:border-success focus:text-success hover:text-success hover:border-success'>Testimonials</a>
                        </Link>
                    </li>
                </ul>
                <ul className='nav__btns flex items-center'>
                    <li>
                        <Link href='/auth/signin'>
                            <a  className='py-2 text-base text-gray-700 rounded px-5  mr-2 hover:bg-call-to-action hover:text-accent'>Login</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <a className=''>
                                <Button
                                className=' inline-block py-2 px-8 font-normal text-base text-white rounded-md bg-call-to-action'
                                label='Create Account'
                                />
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}