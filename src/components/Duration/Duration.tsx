import React, {useState} from "react";
import Card from "../card/card";
import './Duration.css'



const Duration: React.FC = () => {
    const [duration, setDuration] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDuration(e.target.value)
    }
    

    return (
        <Card>
            <div className='duration'>
                <h2 className='duration-label'>Duration (Minutes)</h2>
                <div className='duration-input-contatiner'>
                    <input className='duration-input' type="number"  onChange={handleChange} />
                </div>
            </div>
        </Card>
    )
}
export default Duration