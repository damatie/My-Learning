import ConfigLayout from '../../../components/layouts/config'
import AddCompanyDetails from '../../../components/setUpConfig/addCompanyDetails'
import CompanyDetails from '../../../components/setUpConfig/companyDetails'
import { useState } from 'react'
export default function setConfig(){
  const [isEdit,setIsEdit] = useState(false)
  const [add,setAdd] = useState(true)

  return(
    <ConfigLayout>
      <div className="w-full">
      { isEdit?
        <AddCompanyDetails  isEdit={isEdit} setIsEdit={setIsEdit}/> :
        <CompanyDetails isEdit={isEdit} setIsEdit={setIsEdit} />
      }
      
      </div>
    </ConfigLayout>
  )
}