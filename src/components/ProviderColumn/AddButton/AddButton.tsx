import React from 'react';
import './AddButton.css'

const AddButton: React.FC = () => {
    return(
        <div className='add-button'>
            <div className='add-button-plus'>
                <img className='add-button-img' src='plus-sign.png' alt="+" />
            </div>
        </div>
    )
}

export default AddButton;