import Link from "next/link"; 
import Icon from "../shared/icon";


export default function About({about}) {
    return (
        <Link href='/'>
          <a className='about__info w-full block mb-5 sm:mb-1 relative rounded-lg  sm:w-11/12 transition-all sm:bg-white h-96 sm:p-2 hover:shadow-2xl'>
            <div className='about__info--content w-11/12 sm:11/12 md:w-10/12 mx-auto pt-5'>
              <div className='about__info--icon mb-1 bg-accent inline-flex items-center justify-center p-3 rounded-sm'>
                <Icon name={about.iconName} alt={about?.header} width={20} height={20} /> 
              </div>
              <h4 className='capitalize text-xl font-semibold py-3 sm:pt-1 sm:pb-3 md:pb-5 sm:text-xl md:text-2xl'>{about?.header}</h4>
              <p className='w-12/12 text-justify sm:text-sm  sm:text-left md:text-xbase  text-about-content pr-2'>{about?.content}</p>
            <div className='absolute bg-success w-10/12 h-1 bottom-12'></div>
            </div>
          </a>  
        </Link>
    );
}