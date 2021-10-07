const ProfileListTrainingCard = () => {
    return (
        <div className='bg-accent rounded-2xl p-5 pl-3 text-primary justify-between flex items-start'>
            <div className='w-3/12'>
                <div className='w-10/12 mx-auto rounded-2xl h-48 bg-img-placeholder'></div>
            </div>
            <div className='w-6/12'>
                <h4 className='text-xbase font-semibold'>Microsoft Azure</h4>
                <h5 className='text-xbase text-text-low'>Description</h5>
                <p className='text-xbase'>Lorem ipsum dolor sit amet, sit in repudiare efficiendi, ea usu zril vivendo dissentiunt. Utamur veritus ea sit. In eam iuvaret antiopam principes, alii officiis elaboraret ei mei. Ne sit odio movet platonem, te eos deserunt adolescens. Percipit luptatum nominati no nam, scripserit liberavisse his ut, ad vel populo accusamus</p>
            </div>
            <div className='w-3/12 divide-x-2'>
                <div className='flex justify-end'>
                    <i className='las la-trash-alt text-3xl font-semibold'></i>
                </div>
                <div className='pl-2 py-2'>
                    <h5 className='text-xbase text-text-low'>Duration</h5>
                    <h4 className='text-sm font-semibold'>4 Days</h4>
                </div>
                <div className='pl-2 py-2'>
                    <h5 className='text-xbase text-text-low'>Start date</h5>
                    <h4 className='text-sm font-semibold'>18th October, 2021</h4>
                </div>
                <div className='pl-2 py-2'>
                    <h5 className='text-xbase text-text-low'>End date</h5>
                    <h4 className='text-sm font-semibold'>30th October, 2021</h4>
                </div>
                </div>
        </div>
    );
}

export default ProfileListTrainingCard;