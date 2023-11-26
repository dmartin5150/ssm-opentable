import React, {useEffect, useState} from "react";
import './EmptySchedulingForm.css';


interface EmptySchedulingFormProps {
    procedureId:number;
}


const EmptySchedulingForm: React.FC<EmptySchedulingFormProps> = ({procedureId}) => {

    const [message, setMessage] = useState('')
    const [showDirections, setShowDirections] = useState(false);
    const [showFullScreen, setShowFullScreen] = useState('showfullscreen')

    useEffect(()=> {
        if (procedureId === -1) {
            setMessage('Disabled SSM Procedure Scheduling Form');
            setShowDirections(false);
            setShowFullScreen('showfullscreen')
        } else {
            setMessage('Enabled and prepopulated SSM Procedure Scheduling Form');
            setShowDirections(true);
            setShowFullScreen('');
        } 

    })

    return(
        <div className='empty-scheduling-form'>
            {showDirections && <div className='empty-scheduling-form-directions'>
                <h2>Fill Out Form Below To Schedule Selected Procedure Time</h2>
            </div>}
            <div className={`emptyschedulingform-message ${showFullScreen}`}> 
                <h2>{message}</h2>
            </div>
        </div>
    )
}
export default EmptySchedulingForm