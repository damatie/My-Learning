import Image from "next/image";
import Link from "next/link";
import Icon from "../shared/icon";
import { userLogOut } from "../../services/auth"
import { useRouter } from "next/router"

function DashboardSideNav({reduceAppSideNav,setReduceAppSideNav}) {
      // SET ACTIVE LINK
    const router = useRouter()
    // LOG OUT FUNCTION
    function logOut(){
     userLogOut("token") 
     router.push("/auth/signin")
    }

    // TOGGLE SIDE NAV
    const sideNavBtn  = (prev) =>{
        setReduceAppSideNav(!prev)
    }

    return (
        <nav className='w-11/12 mx-auto py-2 h-full flex flex-col justify-between'>
            <div className=''>
                <div className='py-3 pointer flex items-center justify-end cursor-pointer' onClick={()=>sideNavBtn(reduceAppSideNav)} >
                    <Icon name='app-nav-toggle' width={40} height={40}  />
                </div>                

                { reduceAppSideNav  ?  (
                    <div className='logo mx-auto flex items-center justify-center pb-3 mb-2'>
                        <Image src='/assets/img/others/Logo-Footer.png' alt='my learning app' width={166.32} height={33.12} />
                    </div>
                ) : (
                    <div className='logo mx-auto flex items-center justify-center pb-5'>
                        <Image src='/assets/img/others/Logo-Footer.png' alt='my learning app' width={103.95} height={20.7} />
                    </div>
                ) }
                <ul className='w-full flex flex-col '>
                    {
                        reduceAppSideNav ? 
                        <li className={router.pathname == '/admin/dashboard' ? 'mb-2 w-full grid place-items-center mx-auto' : 'mb-2 w-full grid place-items-center mx-auto' }>
                            <Link href="/admin/dashboard">
                                <a className={router.pathname == '/admin/dashboard' ? 'capitalize inline-flex px-1 py-1 rounded-md font-semibold items-center transition-all text-center w-full justify-center bg-accent text-primary text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary hover:text-primary' : 'capitalize inline-flex px-1 py-1 rounded-md font-semibold items-center transition-all text-center w-full justify-center text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary text-white hover:text-primary' }>
                                    <i className='las la-tachometer-alt text-2xl'></i>
                                    { reduceAppSideNav && <span className='pl-2'>Dashboard</span>}
                                </a>
                            </Link>
                        </li>
                        :
                        <li className={router.pathname == '/admin/dashboard' ? 'mb-2 w-10/12 grid place-items-center mx-auto' : 'mb-2 w-10/12 grid place-items-center mx-auto'}>
                            <Link href="/admin/dashboard">
                                <a className={router.pathname == '/admin/dashboard' ? 'inline-flex rounded-md font-semibold p-1 items-center text-center w-1/2 justify-center bg-accent text-primary transition-all text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary hover:text-primary mx-auto' : 'inline-flex rounded-md font-semibold p-1 items-center text-center w-1/2 justify-center text-white transition-all text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary hover:text-primary mx-auto' }>
                                    <i className='las la-tachometer-alt text-2xl'></i>
                                </a>
                            </Link>
                        </li>
                    }
                    {/* EMPLOYEES NAV LINK */}
                    {
                        reduceAppSideNav ? 
                        <li className={router.pathname == '/admin/dashboard/employees' ? 'mb-2 w-full grid place-items-center mx-auto' : 'mb-2 w-full grid place-items-center mx-auto' }>
                            <Link href="/admin/dashboard/employees">
                                <a className={router.pathname == '/admin/dashboard/employees' ? 'capitalize inline-flex px-1 py-1 rounded-md font-semibold items-center transition-all text-center w-full justify-center bg-accent text-primary text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary hover:text-primary' : 'capitalize inline-flex px-1 py-1 rounded-md font-semibold items-center transition-all text-center w-full justify-center text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary text-white hover:text-primary' }>
                                    <i className='las la-user-circle text-2xl'></i>
                                    { reduceAppSideNav && <span className='pl-2'>Employee</span>}
                                </a>
                            </Link>
                        </li>
                        :
                        <li className={router.pathname == '/admin/dashboard/employees' ? 'mb-2 w-10/12 grid place-items-center mx-auto' : 'mb-2 w-10/12 grid place-items-center mx-auto'}>
                            <Link href="/admin/dashboard/employees">
                                <a className={router.pathname == '/admin/dashboard/employees' ? 'inline-flex rounded-md font-semibold p-1 items-center text-center w-1/2 justify-center bg-accent text-primary transition-all text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary hover:text-primary mx-auto' : 'inline-flex rounded-md font-semibold p-1 items-center text-center w-1/2 justify-center text-white transition-all text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary hover:text-primary mx-auto' }>
                                    <i className='las la-user-circle text-2xl'></i>
                                </a>
                            </Link>
                        </li>
                    }

                    {/* TRAININGS NAV LINK */}
                    {
                        reduceAppSideNav ? 
                        <li className={router.pathname == '/admin/dashboard/trainings' ? 'mb-2 w-full grid place-items-center mx-auto' : 'mb-2 w-full grid place-items-center mx-auto' }>
                            <Link href="/admin/dashboard/trainings">
                                <a className={router.pathname == '/admin/dashboard/trainings' ? 'capitalize inline-flex px-1 py-1 rounded-md font-semibold items-center transition-all text-center w-full justify-center bg-accent text-primary text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary hover:text-primary' : 'capitalize inline-flex px-1 py-1 rounded-md font-semibold items-center transition-all text-center w-full justify-center text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary text-white hover:text-primary' }>
                                    <i className='las la-user-graduate text-2xl'></i>
                                    { reduceAppSideNav && <span className='pl-2'>Employee</span>}
                                </a>
                            </Link>
                        </li>
                        :
                        <li className={router.pathname == '/admin/dashboard/trainings' ? 'mb-2 w-10/12 grid place-items-center mx-auto' : 'mb-2 w-10/12 grid place-items-center mx-auto'}>
                            <Link href="/admin/dashboard/trainings">
                                <a className={router.pathname == '/admin/dashboard/trainings' ? 'inline-flex rounded-md font-semibold p-1 items-center text-center w-1/2 justify-center bg-accent text-primary transition-all text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary hover:text-primary mx-auto' : 'inline-flex rounded-md font-semibold p-1 items-center text-center w-1/2 justify-center text-white transition-all text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary hover:text-primary mx-auto' }>
                                    <i className='las la-user-graduate text-2xl'></i>
                                </a>
                            </Link>
                        </li>
                    }

                    {/* SETTINGS NAV LINK */}
                    {
                        reduceAppSideNav ? 
                        <li className={router.pathname == '/admin/dashboard/settings' ? 'mb-2 w-full grid place-items-center mx-auto' : 'mb-2 w-full grid place-items-center mx-auto' }>
                            <Link href="/admin/dashboard/settings">
                                <a className={router.pathname == '/admin/dashboard/settings' ? 'capitalize inline-flex px-1 py-1 rounded-md font-semibold items-center transition-all text-center w-full justify-center bg-accent text-primary text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary hover:text-primary' : 'capitalize inline-flex px-1 py-1 rounded-md font-semibold items-center transition-all text-center w-full justify-center text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary text-white hover:text-primary' }>
                                    <i className='las la-cog text-2xl'></i>
                                    { reduceAppSideNav && <span className='pl-2'>Settings</span>}
                                </a>
                            </Link>
                        </li>
                        :
                        <li className={router.pathname == '/admin/dashboard/settings' ? 'mb-2 w-10/12 grid place-items-center mx-auto' : 'mb-2 w-10/12 grid place-items-center mx-auto'}>
                            <Link href="/admin/dashboard/settings">
                                <a className={router.pathname == '/admin/dashboard/settings' ? 'inline-flex rounded-md font-semibold p-1 items-center text-center w-1/2 justify-center bg-accent text-primary transition-all text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary hover:text-primary mx-auto' : 'inline-flex rounded-md font-semibold p-1 items-center text-center w-1/2 justify-center text-white transition-all text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary hover:text-primary mx-auto' }>
                                    <i className='las la-cog text-2xl'></i>
                                </a>
                            </Link>
                        </li>
                    }
                </ul>
            </div>
            <div className=''>
                <li 
                onClick= {() => logOut()}
                className={`${!reduceAppSideNav ? 'cursor-pointer  mb-2 w-10/12 grid place-items-center mx-auto' : 'cursor-pointer mb-2 w-full grid place-items-center mx-auto'}`}>
                            <p className={`${ !reduceAppSideNav ? ' inline-flex rounded-md font-semibold p-1 items-center text-center w-1/2 justify-center text-base active:bg-accent text-white hover:text-primary  focus:bg-accent hover:bg-accent active:text-primary' : 'inline-flex px-1 py-1 rounded-md font-semibold items-center text-center w-full justify-center text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary text-white hover:text-primary' }`}>
                            <i className='las la-sign-out-alt text-2xl'></i>                            
                            {reduceAppSideNav && <span className='pl-1'>Logout</span>}
                        </p>
                </li>
                { !reduceAppSideNav ?  (
                        <div className='text-center'>
                            <Link   href='/'>
                                <a className='uppercase font-semibold  pb-1 pr-2 pl-2 pt-3 bg-accent  text-primary rounded-sm hover:bg-call-to-action hover:text-white hover:shadow '>
                                    <i className='las la-question-circle text-3xl'></i>
                                </a>
                            </Link>
                        </div>
                    ) : (
                        <div className='w-full mx-auto flex items-center  justify-center mt-3'>
                            <div className='bg-accent  text-base items-center w-full flex flex-col rounded-lg justify-center text-center p-4 pt-3'>
                                <h6 className='pb-3 pt-0 text-base'>Have any problem? try to contact the customer support </h6>
                                <Link   href='/'>
                                    <a className='uppercase text-xbase font-semibold bg-call-to-action text-white py-2 px-4 rounded'>contact us</a>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </nav>
    );
}

export default DashboardSideNav;
