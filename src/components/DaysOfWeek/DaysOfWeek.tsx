import React from 'react';
import Card from '../card/card';
import DayOfWeek from './DayOfWeek';
import './DaysOfWeek.css';

interface DayOfWeekProps {
    title:string;
}


const DAYSOFWEEK:string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
]


const DaysOfWeek: React.FC<DayOfWeekProps> = ({title}) => {

    return (
        <Card>
        <div className='daysofweek'>
            <h2 className='daysofweek-title'>{title}</h2>
            <div className='daysofweek-container'>
            {
                DAYSOFWEEK.map((curDay, idx)=>{
                    return (
                        <div className='daysofweek-day' key={idx}>
                           <DayOfWeek curDay={curDay} />
                        </div>
                    )
                } )
            }
            </div>
        </div>
    </Card>
    )
}
export default DaysOfWeek