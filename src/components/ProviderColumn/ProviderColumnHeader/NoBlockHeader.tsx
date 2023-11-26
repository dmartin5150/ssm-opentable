import React from 'react';
import { Provider } from '../../../data/datatypes/provider';
import { Block } from '../../../data/datatypes/block';
import AddButton from '../AddButton/AddButton';
import './NoBlockHeader.css';


interface NoBlockHeaderProps  {
    provider:Provider;
    showHeaderButton:boolean;
    block: Block;
}



const NoBlockHeader: React.FC<NoBlockHeaderProps> = ({provider, block,showHeaderButton}) => {
    return(
        <div className='no-block-header'>
            <div className='no-block-header-data'>
                <p className='no-block-header-name'><b>{provider.providerName}</b></p>
                <p className='no-block-header-date'>Date Selected: No Date Selected</p>
            </div>
            {showHeaderButton && <div className='no-block-header-button'>
                <AddButton />
            </div>
}
        </div>
    );
}
export default NoBlockHeader