import React, {useEffect, useState} from 'react';
import { Procedure } from '../../data/datatypes/procedure';
import './FoundTimeCard.css';
import { SCHEDULING_STATUS } from '../../data/datatypes/schedulingStatus';



interface FoundTimeCardProps {
    procedure:Procedure;
    selectedId:number;
    showDelete:boolean;
    onSelectedTimeChanged:(id:number)=>void;
}



const FoundTimeCard: React.FC<FoundTimeCardProps> = ({selectedId, procedure,onSelectedTimeChanged, showDelete}) => {

    const [background, setBackGround] = useState('')
    const [checked, setChecked] = React.useState(false);
    
    const handleChange = () => {
      setChecked(!checked);
      if (checked) {
        onSelectedTimeChanged(-1)
        return
      }
      onSelectedTimeChanged(procedure.procedureId)
    };

    useEffect(()=> {
        if (selectedId === procedure.procedureId) {
            setChecked(true);
        } else {
            setChecked(false);
        }
    })

    useEffect(() => {
        if (procedure.scheduleStatus === SCHEDULING_STATUS.SCHEDULED) {
            setBackGround('scheduled');
        } else if (procedure.scheduleStatus === SCHEDULING_STATUS.UNSCHEDULED) {
            setBackGround('unscheduled');
        } else if (procedure.scheduleStatus === SCHEDULING_STATUS.NEEDS_REVISION) {
            setBackGround('revision');
        } else {
            setBackGround('other');
        }
    },[procedure]);


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
        <div className={`foundtime-card ${background}`}>
            <div className='foundtime-card-checkbox-container'>
                <input className='foundtime-card-checkbox-input' type="checkbox" checked={checked} onChange={handleChange} />
            </div>
            <div className='foundtime-card-data'>
                <div className='foundtime-card-data-heading'>
                    {firstLine()}
                    {showDelete && <div className='foundtime-card-data-heading-rightside'>
                        <div className='foundtime-card-data-container'>
                            <img className='foundtime-card-data-image' src='delete.png' alt='delete' />
                        </div>
                    </div>}
                </div>
                <p className='foundtime-card-dateString'>{procedure.dateString}</p> 
                <p className='foundtime-card-timeString'>{procedure.timeString}</p> 
                <p className='foundtime-card-procedureName'>{procedure.procedureName}</p> 
                <p className='foundtime-card-procedureInfo'>Facility: {procedure.facility}</p> 
                <p className='foundtime-card-procedureInfo'>Unit: {procedure.unit}</p> 
                <p className='foundtime-card-procedureInfo'>Room: {procedure.room}</p> 
                <p className='foundtime-card-procedureInfo'>Estimated Procedure Time: {procedure.duration}</p> 
            </div>
        </div>
    )
}
export default FoundTimeCard;

// procedureId:number;
// procedureType:PROCEDURE_TYPES,
// providerId:number, 
// providerName: string;
// dateString:string;
// timeString:string;
// patientName:string;
// procedureName:string;
// facility:string;
// unit: string;
// room:string;
// inBlock:boolean;
// scheduleStatus:SCHEDULING_STATUS;
// duration:string;



