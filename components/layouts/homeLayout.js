import Head from 'next/head'
import Footer from '../footer/footer';
import NavbarHome from '../navbar/navbarHome';
import HeadLayout from './headLayout';

export default function HomeLayout({children}) {
    
    return (
        <div>      
            <HeadLayout title=' | My Learning' />
            <NavbarHome/>
            {children}
            <Footer/>
        </div>
    );
}