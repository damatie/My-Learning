import Image  from  'next/image'  
import Icon from '../shared/icon';


export default function Testimonial() {
    return (
        <>
            <section className='hidden    testimonial mb-0 mt-56 md:mt-20 sm:my-24 sm:mb-28 w-full xl:block md:mb-16' id="testimonials">
                <section className='testimonial my-16 w-11/12 mx-auto md:w-full border-t-sm  '>
                    <div className='testimonial__content block sm:flex  flex-col w-full  mx-auto sm:w-4/5 h-96 relative  md:w-10/12'>
                        <div className='    xl:block hidden   testimonial__img absolute h-full w-3/12'>
                            <div className='testimonial__img--border h-3/5 absolute -right-10 w-full z-10 bottom-1/4 border-2 rounded-2xl rounded-tl-none border-gray-900 md:-right-3'></div>
                            <div className='testimonial__img--fit border-0 h-3/5 absolute top-1/4 w-full z-20 -right-16 rounded-2xl rounded-tr-none  rounded-bl-none bg-white border-gray-900 overflow-hidden md:-right-7'>
                                <img src='/assets/img/others/9e4e038a 1.png' alt='name' className='object-cover w-full h-full' />
                            </div>
                        </div>
                        <div className='testimonial__text   absolute   mb-96 bg-call-to-action  h-auto sm:h-full xl:w-9/12  w-full right-0 rounded-3xl '>
                            <div className='testimonial__text--content h-full px-8 text-center pt-4 pb-8 sm:px-36 md:px-10  sm:py-10 '>
                                <div className='testimonial__text--contentImg items-center  bg-white inline-flex justify-center w-1/4  rounded-lg py-3 pt-4'>
                                    <img src='/assets/img/others/Google-Logo.wine 5.png' alt='Google staff' className='object-contain w-3/4' />
                                </div>
                                <p className='text-xbase pt-2 sm:py-3 text-white sm:my-3 italic font-normal'>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellente
                                </p>
                                <div className='py-1'>
                                    <h5 className='text-white text-lg font-normal'>Adams Franklin</h5>
                                    <h6 className='pb-5 text-white text-sm  capitalize font-bold'>Human resources manager</h6>
                                    <div className=''>
                                        <button className='bg-white rounded mr-2 px-1 inline-flex items-center justify-center'>
                                            <Icon name= {'arrow-left'}  alt='Previous' className=''   width={30} height={30} />
                                        </button>
                                        <button className='bg-white rounded px-1 inline-flex items-center justify-center'>
                                            <Icon name= {'arrow-right'}  alt='Next' className=''   width={30} height={30} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            
            <section className='block lg:hidden  mt-60 md:mt-24 pt-7 px-2 py-5 mb-16 bg-call-to-action w-11/12 mx-auto rounded-3xl' id='smtestimonials'>
                <div className='block h-20 w-20 bg-gray-200 border-50 rounded-full mx-auto mb-5 border-white border-2 overflow-hidden '>
                    <img src='/assets/img/others/9e4e038a 1.png' alt='name' className='object-cover w-full h-full' />
                </div>
                <div className='flex flex-col items-center text-center '>
                    <div className='items-center  bg-white inline-flex justify-center w-1/4 rounded-lg py-2 pt-3'>
                        <img src='/assets/img/others/Google-Logo.wine 5.png' alt='Google staff' className='object-contain w-3/4' />
                    </div>
                    <p className='text-xbase py-5 px-2 sm:py-3 text-white sm:my-3 italic font-normal'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellente
                    </p>
                    <div className='py-1'>
                        <h5 className='text-white text-lg font-normal'>Adams Franklin</h5>
                        <h6 className='pb-5 text-white text-sm  capitalize font-bold'>Human resources manager</h6>
                        <div className=''>
                            <button className='bg-white rounded mr-2 px-1 inline-flex items-center justify-center'>
                                <Icon name= {'arrow-left'}  alt='Previous' className=''   width={30} height={30} />
                            </button>
                            <button className='bg-white rounded px-1 inline-flex items-center justify-center'>
                                <Icon name= {'arrow-right'}  alt='Next' className=''   width={30} height={30} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}