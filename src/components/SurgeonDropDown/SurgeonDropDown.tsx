import React from "react";
import DropdownBox from "../DropDownBox";
import Card from "../card/card";
import './SurgeonDropDown.css'


interface SurgeonDropDownProps {
    surgeons: string[]
}


const SurgeonDropDown: React.FC<SurgeonDropDownProps> = ({surgeons}) => {
    return (
        <Card>
            <div className='surgeon-dropdown'>
                <h2 className='surgeon-dropdown-label'>Surgeon</h2>
                <div className='surgeon-dropdown-dropdownbox' >
                    <DropdownBox options={surgeons} />
                </div>
            </div>
        </Card>
    )
}
export default SurgeonDropDown