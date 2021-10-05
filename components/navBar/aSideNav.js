import Image from "next/image";
import Link from "next/link";

import Icon from "../shared/icon";


function ASideNav({reduceAppSideNav,setReduceAppSideNav}) {


    const sideNavBtn  = (prev) =>{
        setReduceAppSideNav(!prev)
    } 

    return (
        <nav className='w-11/12 mx-auto py-2 h-full flex flex-col justify-between'>
            <div className=''>
                <div className='py-5 pointer flex items-center justify-end cursor-pointer' onClick={()=>sideNavBtn(reduceAppSideNav)} >
                    <Icon name='app-nav-toggle' width={40} height={40}  />
                </div>

                {  reduceAppSideNav  && <div className='logo mx-auto flex items-center justify-center pb-5'>
                    <Image src='/assets/img/others/Logo.png' alt='my learning app' width={207.9} height={41.4} />
                </div>}
                <ul>
                    <li className='mb-2'>
                        <Link   href='/'>
                            <a className='inline-flex px-1 py-2 rounded-lg font-semibold items-center text-center w-full bg-accent justify-center text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary'>
                                <Icon name='dashboard' alt='dashboard' width={25} height={25} />
                                { reduceAppSideNav &&  <span className='pl-2'>Dashboard</span>}
                            </a>
                        </Link>
                    </li>
                    <li className='mb-2'>
                        <Link   href='/'>
                            <a className='inline-flex  px-1 py-2 rounded-lg font-semibold  items-center text-center w-full  justify-center text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary'>
                                <Icon name='employee' alt='employees' width={25} height={25} />
                                { reduceAppSideNav && <span className='pl-2'>Employee</span>}
                            </a>
                        </Link>
                    </li>
                    <li className='mb-2'>
                        <Link   href='/'>
                            <a className='inline-flex  px-1 py-2 rounded-lg font-semibold  items-center text-center w-full  justify-center text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary'>
                                <Icon name='mortarboard' alt='trainings' width={25} height={25} />
                                { reduceAppSideNav && <span className='pl-2'>Trainings</span>}
                            </a>
                        </Link>
                    </li>
                    <li className='mb-2'>
                        <Link   href='/'>
                            <a className='inline-flex  px-1 py-2 rounded-lg font-semibold  items-center text-center w-full  justify-center text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary'>
                                <Icon name='Setting' alt='settings' width={25} height={25} />
                                { reduceAppSideNav && <span className='pl-2'>Settings</span>}
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className=''>
                <Link   href='/'>
                    <a className='inline-flex justify-center  w-full items-center active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary px-1 py-2  rounded-lg'>
                        <Icon name='Logout' alt='log out' width={25} height={25} />
                        {reduceAppSideNav && <span className='pl-1'>Logout</span>}
                    </a>
                </Link>               
                { !reduceAppSideNav ?  (
                        <>
                            <Link   href='/'>
                                <a className='uppercase font-semibold bg-call-to-action text-white rounded-sm'>
                                    <i className='las la-question-circle'></i>
                                </a>
                            </Link>
                        </>
                    ) : (
                        <div className='w-full mx-auto flex items-center  justify-center mt-3'>
                            <div className='bg-accent  text-base items-center w-10/12 flex flex-col rounded-lg justify-center text-center p-4'>
                                <h6 className='p-4'>Have any problem? try to contact the customer support </h6>
                                <Link   href='/'>
                                    <a className='uppercase font-semibold bg-call-to-action text-white py-2 px-4 rounded-sm'>contact us</a>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    );
}

export default ASideNav;