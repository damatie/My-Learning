import ConfigLayout from '../../../components/layouts/config'
import AddCompanyDetails from '../../../components/setUpConfig/addCompanyDetails'
import Icon from '../../../components/shared/icon'
export default function companyDetails(){

  return(
    <ConfigLayout>
      <div className=" w-6/12 mx-auto px-10 py-5">
        <div className=" w-full text-left border-b border-secondary pb-3"> 
          <span className=" text-primary text-lg font-medium block">
            Company’s details
          </span>
        </div>
        <div className=" text-right mt-5">
          <span className=" px-2 py-1 bg-call-to-action rounded text-white cursor-pointer">
            <i class="las la-pen text-white"></i>
          </span>
        </div>
        <div className="w-full  mb-3"> 
          <div class="grid grid-cols-1 gap-4 pt-1">
            <span>
              <span className="font-bold text-sm text-primary-lighter block pb-2">
                Company’s name
              </span>
              <span className="py-3 block bg-accent text-primary font-bold  rounded px-4">
              Spring Rock Energy
              </span>
            </span>
            <span>
              <span className="font-bold text-sm text-primary-lighter block pb-2">
              Office Email
              </span>
              <span className="py-3 block bg-accent text-primary font-bold  rounded px-4">
              @springrockenergy.com
              </span>
            </span>
            <span>
              <span className="font-bold text-sm text-primary-lighter block pb-2">
              Office Location
              </span>
              <span className="py-3 block bg-accent text-primary font-bold  rounded px-4">
              @springrockenergy.com
              </span>
            </span>
            <span>
              <span className="font-bold text-sm text-primary-lighter block pb-2">
               Number of Employees
              </span>
              <span className="py-3 block bg-accent text-primary font-bold  rounded px-4">
              @springrockenergy.com
              </span>
            </span>
            <span>
              <span className="font-bold text-sm text-primary-lighter block pb-2">
              Office Contact
              </span>
              <span className="py-3 block bg-accent text-primary font-bold  rounded px-4">
              @springrockenergy.com
              </span>
            </span>
          </div>

        </div>
      </div>
      <div className="w-full hidden">
        <AddCompanyDetails/>
      </div>
    </ConfigLayout>
  )
}