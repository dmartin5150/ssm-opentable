import React from 'react';
import Card from '../card/card';
import CheckBoxCardItem from './CheckBoxCardItem';
import './CheckBoxCard.css';

interface CheckBoxCardProps {
    title:string;
    items:string[]
}





const CheckBoxCard: React.FC<CheckBoxCardProps> = ({title,items}) => {

    return (
        <Card>
        <div className='checkboxcard'>
            <h2 className='checkboxcard-title'>{title}</h2>
            <div className='checkboxcard-container'>
            {
                items.map((curItem, idx)=>{
                    return (
                        <div className='checkboxcard-item' key={idx}>
                           <CheckBoxCardItem curItem={curItem} />
                        </div>
                    )
                } )
            }
            </div>
        </div>
    </Card>
    )
}
export default CheckBoxCard