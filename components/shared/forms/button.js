const btnLoader= {
}
export default function Button(props){
  const {type,label,icon,className,onClick,isLoading,disabled} = props
 return(
  <>
  <button
  disabled ={disabled}
  type = {type}
  className={className}
  onClick = {onClick}
  >
    {icon}
    {label}
    {
    isLoading? 
    <i className="las la-circle-notch px-3 buttonSpinner"></i>
    :
    ''
    }
  </button>
</>
 )
}