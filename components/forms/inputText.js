export  const InputText = ({ type, className, name, label, register, required, }) => (
  <>
    <label className="block py-1">{label}</label>
    <input
    type={type}
    className = {className}
    {...register(name, { required})}
     />
  </>
);
export  const InputEmail = ({className, name, label, register, required, }) => (
  <>
    <label className="block py-1">{label}</label>
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
  </>
);
