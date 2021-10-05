import  {useState}  from 'react';
import Image from 'next/image'  
import Link from 'next/link'     
import Button from '../shared/forms/button';
import Icon from '../shared/icon';



export default function NavbarHome() {

    const [navBtn, setNavBtn] = useState(false) 
    
    const toggleNavBtn = (prev) => {
        setNavBtn(!prev)
    } 

    return (
        <>
            <div className=' hidden lg:block  w-full mb-3  '>
                <nav className='nav w-11/12 mx-auto flex flex-row  pt-4 bg-white justify-between flex-wrap items-center pr-5'>
                    <div className='nav__logo flex items-center justify-center'>
                        <Image src='/assets/img/others/Logo.png' alt='my learning app' width={231} height={46} />
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
                                <a  className='transition-all text-base leading-7  not-italic text-gray-700   py-1 pb-3 mx-4 border-b-4 rounded-sm font-semibold  border-transparent focus:border-call-to-action focus:text-call-to-action hover:text-call-to-action hover:border-call-to-action'>Login</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/auth/signup'>
                                <a className=''>
                                    <Button
                                    className=' inline-block ease-in-out py-3 px-8 text-base transition duration-300 text-white rounded-md bg-call-to-action hover:bg-success font-semibold'
                                    label='Create Account'
                                    />
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* mobile  navigation */}
            <div className='block  w-full mb-0 overflow-auto lg:hidden'>
                <nav className='nav w-full  flex  pt-4 bg-white justify-between flex-wrap items-center px-3'>
                    <div className='nav__logo flex items-center justify-center'>
                        <Image src='/assets/img/others/Logo.png' alt='my learning app' width={161.7} height={32.2} />
                    </div>
                    <i onClick={()=>toggleNavBtn(navBtn)} className='las la-bars text-3xl pointer font-semibold'></i>
                    {navBtn && (
                        <ul className=' nav__links flex  bg-accent text-center w-full flex-col fixed right-0 p-5 top-0 h-full'>
                            <i className='ml-auto' onClick={()=>toggleNavBtn(navBtn)} className='las la-times  ml-auto text-3xl pointer font-semibold'></i>
                            <li className=''>
                                <Link href='/'>
                                <a   className='transition-all text-base leading-7 inline-block  font-normal not-italic text-gray-700 mb-1 mx-2 border-b-4 rounded-sm   border-transparent focus:border-success focus:text-success hover:text-success hover:border-success active:text-success active:border-success' onClick={()=>toggleNavBtn(navBtn)} >Home</a>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='#features'>
                                    <a  className='transition-all text-base leading-7 inline-block w-full font-normal not-italic text-gray-700 mb-1 mx-2 border-b-4 rounded-sm   border-transparent focus:border-success focus:text-success hover:text-success hover:border-success active:text-success active:border-success'  onClick={()=>toggleNavBtn(navBtn)} >Key Features</a>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='/'>
                                    <a  className='transition-all text-base leading-7 inline-block w-full font-normal not-italic text-gray-700 mb-1 mx-2 border-b-4 rounded-sm   border-transparent focus:border-success focus:text-success hover:text-success hover:border-success active:text-success active:border-success'  onClick={()=>toggleNavBtn(navBtn)} >Pricing</a>
                                </Link>
                            </li>
                            <li className=''>
                                <Link href='#smtestimonials'>
                                    <a  className='transition-all text-base leading-7 inline-block w-full font-normal not-italic text-gray-700 mb-1 mx-2 border-b-4 rounded-sm   border-transparent focus:border-success focus:text-success hover:text-success hover:border-success active:text-success active:border-success'   onClick={()=>toggleNavBtn(navBtn)}>Testimonials</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/auth/signin'>
                                    <a  className='transition-all text-base leading-7 inline-block w-full font-normal not-italic text-gray-700 mb-1 mx-2 border-b-4 rounded-sm   border-transparent focus:border-success focus:text-success hover:text-success hover:border-success active:text-success active:border-success'>Login</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/auth/signup'>
                                    <a className=''>
                                        <Button
                                        className=' inline-block ease-in-out py-2 ml-2 px-3 text-base transition duration-300 text-white rounded-md bg-call-to-action hover:bg-success font-semibold'
                                        label='Create Account'
                                        />
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    ) }
                </nav>
            </div>
        </>
    );
}