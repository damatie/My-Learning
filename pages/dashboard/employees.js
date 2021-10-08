/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Link from 'next/link'

import EmployeeTableCardList from "../../components/card/employeeTableCardList";
import DashboardLayout from "../../components/layouts/dashboardLayout";
import DeleteModal from "../../components/modal/deleteModal";
import EditEmployeeColoredInputs from "../../components/modal/editEmployeeColoredInputs";
import Button from "../../components/shared/forms/button";

function index() {

    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)
    const [hideBtns, setHideBtns] = useState(true)

    const clickedDeleteModal = (prev) => {
        setOpenDeleteModal(!prev)
    }

    const clickedEditModal = (prev) => {
        setOpenEditModal(!prev)
    }

    return (
        <>
            <DashboardLayout>
                <div className='w-full flex justify-end'>
                    {hideBtns && (
                        <>
                            <Button className='py-2 px-8 rounded-sm bg-transparent border-error border text-error font-semibold uppercase text-sm' label='delete employee' onClick={()=>clickedDeleteModal(openDeleteModal)} />
                            <Button className='py-2 px-8 rounded-sm bg-transparent border-call-to-action border text-call-to-action font-semibold uppercase text-sm ml-5' label='edit employee' onClick={()=>clickedEditModal(openEditModal)} />
                        </>
                    ) }
                    <Link href='/'>
                        <a>
                            <Button className='py-2 px-8 rounded-sm bg-call-to-action border-call-to-action border text-white font-semibold uppercase text-sm ml-5' label='create employee' />
                        </a>
                    </Link>
                </div>
                <div className='bg-white mb-10 rounded-lg w-full mt-5 p-5'>
                    <EmployeeTableCardList/>
                    <div className='pagination py-7 text-primary w-full pl-8 flex items-center'>
                        <h5 className='text-sm font-semibold'>Rows per page</h5>
                        <button className='mx-5'><span>10</span><i className='las la-caret-down'></i></button>
                        <div className='flex mr-4'>
                            <p className='text-sm px-1'>1-1</p>
                            <p className='text-sm px-1'>of 1</p>
                        </div>
                        <div className='flex flex-wrap'>
                            <button>
                                <i className='las la-angle-double-left mx-10 text-xl font-bold'></i>
                            </button>
                            <button>
                                <i className='las la-angle-left mx-10 text-xl font-bold' ></i>
                            </button>
                            <button>
                                <i className='las la-angle-double-right mx-10 text-xl font-bold'></i>
                            </button>
                            <button>
                                <i className='las la-angle-right mx-10 text-xl font-bold'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </DashboardLayout>
            {openDeleteModal && <DeleteModal openDeleteModal={openDeleteModal} setOpenDeleteModal={setOpenDeleteModal} />}
            {openEditModal && <EditEmployeeColoredInputs openEditModal={openEditModal} setOpenEditModal={setOpenEditModal} />}
        </>
    );
}

export default index;