import React, {useEffect, useState} from 'react';
import { Procedure } from '../../data/datatypes/procedure';
import classnames from "classnames";
import './ProcedureCard.css';
import { SCHEDULING_STATUS } from '../../data/datatypes/schedulingStatus';
import { on } from 'process';


interface ProcedureCardProps {
    procedure:Procedure;
    selectedId:number;
    onSelectedTimeChanged:(id:number)=>void;
}



const ProcedureCard: React.FC<ProcedureCardProps> = ({selectedId, procedure,onSelectedTimeChanged}) => {

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
        <div className='procedure-card-data-firstline'>
            <p className='procedure-card-inBlock'><b>OPEN BLOCK TIME</b></p>
            <p className='procedure-card-provider'><b>{procedure.providerName}</b></p> 
        </div>
            :
        <div className='procedure-card-data-firstline'>
            <p className='procedure-card-provider'><b>{procedure.providerName}</b></p> 
        </div>)
    }


    return(
        <div className={`procedure-card ${background}`}>
            <div className='procedure-card-checkbox-container'>
                <input className='procedure-card-checkbox-input' type="checkbox" checked={checked} onChange={handleChange} />
            </div>
            <div className='procedure-card-data'>
                <div className='procedure-card-data-heading'>
                    {firstLine()}
                    <div className='procedure-card-data-heading-rightside'>
                        {/* <div className='procedure-card-data-container'>
                            <img className='procedure-card-data-image' src='edit.png' alt='edit' />
                        </div> */}
                        <div className='procedure-card-data-container'>
                            <img className='procedure-card-data-image' src='delete.png' alt='delete' />
                        </div>
                    </div>
                </div>
                <p className='procedure-card-dateString'>{procedure.dateString}</p> 
                <p className='procedure-card-timeString'>{procedure.timeString}</p> 
                {/* <p className='procedure-card-patientName'>{procedure.patientName}</p>  */}
                <p className='procedure-card-procedureName'>{procedure.procedureName}</p> 
                {/* {procedure.room && <p className='procedure-card-room'>{procedure.room}</p>} */}
                {/* <div className='procedure-card-FIN-block' >
                    {procedure.FIN && <p className='procedure-card-FIN'>FIN: {procedure.FIN}</p>} 
                    {procedure.FIN && <div className='procedure-card-copy-container'>
                        <img className='procedure-card-copy-image'src='copy.png' alt='copy /.' />
                    </div>}
                </div>  */}

            </div>
        </div>
    )
}
export default ProcedureCard;


