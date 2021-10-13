/* eslint-disable react-hooks/rules-of-hooks */
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Button from '../shared/forms/button'
import { useRouter } from 'next/router'
import HeadLayout from './headLayout'
// import { checkAuthorizedUser } from '../../services/auth'


export default function authLayout({ children }) {
  const router = useRouter();
  return (
    <>
      <HeadLayout title='Authorization | My Learning'/>
      <main className="flex w-full">
        
        <div className="lg:hidden xl:block  fixed left-0 px-10 ">
          <div className="w-full mt-32">
            <Image
            alt ='my learning'
            src="/assets/img/others/Logo.png"
            width = {231}
            height = {46}
            />
          </div>
          <div className="text-xlg font-bold text-primary pt-16">
            <span className="block"> High <span className=" text-success">Standards</span> </span>
            <span className="block"> for High <span className=" text-success">Productivity</span></span>
          </div>
        </div>
        <div className="lg:w-full xl:w-8/12 2xl:w-9/12 h-full overflow-y-auto right-0 fixed bg-accent px-10">
          {
          router.pathname === '/auth/signup'? 
          <div className=" w-full py-4">
          <span className=" inline-block float-right">
            <Link href="/auth/signin">
              <a>
                <Button
                className=" bg-call-to-action uppercase text-white text-sm  px-14 py-3 rounded "
                label= " Login"
                />
              </a>
              </Link>
          </span>
          <span className=" inline-block text-primary text-base xl:w-9/12 2xl:w-10/12 text-right mt-2">
            Already a have an account Login ? 
          </span>
        </div>
        : 
        <div className=" w-full py-4">
            <span className=" inline-block float-right">
            <Link href="/auth/signup">
              <a>
                <Button
                className=" bg-call-to-action uppercase text-white text-sm  px-14 py-3 rounded "
                label= " Signup"
                />
                </a>
              </Link>
            </span>
            <span className=" inline-block text-primary text-base xl:w-9/12  2xl:w-10/12 text-right mt-2">
            Dont have an Account? 
            </span>
          </div>
          }
          <div className=" bg-white rounded lg:mt-20 xl:mt-5 lg:w-8/12 xl:w-8/12 2xl:w-6/12 px-10 py-7 mx-auto ">
            {children}
          </div>
        </div>
      </main>
    </>
  )
}