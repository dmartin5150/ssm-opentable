import React, {useState, useEffect}  from "react";
import BlockColumnHeader from "./ProviderColumnHeader/BlockColumnHeader";
import BlockReleaseHeader from "./ProviderColumnHeader/BlockReleaseHeader";
import NoBlockHeader from "./ProviderColumnHeader/NoBlockHeader";
import ProcedureContainer from "./ProcedureContainer/ProcedureContainer";
import FoundTimeHeader from "./ProviderColumnHeader/FoundTimeHeader";
import { Provider } from "../../data/datatypes/provider";
import { Block } from "../../data/datatypes/block";
import { Procedure } from "../../data/datatypes/procedure";

import ProcedureCard from "../ProcedureCard/ProcedureCard";


import './ProviderColumn.css';

interface ProviderColumnProps {
    provider:Provider
    block:Block;
    procedures:Procedure[];
    selectedId:number;
    showHeaderButton:boolean;
    showFoundTimeHeader:boolean;
    showDelete:boolean;
    onSelectedTimeChanged:(id:number) => void;
}

enum HeaderTypes {
    BLOCK='block',
    RELEASED='released',
    FOUND='found',
    NONE='none'
}


const ProviderColumn: React.FC<ProviderColumnProps> = ({provider,block, showHeaderButton,showDelete,showFoundTimeHeader, selectedId, procedures, onSelectedTimeChanged}) => {

    const [headerType, setHeaderType] = useState<HeaderTypes>(HeaderTypes.NONE)


    useEffect(()=> {
        if (showFoundTimeHeader) {
            setHeaderType(HeaderTypes.FOUND);
            return;
        }
        if (provider.hasBlock) {
            if (block.released) {
                setHeaderType(HeaderTypes.RELEASED)
            } else {
                setHeaderType(HeaderTypes.BLOCK)
            }
            return;
        }
        setHeaderType(HeaderTypes.NONE)
    }, [provider])



    return (
        <div className='provider-column'>
            {headerType === HeaderTypes.FOUND && <FoundTimeHeader provider={provider} block={block} showHeaderButton={showHeaderButton} />
            }
            {headerType === HeaderTypes.BLOCK &&
                    <BlockColumnHeader provider={provider} block={block} showHeaderButton={showHeaderButton} /> }
            {headerType === HeaderTypes.RELEASED &&        <BlockReleaseHeader provider={provider} block={block} showHeaderButton={showHeaderButton}/>}
            {headerType === HeaderTypes.NONE && 
                    <NoBlockHeader provider={provider} block={block} showHeaderButton={showHeaderButton} />
             }
            {!provider}
            {procedures.map((procedure) => {
                    return <ProcedureContainer 
                        key={procedure.procedureId} 
                        procedure={procedure} block={block} 
                        selectedId={selectedId}
                        showDelete={showDelete}
                        onSelectedTimeChanged={onSelectedTimeChanged} />
            })}  
        </div>
    )
}
export default ProviderColumn;