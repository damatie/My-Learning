import Link from "next/link";


import AnnouncementCard from "../../components/card/announcementCard";
import ChartCard from "../../components/card/chartCard";
import NumberCard from "../../components/card/numberCard";
import TableCard from "../../components/card/tableCard";
import { dataTrainingCard } from "../../components/data/dataTrainingCard";
import DashboardLayout from "../../components/layouts/dashboardLayout";
import Button from "../../components/shared/forms/button";


function index() {
    return (
        <DashboardLayout>
            <div className='space-y-8 pb-8'>
                <main className=' h-h-big flex space-x-4'>
                    <section className='w-3/5 space-y-4 h-full flex flex-col justify-between'>
                        {/* <div className='w-full flex h-2/6 justify-between space-x-4'> */}
                        <div className='w-full flex  justify-between space-x-4'>
                            {dataTrainingCard?.map ((trainingData,i) => (
                                <NumberCard title={trainingData.title} number={trainingData.number} active={trainingData.active} />
                            ))}
                        </div>
                        <div className='h-4/5  w-full'>
                            <AnnouncementCard/>
                        </div>
                    </section>
                    <section className='w-2/5 h-full flex justify-between flex-col'>
                        <div className='flex w-full justify-between  space-x-4'>
                            <Link href='/dashboard'>
                                <a className='w-6/12 border-2 bg-call-to-action text-center text-white border-call-to-action p-3 rounded-md uppercase text-xbase font-semibold'>create employee</a>
                            </Link>
                            <Link href='/dashboard'>
                                <a className='w-6/12  bg-white  text-center text-call-to-action transition-all border-2 border-call-to-action p-3 rounded-md uppercase text-xbase font-semibold'>
                                create training
                                </a>
                            </Link>
                        </div>
                        <div className='h-4/5 w-full'>
                            <ChartCard/>
                        </div>
                    </section>
                </main>
                <TableCard/>
            </div>
        </DashboardLayout>
    );
}

export default index;