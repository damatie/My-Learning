export default function Button(props){
  const {type,label,className,onClick} = props
 return(
  <>
  <button
  type = {type}
  className={className}
  onClick = {onClick}
  >
    {label}
  </button>
</>
 )
}