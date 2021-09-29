import Link from "next/link"; 
import Image from "next/image";
import Icon from "../shared/icon";


export default function Footer() {
    return (
        <footer className="footer p-10 pb-24 bg-call-to-action flex flex-wrap  w-full items-start justify-between text-white ">
            <div className='footer__logo'>
                <Icon name='logo-footer' width={200} height={200} />
            </div>
            <div className='flex  flex-wrap pt-14'>
                <ul className='footer__links mr-5'>
                    <li>
                        <Link href='' className=''>
                            <a className='px-7 py-2 rounded-sm text-white  text-sm  mb-2  inline-block text-left'>Company</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='' className=''>
                            <a className='px-7 py-2 rounded-sm text-white  text-sm  mb-2  inline-block text-left'>About</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='' className=''>
                            <a className='px-7 py-2 rounded-sm text-white  text-sm  mb-2  inline-block text-left'>FAQ</a>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link href='' className=''>
                            <a className='px-7 py-2 rounded-sm text-white  text-sm  mb-2  inline-block text-left'>Legal</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='' className=''>
                            <a className='px-7 py-2 rounded-sm text-white  text-sm  mb-2  inline-block text-left'>Privacy</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='' className=''>
                            <a className='px-7 py-2 rounded-sm text-white  text-sm  mb-2  inline-block text-left'>Terms and condition</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='footer__address pt-14'>
                <ul className='footer__address--social  flex justify-end mb-4 flex-wrap '>
                    <li>
                        <a href='' target='_blank' className='ml-2 inline-block '>
                            <Icon name='instagram' alt='instagram handle' width={23} height={23}  />
                        </a>
                    </li>
                    <li>
                        <a href='' target='_blank' className='ml-5 inline-block '>
                            <Icon name='twitter' alt='twitter handle' width={23} height={23}  />
                        </a>
                    </li>
                    <li>
                        <a href='' target='_blank' className='ml-5 inline-block '>
                            <Icon name='facebook' alt='facebook handle' width={23} height={23}  />
                        </a>
                    </li>
                </ul>
                <div className='my-4 w-full flex justify-end  flex-wrap'>
                    <p className='w-7/12 text-right'>
                        20a, Batunde  Anjous Avenue, off Admirality way, Lekki Phase 1 Lagos
                    </p>
                </div>
                <div className='my-4 w-full flex justify-end  flex-wrap'>
                    <a href='+tel:+234 908 7516 846' className='inline-block'>+234 908 7516 846</a>
                </div>
                <div className='my-4 w-full flex justify-end  flex-wrap'>
                    <a href='mailto:Mylearning@gmail.com' className='inline-block'>Mylearning@gmail.com</a>
                </div>
            </div>
        </footer>
    );
}