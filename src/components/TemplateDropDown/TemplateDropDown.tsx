import React from "react";
import DropdownBox from "../DropDownBox";
import Card from "../card/card";
import './TemplateDropDown.css'


interface TemplateDropDownProps {
    templates: string[]
}


const TemplateDropDown: React.FC<TemplateDropDownProps> = ({templates}) => {
    return (
        <Card>
            <div className='template-dropdown'>
                <h2 className='template-dropdown-label'>Select SSM template</h2>
                <div className='template-dropdown-dropdownbox' >
                    <DropdownBox options={templates} />
                </div>
            </div>
        </Card>
    )
}
export default TemplateDropDown