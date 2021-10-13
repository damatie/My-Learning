import Link from "next/link";


import AnnouncementCard from "../../../components/card/announcementCard";
import ChartCard from "../../../components/card/chartCard";
import NumberCard from "../../../components/card/numberCard";
import TableCard from "../../../components/card/tableCard";
import { dataTrainingCard } from "../../../components/data/dataTrainingCard";
import DashboardLayout from "../../../components/layouts/dashboardLayout";
import CreateEmployee from "../../../components/modal/createEmployee";
import Button from "../../../components/shared/forms/button";
import { useAppData } from "../../../context/globalState";


function index() {

    const [{openAddEmployeeModal},dispatch] = useAppData()

    const toggleCreateEmployeeBtn = () => {
        dispatch({
            type:"TOGGLE_CREATE_MODAL",
            openAddEmployeeModal:!openAddEmployeeModal
        })
    }

    return (
        <>
            <DashboardLayout>
                <div className='space-y-8 pb-8'>
                    <main className=' h-h-big flex space-x-4'>
                        <section className='w-3/5 space-y-4 h-full flex flex-col'>
                            <div className='w-full flex  justify-between space-x-4'>
                                {dataTrainingCard?.map ((trainingData,i) => (
                                    <NumberCard key={i} title={trainingData.title} number={trainingData.number} active={trainingData.active} />
                                ))}
                            </div>
                            <div className='h-3/5  w-full'>
                                <AnnouncementCard/>
                            </div>
                        </section>
                        <section className='w-2/5 h-full flex justify-between flex-col'>
                            <div className='flex w-full justify-between  space-x-4'>
                                <Button className='py-2 px-8 rounded-md w-6/12 text-center bg-call-to-action border-call-to-action border text-white font-semibold uppercase text-sm ml-5' label='create employee' onClick={toggleCreateEmployeeBtn} />
                                <Link href='admin/dashboard/trainings'>
                                    <a className='w-6/12  bg-white  text-center text-call-to-action transition-all border-2 border-call-to-action px-3 py-2 rounded-md uppercase text-xbase font-semibold'>
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
            { openAddEmployeeModal &&    <CreateEmployee /> }
        </>
    );
}

export default index;