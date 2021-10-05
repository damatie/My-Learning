function ChartCard() {
    return (
        <div>
            <h3>Number of Employees</h3>
            <div className='chart-area'></div>
            <div className='chart-info'>
                <div className='chart-info__title'>
                    <div className=''>
                        <div className=''></div>
                        <h5>Non Registered Employees</h5>
                    </div>
                    <h3>100/50%</h3>
                </div>
                <div className='chart-info__title'>
                    <div className=''>
                        <div className=''></div>
                        <h5>Registered Employees</h5>
                    </div>
                    <h3>50/40%</h3>
                </div>
            </div>
        </div>
    );
}

export default ChartCard;