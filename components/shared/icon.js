import Image from 'next/image'
export default function Icon(props){
  const {className,width,height,name} = props
  const url = "/assets/img/icon/"
  return(
    <Image
    className={className}
    src={url + name +'.svg'}
    width= {width}
    height= {height}
    />
  )
} 