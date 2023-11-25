import React from "react";
import DropdownBox from "../DropDownBox";
import Card from "../card/card";
import './ProcedureDropDown.css'


interface ProcesureDropDownProps {
    procedures: string[]
}


const ProcedureDropDown: React.FC<ProcesureDropDownProps> = ({procedures}) => {
    return (
        <Card>
            <div className='procedure-dropdown'>
                <h2 className='procedure-dropdown-label'>Select procedure</h2>
                <div className='procedure-dropdown-dropdownbox' >
                    <DropdownBox options={procedures} />
                </div>
            </div>
        </Card>
    )
}
export default ProcedureDropDown