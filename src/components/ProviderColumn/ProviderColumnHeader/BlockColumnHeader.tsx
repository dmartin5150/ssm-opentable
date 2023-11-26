import React from 'react';
import { Provider } from '../../../data/datatypes/provider';
import { Block } from '../../../data/datatypes/block';
import AddButton from '../AddButton/AddButton';
import './BlockColumnHeader.css';


interface BlockColumnHeaderProps  {
    provider:Provider;
    showHeaderButton:boolean;
    block: Block;
}



const BlockColumnHeader: React.FC<BlockColumnHeaderProps> = ({provider, block, showHeaderButton}) => {
    return(
        <div className='provider-column-header'>
            <div className='provider-column-header-data'>
                <p className='provider-column-header-name'><b>{provider.providerName}</b></p>
                <p className='provider-column-header-name'><b>Date Selected:  11/25/23</b></p>
                <p className='provider-column-header-time'>Block Time: {block.timeString}</p>
                <p className='provider-column-header-available'><b>{block.availableTime}</b> approx. available</p>
            </div>
            {showHeaderButton && <div className='provider-column-header-button'>
                <AddButton />
            </div>
}
        </div>
    );
}
export default BlockColumnHeader