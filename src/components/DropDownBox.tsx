import React, {useState} from 'react';
import "./DropDownBox.css";
export interface DropDownBoxProps {
    options: string[]
}

const DropdownBox: React.FC<DropDownBoxProps> = ({options}) =>
  {
    const[selectedOption, setSelectedOption] = useState<string>(options[0]);

    const onChange = (event:React.ChangeEvent<HTMLSelectElement> ) => {
        setSelectedOption(event.target.value);
    }
    return(
        <div className='dropdownbox'>
            <select className='dropdownbox-select' value={selectedOption} onChange={onChange}>
                {options.map((option, idx) => {
                    return <option className='dropdownbox-option' value={option} key={idx}>{option}</option>
                })}
            </select>
        </div>
    )
}


export default DropdownBox;