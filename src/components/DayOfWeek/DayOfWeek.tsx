import React from 'react';
import Card from '../card/card';

interface DayOfWeekProps {
    title:string;
}

const DayOfWeek: React.FC<DayOfWeekProps> = ({title}) => {
    return (
        <Card>
        <div className='range-selectors'>
            <h2 className='range-selectors-title'>{title}</h2>
            <div className='range-selector'>
                <label className='range-selector-label'>Start Date</label>
            </div>
        </div>
    </Card>
    )
}
export default DayOfWeek