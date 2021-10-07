/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";

export default function alertCard(props){
  const {msg} = props
  // const  [hide, setHide] = useState(false)
  
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setHide(true)
  //   }, 10000);
  //   return () => clearTimeout(timer);
  // }, []);
 
  return(
    <>
    <div className=" flex bg-green-400 py-3 px-4 text-white font-medium capitalize rounded space-x-4 border absolute top-4 right-3">
      <div className="">
       <i className="las la-exclamation-circle text-xl"></i>
       </div>
       <div className="">{msg}</div>
     </div>
    
    </>
  )
}