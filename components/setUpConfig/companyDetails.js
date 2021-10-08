export default function CompanyDetails(props){
  const {isEdit,setIsEdit} = props
  return(
    <div className=" w-6/12 mx-auto px-10 py-5">
    <div className=" w-full text-left border-b border-secondary pb-3"> 
      <span className=" text-primary text-lg font-medium block capitalize">
        Company’s details
      </span>
    </div>
    <div className=" text-right mt-5">
      <span className=" px-2 py-1 bg-call-to-action rounded text-white cursor-pointer" 
      onClick={(e) => setIsEdit(!isEdit)}>
        <i className="las la-pen text-white"></i>
      </span>
    </div>
    <div className="w-full  mb-3"> 
      <div className="grid grid-cols-1 gap-4 pt-1">
        <span>
          <span className="font-bold text-sm text-primary-lighter block pb-2 capitalize">
            Company’s name
          </span>
          <span className="h-12 pt-3  block bg-accent text-primary font-semibold  rounded px-4">
          Spring Rock Energy
          </span>
        </span>
        <span>
          <span className="font-bold text-sm text-primary-lighter block pb-2 capitalize">
          Office Email
          </span>
          <span className="h-12 pt-3  block bg-accent text-primary font-semibold  rounded px-4">
          @springrockenergy.com
          </span>
        </span>
        <span>
          <span className="font-bold text-sm text-primary-lighter block pb-2">
          Office Location
          </span>
          <span className="h-12 pt-3  block bg-accent text-primary font-semibold  rounded px-4">
          @springrockenergy.com
          </span>
        </span>
        <span>
          <span className="font-bold text-sm text-primary-lighter block pb-2">
          Number of Employees
          </span>
          <span className="h-12 pt-3  block bg-accent text-primary font-semibold  rounded px-4">
          @springrockenergy.com
          </span>
        </span>
        <span>
          <span className="font-bold text-sm text-primary-lighter block pb-2">
          Office Contact
          </span>
          <span className="h-12 pt-3 block bg-accent text-primary font-semibold  rounded px-4">
          @springrockenergy.com
          </span>
        </span>
      </div>

    </div>
</div>
  )
}