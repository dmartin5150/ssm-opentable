import React, {useEffect, useState} from "react";
import './EmptySchedulingForm.css';


interface EmptySchedulingFormProps {
    procedureId:number;
}


const EmptySchedulingForm: React.FC<EmptySchedulingFormProps> = ({procedureId}) => {

    const [message, setMessage] = useState('')

    useEffect(()=> {
        if (procedureId === -1) {
            setMessage('Empty SSM Procedure Scheduling Form');
        } else {
            setMessage('Prepopulated SSM Procedure Scheduling Form');
        } 

    })

    return(
        <div className='emptyschedulingform'> 
            <h2>{message}</h2>
        </div>
    )
}
export default EmptySchedulingForm