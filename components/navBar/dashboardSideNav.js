import Link from "next/link";
import Icon from "../shared/icon";
import { userLogOut } from "../../services/auth"
import { useRouter } from "next/router"

function DashboardSideNav({reduceAppSideNav,setReduceAppSideNav}) {
    const Router = useRouter()
    // LogOut user
    function logOut(){
     userLogOut("token")
	Router.push("/auth/signin")
    }

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
                        {/* <Image src='/assets/img/others/Logo.png' alt='my learning app' width={166.32} height={33.12} /> */}
                    </div>
                ) : (
                    <div className='logo mx-auto flex items-center justify-center pb-5'>
                        {/* <Image src='/assets/img/others/Logo.png' alt='my learning app' width={103.95} height={20.7} /> */}
                    </div>
                ) }
                <ul className='w-full flex flex-col '>
                    <li className={`${!reduceAppSideNav ? 'mb-2 w-10/12 grid place-items-center mx-auto' : 'mb-2 w-full grid place-items-center mx-auto'}`}>
                        <Link   href='/dashboard'>
                            <a className={`${ !reduceAppSideNav ? 'inline-flex px-1 py-1 transition-all text-white rounded-md font-semibold items-center text-center w-1/2 justify-center text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary hover:text-primary' : 'text-white transition-all  inline-flex px-1 py-1 rounded-md font-semibold items-center text-center w-full justify-center text-base active:bg-accent  focus:bg-accent hover:text-primary hover:bg-accent active:text-primary' }`}>
                                {/* <Icon name='dashboard' alt='dashboard' width={25} height={25} /> */}
                                <i className='las la-user-circle text-2xl'></i>
                                { reduceAppSideNav &&  <span className='pl-2'>Dashboard</span>}
                            </a>
                        </Link>
                    </li>
                    <li className={`${!reduceAppSideNav ? 'mb-2 w-10/12 grid place-items-center mx-auto' : 'mb-2 w-full grid place-items-center mx-auto'}`}>
                        <Link   href='/dashboard/employees'>
                            <a className={`${ !reduceAppSideNav ? 'inline-flex p-1 rounded-md font-semibold items-center text-center w-1/2 justify-center  transition-all text-base active:bg-accent  text-white hover:text-primary focus:bg-accent hover:bg-accent active:text-primary' : 'transition-all inline-flex p-1 rounded-md font-semibold items-center text-center w-full justify-center text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary text-white hover:text-primary' }`}>
                                {/* <Icon name='employee' alt='employees' width={25} height={25} /> */}
                                <i className='las la-user-circle text-2xl'></i>
                                { reduceAppSideNav && <span className='pl-2'>Employee</span>}
                            </a>
                        </Link>
                    </li>
                    <li className={`${!reduceAppSideNav ? 'mb-2 w-10/12 grid place-items-center mx-auto' : 'mb-2 w-full grid place-items-center mx-auto'}`}>
                        <Link   href='/'>
                            <a className={`${ !reduceAppSideNav ? 'inline-flex p-1  rounded-md font-semibold items-center text-center w-1/2 justify-center transition-all text-base active:bg-accent  focus:bg-accent  text-white hover:text-primary hover:bg-accent active:text-primary' : 'inline-flex p-1 rounded-md font-semibold items-center text-center w-full justify-center text-base active:bg-accent  focus:bg-accent hover:bg-accent  transition-all active:text-primary text-white hover:text-primary' }`}>
                                {/* <Icon name='mortarboard' alt='trainings' width={25} height={25} /> */}
                                <i className='las la-user-graduate text-2xl'></i>
                                { reduceAppSideNav && <span className='pl-2'>Trainings</span>}
                            </a>
                        </Link>
                    </li>
                    <li className={`${!reduceAppSideNav ? 'mb-2 w-10/12 grid place-items-center mx-auto' : 'mb-2 w-full grid place-items-center mx-auto'}`}>
                        <Link   href='/'>
                            <a className={`${ !reduceAppSideNav ? 'inline-flex rounded-md font-semibold p-1 items-center text-center w-1/2 justify-center transition-all text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary text-white hover:text-primary' : 'inline-flex px-1 py-1 rounded-md font-semibold items-center transition-all text-center w-full justify-center text-base active:bg-accent  focus:bg-accent hover:bg-accent active:text-primary text-white hover:text-primary' }`}>
                                {/* <Icon name='Setting' alt='settings' width={25} height={25} /> */}
                                <i className='las la-cog text-2xl'></i>
                                { reduceAppSideNav && <span className='pl-2'>Settings</span>}
                            </a>
                        </Link>
                    </li>
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