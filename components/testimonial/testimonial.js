import Image  from  'next/image'  
import Icon from '../shared/icon';


export default function Testimonial() {
    return (
        <section className='testimonial p-5 py-20 w-full' id="testimonials">
            <div className='testimonial__content m-auto w-4/5 h-h-big relative'>
                <div className='testimonial__img absolute h-full w-3/12 '>
                    <div className='testimonial__img--border h-2/4 absolute -right-10 w-full z-10 bottom-1/3 border-2 rounded-2xl rounded-tl-none border-gray-900'></div>
                    <div className='testimonial__img--fit border-0 h-2/4 absolute top-1/4 w-full z-20 -right-16 rounded-2xl rounded-tr-none  rounded-bl-none bg-white border-gray-900 overflow-hidden'>
                        <img src='/assets/img/others/9e4e038a 1.png' alt='name' className='object-cover w-full h-full' />
                    </div>
                </div>
                <div className='testimonial__text absolute bg-call-to-action  h-full w-9/12 right-0 rounded-3xl '>
                    <div className='testimonial__text--content h-full  px-36  py-24'>
                        <div className='testimonial__text--contentImg items-center  bg-white inline-flex justify-center w-1/4  rounded-lg py-3 pt-4'>
                            <img src='/assets/img/others/Google-Logo.wine 5.png' alt='Google staff' className='object-contain w-3/4' />
                        </div>
                        <p className='text-xbase  py-4  text-white my-5 italic font-normal'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellente
                        </p>
                        <div className='py-2'>
                            <h5 className='text-white text-lg font-normal'>Adams Franklin</h5>
                            <h6 className='pb-5 text-white text-sm  capitalize font-bold'>Human resources manager</h6>
                            <div className=''>
                                <button className='bg-white rounded mr-2 px-1 inline-flex items-center justify-center'>
                                    <Icon name= {'arrow-left'}  alt='Previous' className=''   width={20} height={20} />
                                </button>
                                <button className='bg-white rounded px-1 inline-flex items-center justify-center'>
                                    <Icon name= {'arrow-right'}  alt='Next' className=''   width={20} height={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}