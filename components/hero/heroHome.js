import Link from "next/link"; 
import Image from "next/image"; 
import Button from "../shared/forms/button";


export default function HeroHome () {
    return (
        <main className="landing flex flex-wrap justify-between items-center w-11/12 mx-auto py-10 pb-16">
          <div className='landing__text w-7/12 py-1  items-stretch'>
            <h1 className='text-6xl pb-3 mb-5 leading-tight font-bold text-primary'>Helping companies <span className='text-success'>develop</span> High <span className='text-success'>Standards</span> for High <span className='text-success'>productivity</span></h1>
            <h4 className='text-md leading-snug w-10/12 font-normal'>A progressive web application that provides the possibility for companies to streamline training approval process </h4>
            <Link href='/'>
              <a className=''>
                <Button
                  className='mt-5 inline-block py-2 px-8 font-normal text-base text-white rounded-md bg-call-to-action'
                  label='Create Account'
                />
              </a>
            </Link>
          </div>
          <div className='landing__img w-5/12 py-1'>
              <img src='/assets/img/others/Illustration.png' alt='Helping Companies image ' width={600} />
          </div>
        </main>
    );
}