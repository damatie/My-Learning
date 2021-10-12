// import {useState}  from 'react'
// import ASideNav from '../navBar/ASideNav';

// import HeadLayout from "./headLayout";

// function AppLayout({children}) {

    
//     const [reduceAppSideNav, setReduceAppSideNav] = useState(false)



//     return (
//         <>
//             <HeadLayout title='Dashboard' />
//             <section className='bg-accent flex h-screen'>
//                 <aside className={`${reduceAppSideNav ? 'bg-call-to-action md:w-3/12' :  'bg-call-to-action md:w-1/12'  }`}>
//                     <ASideNav reduceAppSideNav={reduceAppSideNav} setReduceAppSideNav={setReduceAppSideNav} />
//                 </aside>
//                 <main className='md:w-9/12'>
//                     {children}
//                 </main>
//             </section>
//         </>
//     );
// }

// export default AppLayout;
