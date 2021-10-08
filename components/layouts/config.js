/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Button from '../shared/forms/button'
import ProgressBar from '../shared/progressBar'
import { useRouter } from 'next/router'
export default function authLayout({ children }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title> My Learning :: Site Config</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
      </Head>
      <main className="w-full bg-white">
    
      <div className=" xl:w-10/12 2xl:w-11/12  mx-auto py-10  px-10">
        <div className=" w-full">
        <Image
          src="/assets/img/others/Logo.png"
          width = {231}
          height = {46}
          />
        </div>  
        <div className=" py-5 bg-accent mt-6 px-10 w-full">
          <span className="  text-primary font-medium text-base  inline-block  ">
            Set up Site Config
          </span>
          <span className="flex  md:w-8/12 xl:w-6/12  2xl:w-5/12 justify-end float-right ">
            <span className=" text-primary text-base px-4 inline-block">
              Site completion
            </span>
            <span className=" inline-block w-8/12 ">
              <ProgressBar range="26" bgColor="#2B7A78"/>
            </span>
          </span>
        </div> 
        <div className=" bg-text-low-lighter px-5 py-5 my-4">
          <div className="bg-white py-6">
            {children}
          </div>
        </div>     
      </div>
    </main>
    </>
  )
}