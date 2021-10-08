import Link from 'next/link'
import ProfileCard from '../../components/card/profile/profileCard';
import ProfileListTrainingCard from '../../components/card/profile/profileListTrainingCard';
import ProfileTotalTrainingCard from '../../components/card/profile/profileTotalTrainingCard';

import DashboardLayout from "../../components/layouts/dashboardLayout";
import Button from "../../components/shared/forms/button";

const Profile = () => {
    return (
        <>
        <DashboardLayout>
            <div className='w-full flex justify-between items-center'>
                <Link href='employees'>
                    <a className='inline-flex items-center'>
                        <i className='las la-arrow-left text-xl'></i>
                        <span className='pl-2 text-xbase text-primary'>Back to Employee List</span>
                    </a>
                </Link>
                <div>
                    <Button className='py-2 px-8 rounded-sm bg-transparent border-error border text-error font-semibold uppercase text-sm' label='delete employee' />
                    <Button className='py-2 px-8 rounded-sm bg-call-to-action border-call-to-action border text-white font-semibold uppercase text-sm ml-5' label='edit employee profile' />
                </div>
            </div>
            <main className='py-5 space-y-10'>
                <div className='flex justify-between h-64'>
                    <div className='bg-white w-8/12 h-full rounded-xl'>
                        <ProfileCard/>
                    </div>
                    <div className='bg-white w-3/12 rounded-xl'>
                        <ProfileTotalTrainingCard/>
                    </div>
                </div>
                <div className='p-5'>
                    <div>
                        <Button className='text-table-header text-sm font-medium capitalize py-0 mr-5 transition-all hover:text-gray-500 border-b-2 border-transparent active:text-call-to-action active:border-call-to-action focus:text-call-to-action focus:border-call-to-action'  label='ongoing  trainings' />
                        <Button className='text-table-header text-sm font-medium capitalize py-0 mr-5 transition-all hover:text-gray-500 border-b-2 border-transparent active:text-call-to-action active:border-call-to-action focus:text-call-to-action focus:border-call-to-action'  label='completed  trainings' />
                        <Button className='text-table-header text-sm font-medium capitalize py-0 mr-5 transition-all hover:text-gray-500 border-b-2 border-transparent active:text-call-to-action active:border-call-to-action focus:text-call-to-action focus:border-call-to-action'  label='all  trainings' />
                    </div>
                    <div className='mt-5 space-y-5'>
                        <ProfileListTrainingCard/>
                        <ProfileListTrainingCard/>
                        <ProfileListTrainingCard/>
                        <ProfileListTrainingCard/>
                    </div>
                </div>
            </main>
        </DashboardLayout>
        </>
    );
}

export default Profile;