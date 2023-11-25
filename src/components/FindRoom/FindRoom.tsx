import React from 'react';
import Card from '../card/card';
import './FindRoom.css';

const FindRoom: React.FC = () => {
    return (
        <Card>
            <div className='find-room'>
                <h2 className='find-room-title'>Find Room</h2>
                <div className='find-room-button'>
                    <button>Find Room</button>
                </div>
            </div>
        </Card>
    )
}
export default FindRoom;