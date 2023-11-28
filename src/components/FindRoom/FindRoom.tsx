import React from 'react';
import Card from '../card/card';
import './FindRoom.css';

interface FindRoomProps {
    onClick: ()=>void;
}

const FindRoom: React.FC<FindRoomProps> = ({onClick}) => {
    return (

            <div className='find-room'>
                <button className='find-room-button' onClick={onClick}>Find Open Times</button>
            </div>

    )
}
export default FindRoom;