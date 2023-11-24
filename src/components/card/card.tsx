import React from "react";
import "./card.css"

interface CardProps {
        children:React.ReactNode;
}


const Card: React.FC<CardProps>= ({children}) => {
    return (
        <div className ='card'>
            <div className='card-title-container'>
            </div>           
            {children}
        </div>
    )
}
export default Card;