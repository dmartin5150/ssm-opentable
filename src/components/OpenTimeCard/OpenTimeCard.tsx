import React, { useState} from 'react';
import { Procedure } from '../../data/datatypes/procedure';
import classnames from "classnames";
import './OpenTimeCard.css';
import { SCHEDULING_STATUS } from '../../data/datatypes/schedulingStatus';


interface OpenTimeCardProps {
    procedure:Procedure;
}



const OpenTimeCard: React.FC<OpenTimeCardProps> = ({procedure}) => {

    const firstLine = () => {
        return (
        procedure.inBlock ? 
        <div className='opentime-card-data-firstline'>
            <p className='opentime-card-inBlock'><b>OPEN BLOCK TIME</b></p>
        </div>
            :
        <div className='opentime-card-data-firstline'>
            <p className='opentime-card-provider'><b>OPEN TIME</b></p> 
        </div>)
    }


    return(
        <div className={`opentime-card `}>
            <div className='opentime-card-data'>
                <div className='opentime-card-data-heading'>
                    {firstLine()}
                    <div className='opentime-card-data-heading-rightside'>
                        <div className='opentime-card-data-container'>
                            <img className='opentime-card-data-image' src='calendar.png' alt='calendar' />
                        </div>
                    </div>
                </div>
                <p className='opentime-card-timeString'>{procedure.timeString}</p> 
                {procedure.duration && <p className='opentime-card-duration'><b>{procedure.duration}</b> approx. available</p> } 
            </div>
        </div>
    )
}
export default OpenTimeCard;


