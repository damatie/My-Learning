import {useState}  from 'react'

import DashboardSideNav from "../navBar/dashboardSideNav";
import DashboardTopNav from "../navBar/dashboardTopNav";
import HeadLayout from './headLayout';

function DashboardLayout({children}) {

    const [reduceAppSideNav, setReduceAppSideNav] = useState(true)

    return (
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
        </>
    );
}

export default DashboardLayout;