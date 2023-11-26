import React from 'react';
import { Provider } from '../../../data/datatypes/provider';
import { Block } from '../../../data/datatypes/block';
import AddButton from '../AddButton/AddButton';
import './BlockReleaseHeader.css';


interface BlockReleaseHeaderProps  {
    provider:Provider;
    showHeaderButton:boolean;
    block: Block;
}



const BlockReleaseHeader: React.FC<BlockReleaseHeaderProps> = ({provider, block,showHeaderButton}) => {
    return(
        <div className='block-release-header'>
            <div className='block-release-header-data'>
                <p className='block-release-header-name'><b>{provider.providerName}</b></p>
                <p className='block-release-header-name'><b>Date Selected:  11/25/23</b></p>
                <p className='block-release-header-time'>Block Time: {block.timeString}</p>
                <div className='block-release-header-released'>
                    <div className='block-release-header-image-container'>
                        <img className='block-release-header-image' src='released.png' alt='released' />
                    </div>
                    <b className='block-release-message'>Block Released</b>
                </div>
            </div>
            {showHeaderButton && <div className='block-release-header-button'>
                <AddButton />
            </div>
            }
        </div>
    );
}
export default BlockReleaseHeader