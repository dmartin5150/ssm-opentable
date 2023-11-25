import React from 'react';
import { Procedure } from '../../data/datatypes/procedure';
import './FoundTimeCard.css';



interface FoundTimeCardProps {
    procedure:Procedure;
}


const FoundTimeCard: React.FC<FoundTimeCardProps> = ({procedure}) => {



    const firstLine = () => {
        return (
        procedure.inBlock ? 
        <div className='foundtime-card-data-firstline'>
            <p className='foundtime-card-inBlock'><b>OPEN BLOCK TIME</b></p>
            <p className='foundtime-card-provider'><b>{procedure.providerName}</b></p> 
        </div>
            :
        <div className='foundtime-card-data-firstline'>
            <p className='foundtime-card-provider'><b>{procedure.providerName}</b></p> 
        </div>)
    }


    return(
        <div className={`foundtime-card unscheduled`}>
            <div className='foundtime-card-data'>
                <div className='foundtime-card-data-heading'>
                    {firstLine()}
                    <div className='foundtime-card-data-heading-rightside'>
                        <div className='foundtime-card-data-container'>
                            <img className='foundtime-card-data-image' src='delete.png' alt='delete' />
                        </div>
                    </div>
                </div>
                <p className='foundtime-card-timeString'>{procedure.timeString}</p> 
                <p className='foundtime-card-patientName'>{procedure.patientName}</p> 
                <p className='foundtime-card-procedureName'>{procedure.procedureName}</p> 
                {procedure.room && <p className='foundtime-card-room'>{procedure.room}</p>}
                <div className='foundtime-card-FIN-block' >
                    {procedure.FIN && <p className='foundtime-card-FIN'>FIN: {procedure.FIN}</p>} 
                    {procedure.FIN && <div className='foundtime-card-copy-container'>
                        <img className='foundtime-card-copy-image'src='copy.png' alt='copy /.' />
                    </div>}
                </div> 

            </div>
        </div>
    )
}
export default FoundTimeCard;


