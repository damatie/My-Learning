import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Button from '../shared/forms/button'
import { useRouter } from 'next/router'
export default function authLayout({ children }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title> My Learning</title>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
      </Head>
      <main className="flex w-full">
      <div className="lg:hidden xl:block  absolute left-0 px-10 ">
        <div className="w-full mt-32">
          <Image
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
      <div className="lg:w-full xl:w-8/12 2xl:w-9/12 h-full right-0 fixed bg-accent px-10">
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
        <span className=" inline-block text-primary text-base w-10/12 text-right mt-2">
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
          <span className=" inline-block text-primary text-base w-10/12 text-right mt-2">
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