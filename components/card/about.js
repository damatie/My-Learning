import Link from "next/link"; 
import Icon from "../shared/icon";


export default function About({about}) {
    return (
        <Link href='/'>
          <a className='about__info relative rounded-lg w-11/12 transition-all bg-white h-96 p-2 hover:shadow-2xl'>
            <div className='about__info--content w-10/12 mx-auto pt-5'>
              <div className='about__info--icon mb-1 bg-accent inline-flex items-center justify-center p-3 rounded-sm'>
                <Icon name={about.iconName} alt={about?.header} width={20} height={20} /> 
              </div>
              <h4 className='capitalize text-xl font-semibold pt-1 pb-5'>{about?.header}</h4>
              <p className='w-12/12 text-left text-xbase text-about-content pr-2'>{about?.content}</p>
            <div className='absolute bg-success w-10/12 h-1 bottom-12'></div>
            </div>
          </a>  
        </Link>
    );
}