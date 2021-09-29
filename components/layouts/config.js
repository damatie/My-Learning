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
      </Head>
      <main className="w-full bg-white">
    
      <div className="w-9/12  mx-auto py-10  px-10">
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
          <span className="flex  w-5/12 float-right bg-error">
            <span className=" text-primary text-base px-4 inline-block">
              Site completion
            </span>
            <span className=" inline-block w-6/12 ">
              <ProgressBar/>
            </span>
          </span>
        </div>      
      </div>
    </main>
    </>
  )
}