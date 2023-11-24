import React, {useState} from 'react';
import './CheckBoxCardItem.css'


interface CheckBoxCardItemsProps {
    curItem:string;
}



const CheckBoxCardItem: React.FC<CheckBoxCardItemsProps> = ({curItem}) => {
    const [checked, setChecked] = React.useState(false);
    
    const handleChange = () => {
      setChecked(!checked);
    };



    return (
        <label className='checkboxcard-items-label'>
        <input className='checkboxcard-items-input' type="checkbox" checked={checked} onChange={handleChange} />
        {curItem} </label>
    )
}
export default CheckBoxCardItem;