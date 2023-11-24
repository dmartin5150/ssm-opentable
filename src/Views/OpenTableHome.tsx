import React from 'react';
import MainNav from '../components/MainNav/MainNav';
import RangeSelectors from '../components/dateRange/RangeSelector';
import CheckBoxCard from '../components/CheckBoxCard/CheckBoxCard';
import './OpenTableHome.css';



const DAYSOFWEEK:string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
]

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
                    <CheckBoxCard title='Select Day Of Week' items={DAYSOFWEEK} />
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