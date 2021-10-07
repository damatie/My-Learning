import Icon from "../icon"

export  const InputText = ({ type,onChange,name, label, register, required }) => (
  <>
    
      <label className="text-sm font-semibold pb-1 block">{label}</label>
      <span className="border border-primary flex rounded-md px-3 py-2">
        <input
        onChange ={onChange}
        type={type}
        className= " rounded-md text-sm  py-1  w-full outline-none"
        {...register(name, { 
          required,
         })}
        />
      </span>
  </>
);
export  const InputEmail = ({ type,name, label, register, required, }) => (
  <>
    <label className="text-sm font-semibold pb-1 block">{label}</label>
    <span className="border border-primary flex rounded-md px-3 py-2 ">
      <input
      type={type}
      className= " rounded-md text-sm  py-1  w-full outline-none"
      {...register(name, { 
        required,
        pattern: {
          value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          message: "Please enter a valid email"
      } })} 
      
      />
    </span>
  </>
);

export  const InputPwd = ({type, name, label, register, required,onClick, validate }) => {
  return (
    
  <>
    <label className=" text-sm font-semibold pb-1 block">{label}</label>
    <span className="border border-primary flex rounded-md px-3 ">
      <input
      type={type}
     className= " rounded-md text-sm w-full outline-none"
      {...register(name, { 
        required,
        minLength: {
          value: 5,
          message: "Password must have at least 5 characters"
        },
       })} 
      
      />
       <span className="cursor-pointer  flex-none inline-block pt-1 leading-10 "
        onClick ={onClick}
       >
       <Icon
        className= " text-call-to-action cursor-pointer inline-block "
        name = "view"
        width= {18} 
        height= {18}
        />
       </span>
    </span>
  </>
  )
};
