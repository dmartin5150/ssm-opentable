import React, {useEffect} from 'react';


interface DayOfWeekProps {
    curDay:string;
}



const DayOfWeek: React.FC<DayOfWeekProps> = ({curDay}) => {
    const [checked, setChecked] = React.useState(false);
    
    const handleChange = () => {
      setChecked(!checked);
    };



    return (
        <label className='daysofweek-day-label'>
        <input className='daysofweek-day-input' type="checkbox" checked={checked} onChange={handleChange} />
        {curDay} </label>
    )
}
export default DayOfWeek;