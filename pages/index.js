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
      <section className='sponsors flex items-center px-7 w-full bg-accent'>
          <div className='sponsors__content w-9/12 mx-auto flex flex-wrap justify-between items-center'>
            <div className='w-3/12'>
              <h5 className='text-xbase font-normal  border-t-2 border-primary inline-block'>Proud Partners with</h5>
            </div>
            <div className='flex flex-wrap justify-start w-9/12'>
              <Sponsor/>
              <Sponsor/>
              <Sponsor/>
              <Sponsor/>
              <Sponsor/>
            </div>
          </div>
        </section>
      <section className='about flex flex-wrap p-5 mx-auto w-10/12 gap-3 justify-between  pb-7'>
        <div className='grid grid-cols-3 gap-4 my-5'>
          <div className='about__text w-11/12 flex items-center h-96'>
            <h2 className='font-semibold text-6xl text-left'>Why mylearning?</h2>
          </div>
          {dataAbout.slice(0,2).map((data,index)=>{
            return (
              <>
                <About key={index} about={data} />
              </>
            )
          })}
        </div>
        <div className='grid grid-cols-3 gap-4 gap-y-4'>
          {dataAbout.slice(2).map((data,index)=>{
            return (
              <>
                <About key={index} about={data} />
              </>
            )
          })}
        </div>
      </section>
      <section className='features w-full p-5 pr-0 pb-20 flex flex-wrap mt-16 mb-30 justify-between' id='features'>
        <div className='features__text w-5/12 ml-10'>
          <h3 className='capitalize text-xlg pb-1 mb-8 border-b-2 border-green-700 font-normal'>key features</h3>
          <div>
            <FeatureAccordion/>
          </div>
        </div>
        <div className='features__bg w-6/12 h-full relative bg-blue-400'>
          <div className='features__bg--img w-4/5 rounded-2xl rounded-r-none h-96 right-0 bg-call-to-action absolute'></div>
          {/* <div></div> */}
          <div className='absolute w-9/12 h-2/6 top-11 left-0 rounded-2xl rounded-r-none'>
            <img src='assets/img/others/Tickets.png' alt='' className='left-0 absolute object-contain'  />
          </div>
        </div>
      </section>
      <Testimonial/>
      <section className='start w-full mb-24'>
          <div className='w-10/12 mx-auto'>
            <div className='start__content items-center w-3/4 m-auto flex  flex-wrap'>
              <h3 className='w-7/12 text-5xl font-normal leading-tight'>Start <span className='text-success'>Developing</span> your company today</h3>
              <Link href='/auth/signup'>
                <a className=''>
                  <Button
                  className='ml-3 inline-block ease-in-out py-3 px-12 text-base transition duration-300 text-white rounded-md bg-call-to-action hover:bg-success font-semibold'
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
