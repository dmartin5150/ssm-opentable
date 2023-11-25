import React from 'react';
import MainNav from '../components/MainNav/MainNav';
import RangeSelectors from '../components/dateRange/RangeSelector';
import CheckBoxCard from '../components/CheckBoxCard/CheckBoxCard';
import SurgeonDropDown from '../components/SurgeonDropDown/SurgeonDropDown';
import ProcedureDropDown from '../components/ProcedureDropDown/ProcedureDropDown';
import TemplateDropDown from '../components/TemplateDropDown/TemplateDropDown';
import FindRoom from '../components/FindRoom/FindRoom';
import './OpenTableHome.css';



const DAYSOFWEEK:string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
]

const SURGEONS:string[] = [
    'John Smith, MD',
    'Rob Parker, DO',
    'Jane Doe, MD',
    'Sue Austin, MD'
]

const FACILITIES:string[] = [
    'St. Thomas Midtown',
    'St. Thomas West',
    'Rutherford'
];

const UNITS:string[] = [
    'CSC',
    'JRI',
    'STM ST OR',
    'OB L & D'
];


const PROCEDURES:string[] = [
    'Total Knee Replacement',
    'Total Hip Replacement',
    'Other Procedures'
]

const TEMPLATES:string[] = [
    'Smith Total Knee Replacement',
    'Jonse Total Hip Replacement',
    'Other Procedures'
]
 
const OpenTableHome = () => {
    return(
        <div className='open-table'>
            <div className='open-table-main-nav'>
                <MainNav />
            </div>
            <div className='open-table-selections'>
                <div className='open-table-sections-surgeon'>
                    <SurgeonDropDown surgeons={SURGEONS} />
                </div>
                <div className='open-table-sections-findroom'>
                    <FindRoom  />
                </div>
                <div className='open-table-sections-facilities'>
                    <CheckBoxCard title='Select Facilities' items={FACILITIES} />
                </div>
                <div className='open-table-sections-units'>
                    <CheckBoxCard title='Select Units' items={UNITS} />
                </div>
                <div className='open-table-sections-dates'>
                    <RangeSelectors title='Select Date Range' />
                </div>
                <div className='open-table-sections-daysofweek'>
                    <CheckBoxCard title='Select Day Of Week' items={DAYSOFWEEK} />
                </div>
                <div className='open-table-sections-procedure'>
                    <ProcedureDropDown procedures={PROCEDURES} />
                </div>
                <div className='open-table-sections-templates'>
                    <TemplateDropDown templates={TEMPLATES} />
                </div>
            </div>
            <div className='open-table-main-body'>
                <div className='open-table-times'>Times</div>
                <div className='open-table-form'>Scheduling Form</div>
            </div>
        </div>
    )
}
export default OpenTableHome;