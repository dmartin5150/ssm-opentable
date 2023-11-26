import React from 'react';
import { Provider } from '../../../data/datatypes/provider';
import { Block } from '../../../data/datatypes/block';
import AddButton from '../AddButton/AddButton';
import './FoundTimeHeader.css';


interface FoundTimeHeaderProps  {
    provider:Provider;
    showHeaderButton:boolean;
    block: Block;
}



const FoundTimeHeader: React.FC<FoundTimeHeaderProps> = ({provider, block,showHeaderButton}) => {
    return(
        <div className='foundtime-header'>
            <div className='foundtime-header-data'>
                <p className='foundtime-header-title'><b>Available Open Times:</b></p>
                <p className='foundtime-header-range'>Date Range Selected:  11/25/23-11/29/23</p>
            </div>
        </div>
    );
}
export default FoundTimeHeader