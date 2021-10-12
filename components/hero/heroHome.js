/* eslint-disable @next/next/no-img-element */
import Link from "next/link"; 
import Image from "next/image"; 
import Button from "../shared/forms/button";


export default function HeroHome () {
    return (
        <main className="block bg-white md:flex md:flex-wrap  md:justify-between md:items-center lg-flex w-11/12 mx-auto py-10 pt-5 sm:py-10 pb-16 lg:flex lg:flex-nowrap ">
          <div className='w-full landing__text md:w-7/12 py-1  items-stretch '>
            <h1 className=' text-3xl pb-2 mb-2  sm:text-4xl lg:text-6xl sm:pb-3 sm:mb-5 leading-tight font-bold text-primary'>Helping companies <span className='text-success'>develop</span> High <span className='text-success'>Standards</span> for High <span className='text-success'>productivity</span></h1>
            <h4 className='text-lg w-full text-left sm:text-md md:text-xl lg:text-3xl leading-snug sm:w-10/12 md:w-full md:pr-2 font-normal'>A progressive web application that provides the possibility for companies to streamline training approval process.</h4>
            <Link href='/auth/signup'>
              <a className=''>  
                <Button
                className='mt-3 inline-block sm:mt-5 ease-in-out py-3 px-8 text-base transition duration-300 text-white rounded-md bg-call-to-action font-semibold'
                label='Create Account'
                />
              </a>
            </Link>
          </div>
          <div className='landing__img mt-10   w-11/12 sm:mt-0 sm:w-full  md:mt-5 md:w-5/12 py-1'>
              <img src='/assets/img/others/Illustration.png' alt='Helping Companies image ' width={600} />
          </div>
        </main>
    );
}