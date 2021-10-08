import { useState } from 'react';
import Link from 'next/link'
import { motion } from 'framer-motion';

import FeatureAccordion from '../components/accordion/featureAccordion/featureAccordion'
import About from '../components/card/about'
import { dataAbout } from '../components/data/dataAbout'
import HeroHome from '../components/hero/heroHome'
import HomeLayout from '../components/layouts/homeLayout'
import Button from '../components/shared/forms/button'
import Sponsor from '../components/sponsor/sponsor'
import Testimonial from '../components/testimonial/testimonial'

export default function Home() {



  return (
    <HomeLayout>
      <HeroHome/>
      <section className='pt-3  sponsors sm:block  sm:items-center px-7 w-full bg-accent md:block'>
          <div className='sponsors__content w-11/12  md:flex md:flex-col lg:flex lg:flex-row sm:w-full mx-auto sm:flex sm:flex-wrap sm:flex-col sm:justify-between sm:items-center md:w-full lg:w-10/12'>
            <div className='pl-3 text-center pt-6 sm:pt-5 sm:text-left sm:w-3/12  lg:w-3/12 md:w-full  md:text-center lg:text-left md:pt-3 lg:pt-0'>
              <h5 className='text-xbase   font-normal  border-t-2 border-primary inline-block md:text-xl'>Proud Partners with</h5>
            </div>
            <div className='w-full flex flex-wrap sm:flex sm:flex-wrap sm:justify-start md:w-full lg:w-9/12 sm:w-9/12'>
              <Sponsor/>
              <Sponsor/>
              <Sponsor/>
              <Sponsor/>
              <Sponsor/>
            </div>
          </div>
      </section>
      <section className='about w-full px-3 sm:px-0 flex flex-wrap sm:p-5 mx-auto sm:w-10/12 sm:gap-3 sm:justify-between  sm:pb-7 md:w-11/12 lg:w-10/12'>
        <div className='grid grid-cols-1 sm:grid sm:grid-cols-2 sm:gap-4 sm:my-5 md:w-full md:grid-cols-2 lg:grid-cols-3'>
          <div className='about__text h-48  mb-1 w-10/12  mx-auto sm:m-0 sm:w-11/12 flex items-center md:text-center sm:h-96 md:h-96'>
            <h2 className='text-3xl font-semibold sm:text-4xl md:text-6xl text-left'>Why mylearning?</h2>
          </div>
          {dataAbout.map((data,index)=>{
            return (
              <>
                <About key={index} about={data} />
              </>
            )
          })}
        </div>
      </section>
      <section className='features  block w-full mt-4 sm:p-5 pr-0 pb-20 sm:flex sm:flex-wrap sm:mt-16 mb-30 sm:justify-between md:pb-14 ' id='features'>
        <div className='features__text w-11/12 mb-16 sm:mb-0  mx-auto sm:w-5/12 sm:ml-10'>
          <h3 className='capitalize text-xl font-semibold sm:text-xlg pb-1 mb-4 sm:mb-8 border-b-2 border-green-700 sm:font-normal'>key features</h3>
          <div>
            <FeatureAccordion/>
          </div>
        </div>
        <div className='features__bg w-11/12 ml-auto sm:w-6/12 sm:h-full relative bg-blue-400 '>
          <div className='features__bg--img w-4/5 rounded-2xl rounded-r-none h-64 sm:h-96 right-0 bg-call-to-action absolute lg:h-96 md:h-64'></div>
          {/* <div></div> */}
          <div className='absolute w-9/12 h-2/6 top-11 left-0 rounded-2xl rounded-r-none'>
            <img src='assets/img/others/Tickets.png' alt='' className='left-0 absolute object-contain'  />
          </div>
        </div>
      </section>
      <Testimonial/>
      <section className='start w-full -mt-6 sm:-mt-0 mb-16 sm:mb-24 md:mb-16 '>
          <div className=' w-full xl:w-9/12 mx-auto sm:w-11/12 md:w-9/12'>
            <div className=' flex items-center w-11/12 text-center xl:text-left m-auto xl:flex md:w-full flex-wrap'>
              <h3 className='w-full py-2 sm:w-7/12 md:w-full md:text-2xl lg:w-7/12 sm:text-2xl text-3xl xl:text-5xl font-normal lg:text-4xl leading-tight'>Start <span className='text-success'>Developing</span> your company today</h3>
              <Link href='/auth/signup'>
                <a className=''>
                  <Button
                  className='mt-2 ml-3   inline-block ease-in-out font-semibold py-3 px-12 text-base transition duration-300 text-white rounded-md bg-call-to-action hover:bg-success'
                  label='Create Account'
                  />
                </a>
              </Link>
            </div>
          </div>
        </section>
    </HomeLayout>
  )
}
