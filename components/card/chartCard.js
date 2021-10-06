function ChartCard() {
    return (
        <div className='h-full py-3 bg-white rounded-lg shadow-2xl text-primary flex flex-col justify-between'>
            <h3 className='text-center font-semibold'>Number of Employees</h3>
            <div className='chart-area'></div>
            <div className='chart-info w-11/12 mx-auto justify-between flex flex-wrap'>
                <div className='chart-info__title w-6/12'>
                    <div className='flex justify-between items-center w-full'>
                        <div className='bg-accent w-3 rounded-full h-3'></div>
                        <h5 className='text-sm w-full pl-1'>Non Registered Employees</h5>
                    </div>
                    <h3 className='w-full text-center text-xl'>100/50%</h3>
                </div>
                <div className='chart-info__title w-6/12'>
                    <div className='flex justify-between items-center w-full'>
                        <div className='bg-call-to-action w-3 h-3 rounded-full ml-2'></div>
                        <h5 className='text-sm w-full pl-1'>Registered Employees</h5>
                    </div>
                    <h3 className='w-full text-center text-xl'>50/40%</h3>
                </div>
            </div>
        </div>
    );
}

export default ChartCard;