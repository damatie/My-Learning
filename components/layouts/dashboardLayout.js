/* eslint-disable react-hooks/rules-of-hooks */
import DashboardSideNav from "../navBar/dashboardSideNav";
import { useState,useEffect  } from "react" 
import DashboardTopNav from "../navBar/dashboardTopNav";
import HeadLayout from './headLayout';
import { checkAuthorizedUser } from "../../services/auth"
import { useRouter } from "next/router"
import Link from "next/link";
import Secure from "../shared/secure";

function DashboardLayout({children}) {
    const [reduceAppSideNav, setReduceAppSideNav] = useState(true) 
    const [pageSecure, setPageSecure] = useState(null)
    const Router = useRouter()
    useEffect(() => {
        const check = checkAuthorizedUser()
        if(!check){
            setPageSecure(true)
            setTimeout(function(){ window.location="/auth/signin"; },5000);
            // Router.push('/auth/signin')
        }else{
            setPageSecure(false)
        }
      }, [Router, pageSecure]);
    //   const getValue = localStorage.getItem('token')

    return (
        <>
            {pageSecure === true ? <Secure /> : null
            }

            {pageSecure === false?
            <>
                <HeadLayout/>
            
                <section className='bg-accent h-screen w-screen'>
                    <aside className={`${reduceAppSideNav ? 'fixed  h-full left-0 overflow-y-auto bg-call-to-action md:w-2/12  transition-all' :  'bg-call-to-action md:w-1/12 transition-all overflow-y-auto left-0 fixed h-full'  }`}>
                        <DashboardSideNav  reduceAppSideNav={reduceAppSideNav} setReduceAppSideNav={setReduceAppSideNav} />
                    </aside>
                    <main className={`${reduceAppSideNav ? 'overflow-y-auto h-full bg-primary-dashboard fixed right-0 md:w-10/12 transition-all' : 'md:w-11/12 transition-all fixed bg-primary-dashboard h-full overflow-y-auto right-0'}`}>
                        <div className='w-11/12 mx-auto flex flex-col'>
                            <DashboardTopNav/>
                            {children}
                        </div>
                    </main>
                </section>
            </>:
            null
            }
           
        </>
    );
}

export default DashboardLayout;