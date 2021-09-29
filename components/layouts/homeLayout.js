import Head from 'next/head'
import Footer from '../footer/footer';
import NavbarHome from '../navbar/navbarHome';

export default function HomeLayout({children}) {
    return (
        <div>      
            {/* <Head>
                <title>my Learning App | Home</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet"></link>
            </Head> */}
            <NavbarHome/>
            {children}
            <Footer/>
        </div>
    );
}