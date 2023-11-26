import React, {useState, useEffect} from 'react';
import { Procedure } from '../../../data/datatypes/procedure';
import { Block } from '../../../data/datatypes/block';
import ProcedureCard from '../../ProcedureCard/ProcedureCard';
import OpenTimeCard from '../../OpenTimeCard/OpenTimeCard';
import { PROCEDURE_TYPES } from '../../../data/datatypes/procedure';
import './ProcedureContainer.css';
import FoundTimeCard from '../../FoundTimeCard/FoundTimeCard';


interface ProcedureContainerProps {
    procedure:Procedure;
    block:Block;
    selectedId:number;
    showDelete:boolean;
    onSelectedTimeChanged: (id:number) =>void;

}

const ProcedureContainer: React.FC<ProcedureContainerProps> = ({procedure,block,selectedId,showDelete, onSelectedTimeChanged}) => {

    const [showBlockOutline, setShowBlockOutline] = useState('');


    useEffect(()=> {
        if (procedure.inBlock) {
            if (block.released) {
                setShowBlockOutline('show-released');
            } else {
                setShowBlockOutline('show-outline');
            }
        } else {
            setShowBlockOutline('')
        }
    },[procedure])




    return (
        <div className={`procedure-container ${showBlockOutline} `}>
        {
            procedure.procedureType === PROCEDURE_TYPES.PROCEDURE  &&  
            <ProcedureCard procedure={procedure} key={procedure.procedureId} /> 
        } 
        {
            procedure.procedureType === PROCEDURE_TYPES.OPENTIME  &&  
            <OpenTimeCard procedure={procedure} key={procedure.procedureId} /> 
        } 
        {
            procedure.procedureType === PROCEDURE_TYPES.FOUNDTIME  &&  
            <FoundTimeCard 
                procedure={procedure} 
                key={procedure.procedureId} 
                selectedId={selectedId}
                showDelete={showDelete}
                onSelectedTimeChanged={onSelectedTimeChanged} /> 
        } 
        </div>
    )
}
export default ProcedureContainer;