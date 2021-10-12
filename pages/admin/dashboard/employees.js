/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import Link from 'next/link'


import EditEmployeeColoredInputs from "../../../components/modal/editEmployeeColoredInputs";
import Button from "../../../components/shared/forms/button";
import DashboardLayout from "../../../components/layouts/dashboardLayout";
import DeleteModal from "../../../components/modal/deleteModal";
import EmployeeTableCardList from "../../../components/card/employeeTableCardList";
import CreateEmployee from "../../../components/modal/createEmployee";

function index() {

    const [openAddEmployeeModal, setOpenAddEmployeeModal] = useState(false)
    const [openDeleteModal, setOpenDeleteModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState(false)
    const [hideBtns, setHideBtns] = useState(false)
    const [editSingleEmployee, setEditSingleEmployee] = useState({
        firstName:'',
        lastName:'',
        email:'',
        dept:'',
        contactNum:'',
        jobTitle:''
    })
    const [employeeListData, setEmployeeListData] = useState([
        {
            name: 'Cool joe',
            email: 'shakesdford@gmail.com',
            department: 'Finance',
            jobTitle:'Chief auditor',
            phoneNumber:'+2349077799999',
            numberOfOngoingTrainings:4,
        },
        {
            name: 'Adams Bedford',
            email: 'adamsbedford@yahoo.com',
            department: 'Marketing',
            jobTitle:'Manager ',
            phoneNumber:'+2349077799999',
            numberOfOngoingTrainings:6,
        },
        {
            name: 'Adams Bed',
            email: 'adamsford@gmail.com',
            department: 'Marketing',
            jobTitle:'HOD, Marketing',
            phoneNumber:'+2349077799999',
            numberOfOngoingTrainings:0,
        }
    ])

    const [highlightId, setHighlightId] = useState(null)

    const highlightEmployee = (e,prev,i) => {
        setHideBtns(true)
        setHighlightId(i)
    }

    const deleteHighlightEmployee = (id) => {
        const editedEmployeeListData = [...employeeListData]
        editedEmployeeListData.splice(id,1)
        setEmployeeListData(editedEmployeeListData)
        setOpenDeleteModal(false)
        setHighlightId(null)
        setHideBtns(false)
    }

    const editSelectedEmployee = (id) => {
        // console.log(id)
        const editSingleEmployeeListData = employeeListData[id]
        setEditSingleEmployee(editSingleEmployeeListData)
        console.log(editSingleEmployeeListData)
    }

    const clickedDeleteModal = (prev) => {
        setOpenDeleteModal(!prev)
    }

    const clickedEditModal = (prev,id) => {
        setOpenEditModal(!prev)
        editSelectedEmployee(id)
    }

    const clickedCreateModal = (prev) => {
        setOpenCreateModal(!prev)
    }

    const clickedAddEmployeeModal = (prev) => {
        setOpenAddEmployeeModal(!prev)
    }



    return (
        <>
            <DashboardLayout>
                <div className='w-full flex justify-end'>
                    {hideBtns && (
                        <>
                            <Button className='py-2 px-8 rounded-sm bg-transparent border-error border text-error font-semibold uppercase text-sm' label='delete employee' onClick={()=>clickedDeleteModal(openDeleteModal)} />
                            <Button className='py-2 px-8 rounded-sm bg-transparent border-call-to-action border text-call-to-action font-semibold uppercase text-sm ml-5' label='edit employee' onClick={()=>clickedEditModal(openEditModal,highlightId)} />
                        </>
                    ) }
                        <Button className='py-2 px-8 rounded-sm bg-call-to-action border-call-to-action border text-white font-semibold uppercase text-sm ml-5' label='create employee' onClick={()=>clickedAddEmployeeModal(openAddEmployeeModal)} />
                </div>
                { employeeListData?.length === 0 ?
                    (
                        <div className='mb-10 rounded-lg mt-5 py-20 flex items-center justify-center bg-white w-full'>
                            <h3 className='text-3xl w-9/12 text-center'>No data currently available</h3>
                        </div>
                    )   :   (
                        <div className='bg-white mb-10 rounded-lg w-full mt-5 p-5'>
                            <EmployeeTableCardList employeeListData={employeeListData} highlightEmployee={highlightEmployee} hideBtns={hideBtns} deleteHighlightEmployee={deleteHighlightEmployee} />
                            <div className='pagination py-7 text-primary w-full pl-8 flex items-center'>
                                <h5 className='text-sm font-semibold'>Rows per page</h5>
                                <button className='mx-5'>
                                    <span>{employeeListData.length}</span>
                                    {/* <i className='las la-caret-down'></i> */}
                                </button>
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
                    )
                }

            </DashboardLayout>
            {/* {console.log(editSingleEmployee)} */}
            {   openDeleteModal &&
                <DeleteModal
                    openDeleteModal={openDeleteModal}
                    setOpenDeleteModal={setOpenDeleteModal}
                    deleteHighlightEmployee={deleteHighlightEmployee}
                    highlightId={highlightId}
                    editSingleEmployee={editSingleEmployee}
                />
            }
            {  openEditModal &&
                <EditEmployeeColoredInputs
                    openEditModal={openEditModal}
                    setOpenEditModal={setOpenEditModal}
                    editSelectedEmployee={editSelectedEmployee}
                    highlightId={highlightId}
                    editSingleEmployee={editSingleEmployee}
                    // editSingleEmployeeListData={editSingleEmployeeListData}
                />
            }
            {/* {openCreateModal && <CreateEmployee openCreateModal={openCreateModal} setOpenCreateModal={setOpenCreateModal} />} */}
            {openAddEmployeeModal && <CreateEmployee openAddEmployeeModal={openAddEmployeeModal} setOpenAddEmployeeModal={setOpenAddEmployeeModal} />}
        </>
    );
}

export default index;