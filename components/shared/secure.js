import Link from "next/link";

import Button from "./forms/button";

export default function Secure () {
  return (
    <div className='flex items-center justify-center flex-col h-screen'>
      <h2 className='text-3xl text-primary capitalize'>Únauthorised access.</h2>
      <h4 className='text-xl text-text-low'>Redirecting to Login page</h4>
    </div> 
  )
}