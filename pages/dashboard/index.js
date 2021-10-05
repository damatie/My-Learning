import Link from "next/link";


import AnnouncementCard from "../../components/card/announcementCard";
import ChartCard from "../../components/card/chartCard";
import NumberCard from "../../components/card/numberCard";
import TableCard from "../../components/card/tableCard";
import DashboardLayout from "../../components/layouts/dashboardLayout";
import Button from "../../components/shared/forms/button";


function index() {
    return (
        <DashboardLayout>
            <main className='bg-green-500 h-h-big flex space-x-4'>
                <section className='w-8/12 space-y-4 h-full bg-pink-500 flex flex-col justify-between'>
                    <div className='bg-purple-900 w-full flex h-2/5 justify-between space-x-4'>
                        <NumberCard/>
                        <NumberCard/>
                    </div>
                    <div className='h-3/5  w-full bg-green-700'>
                        <AnnouncementCard/>
                    </div>
                </section>
                <section className='w-4/12 h-full bg-blue-500'>
                    <div className='flex  bg-green-700 justify-between  space-x-4'>
                        <Link href='/dashboard'>
                            <a className='w-6/12 border-2 border-call-to-action p-3 rounded-md uppercase text-xbase font-semibold  active:bg-call-to-action  hover:bg-call-to-action hover:text-white active:text-white    focus:text-white focus:bg-call-to-action text-primary'>create employee</a>
                        </Link>
                        <Link href='/dashboard'>
                            <a className='w-6/12 border-2 border-call-to-action p-3 rounded-md uppercase text-xbase font-semibold  active:bg-call-to-action  hover:bg-call-to-action hover:text-white active:text-white    focus:text-white focus:bg-call-to-action text-primary'>
                            create training
                            </a>
                        </Link>
                    </div>
                    <div className=''>
                        <ChartCard/>
                    </div>
                </section>
            </main>
            <TableCard/>
        </DashboardLayout>
    );
}

export default index;