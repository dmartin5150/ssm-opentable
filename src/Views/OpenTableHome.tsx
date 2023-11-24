import React from 'react';
import MainNav from '../components/MainNav/MainNav';
import RangeSelectors from '../components/dateRange/RangeSelector';
import DaysOfWeek from '../components/DaysOfWeek/DaysOfWeek';
import './OpenTableHome.css';


const OpenTableHome = () => {
    return(
        <div className='open-table'>
            <div className='open-table-main-nav'>
                <MainNav />
            </div>
            <div className='open-table-selections'>
                <div className='open-table-sections-surgeon'>Surgeon Info</div>
                <div className='open-table-sections-calendar'>
                    <RangeSelectors title='Select Date Range' />
                    <DaysOfWeek title='Select Day Of Week' />
                </div>
                <div className='open-table-sections-procedure'>Procedure Info</div>
            </div>
            <div className='open-table-main-body'>
                <div className='open-table-times'>Times</div>
                <div className='open-table-form'>Scheduling Form</div>
            </div>
        </div>
    )
}
export default OpenTableHome;