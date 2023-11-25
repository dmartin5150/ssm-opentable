import React from 'react';
import { Provider } from '../../../data/datatypes/provider';
import { Block } from '../../../data/datatypes/block';
import AddButton from '../AddButton/AddButton';
import './NoBlockHeader.css';


interface NoBlockHeaderProps  {
    provider:Provider,
    block: Block
}



const NoBlockHeader: React.FC<NoBlockHeaderProps> = ({provider, block}) => {
    return(
        <div className='no-block-header'>
            <div className='no-block-header-data'>
                <p className='no-block-header-name'><b>{provider.providerName}</b></p>
                <p className='block-release-header-time'>Dates Searched:  11/25/24-11/29/24</p>
            </div>
            {/* <div className='no-block-header-button'>
                <AddButton />
            </div> */}
        </div>
    );
}
export default NoBlockHeader