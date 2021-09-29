export default function Button(props){
  const {type,label,icon,className,onClick} = props
 return(
  <>
  <button
  type = {type}
  className={className}
  onClick = {onClick}
  >
    {icon}
    {label}
  </button>
</>
 )
}