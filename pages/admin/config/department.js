/* eslint-disable react-hooks/rules-of-hooks */
import ConfigLayout from '../../../components/layouts/config'
import AddCompanyDetails from '../../../components/setUpConfig/addCompanyDetails'
import DepartmentDetails from '../../../components/setUpConfig/departmentDetails'
import { useState } from 'react'
export default function setConfig(){
  const [isEdit,setIsEdit] = useState(false)
  const [add,setAdd] = useState(true)
  console.log(isEdit)

  return(
    <ConfigLayout>
      <div className="w-full">
      { isEdit?
        <AddCompanyDetails  /> :
        <DepartmentDetails  />
      }
      
      </div>
    </ConfigLayout>
  )
}