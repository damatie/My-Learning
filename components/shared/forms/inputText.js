import Icon from "../icon"

export  const InputText = ({ type, className, name, label, register, required,Icon }) => (
  <>
    
      <label className="font-medium text-sm text-primary block pb-2">{label}</label>
      <span className="border flex rounded-md px-3 py-3">
        <input
        type="text"
        className = {className}
        {...register(name, { required})}
        />
      </span>
  </>
);
export  const InputEmail = ({className, name, label, register, required, }) => (
  <>
    <label className="font-medium text-sm text-primary block pb-2">{label}</label>
    <span className="border flex rounded-md px-3 py-3 ">
      <input
      type="text"
      className = {className}
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

export  const InputPwd = ({showPwd,className, name, label, register, required,onClick }) => {
  return (
    
  <>
    <label className="font-medium text-sm text-primary block pb-2 ">{label}</label>
    <span className="border flex rounded-md px-3 py-3 ">
      <input
      type={ showPwd? "text" : "password" 
     }
      className = {className}
      {...register(name, { 
        required,
       })} 
      
      />
       <span className="cursor-pointer"
        onClick ={onClick}
       >
       <Icon
        className= " text-call-to-action cursor-pointer inline-block"
        name = "view"
        width= {18} 
        height= {18}
        />
       </span>
    </span>
  </>
  )
};
