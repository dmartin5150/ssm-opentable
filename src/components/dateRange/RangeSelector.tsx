import React, {useState} from 'react';
import './RangeSelector.css';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"
import Card from '../card/card';



interface DateRangeProps {
    title: string;
    startDate?: Date;
    stopDate?:Date;

}


const RangeSelectors: React.FC<DateRangeProps> = ({title, startDate=new Date(), stopDate = new Date()}) => {

    const [rangeStart, setRangeStart] = useState<Date>(startDate);
    const [rangeEnd, setRangeEnd] = useState<Date>(new Date(stopDate));


    const handleSelect1 = (date:Date) => {
        setRangeStart(date);
    }

    const handleSelect2 = (date:Date) => {
        setRangeEnd(date);
    }

    return (
        <Card>
            <div className='range-selectors'>
                <h2 className='range-selectors-title'>{title}</h2>
                <div className='range-selector'>
                    <label className='range-selector-label'>Start Date</label>
                    <DatePicker
                    className='range-selector-datepicker'
                    selected={rangeStart} 
                    onChange={handleSelect1} 
                />
                </div>
                <div className='range-selector'>
                    <label className='range-selector-label'>End Date</label>
                    <DatePicker
                    className='range-selector-datepicker'
                    selected={rangeEnd} 
                    onChange={handleSelect2} 
                />
                </div>
            </div>
        </Card>
    )

}
export default RangeSelectors;