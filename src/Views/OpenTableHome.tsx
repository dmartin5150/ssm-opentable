import React, {useState, useEffect} from 'react';
import MainNav from '../components/MainNav/MainNav';
import RangeSelectors from '../components/dateRange/RangeSelector';
import CheckBoxCard from '../components/CheckBoxCard/CheckBoxCard';
import SurgeonDropDown from '../components/SurgeonDropDown/SurgeonDropDown';
import ProcedureDropDown from '../components/ProcedureDropDown/ProcedureDropDown';
import TemplateDropDown from '../components/TemplateDropDown/TemplateDropDown';
import FindRoom from '../components/FindRoom/FindRoom';
import './OpenTableHome.css';
import ProviderColumn from '../components/ProviderColumn/ProviderColumn';
import { FoundTime } from '../data/datatypes/foundtimes';
import { PROVIDERS } from '../data/sampledata/Providers';
import { FOUNDTIMES } from '../data/sampledata/FoundTimes';
import { Procedure } from '../data/datatypes/procedure';
import { Provider } from '../data/datatypes/provider';
import Duration from '../components/Duration/Duration';

import { BLOCKS } from '../data/sampledata/Blocks';
import { PROCEDURES } from '../data/sampledata/Procedures';
import EmptySchedulingForm from '../components/EmptySchedulingForm/EmptySchedulingForm';


const DAYSOFWEEK:string[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
]

const SURGEONS:string[] = [
    'Leonard Elrod, MD',
    'Rob Parker, DO',
    'Jane Doe, MD',
    'Sue Austin, MD'
]

const FACILITIES:string[] = [
    'St. Thomas Midtown',
    'St. Thomas West',
    'Rutherford'
];

const UNITS:string[] = [
    'CSC',
    'JRI',
    'STM ST OR',
    'OB L & D'
];


const PROCEDURESNAMES:string[] = [
    'Total Knee Replacement',
    'Total Hip Replacement',
    'Other Procedures'
]

const TEMPLATES:string[] = [
    'Smith Total Knee Replacement',
    'Jonse Total Hip Replacement',
    'Other Procedures'
]
 
const OpenTableHome: React.FC = () => {

    const [selectedTimeID, setSelectedTimeID] = useState(-1);
    const [curProcs, setCurProcs] = useState<Procedure[]>([])
    const [curTimes, setCurTimes] = useState<FoundTime[]>([])
    const [providerIndex, setProviderIndex] = useState(0);

    const handleChangeSelectedTime = (selectedTime:number) => {
        setSelectedTimeID(selectedTime);
    }

    useEffect(()=> {
        if (selectedTimeID === -1) {
            setCurProcs([])
        } else {
            setCurProcs(PROCEDURES.filter((procedure)=> procedure.providerId === 1))
        }
    }, [selectedTimeID])

    useEffect(()=> {
        if (selectedTimeID === -1) {
            setProviderIndex(1);
        } else {
            setProviderIndex(0);
        }
    }, [selectedTimeID])


    const handleUpdateFindRoom = () => {
        if (curTimes.length === 0) {
            setCurTimes(FOUNDTIMES);
        }else {
            setCurTimes([]);
            setCurProcs([]);
        }
    }


    return(
        <div className='open-table'>
            <div className='open-table-main-nav'>
                <MainNav />
            </div>
            <div className='open-table-selections-container'>
                <div className='open-table-selections'>
                    <div className='open-table-sections-surgeon'>
                        <SurgeonDropDown surgeons={SURGEONS} />
                    </div>
                    <div className='open-table-sections-findroom'>
                        <FindRoom onClick={handleUpdateFindRoom} />
                    </div>
                    <div className='open-table-sections-facilities'>
                        <CheckBoxCard title='Facilities' items={FACILITIES} />
                    </div>
                    <div className='open-table-sections-units'>
                        <CheckBoxCard title='Units' items={UNITS} />
                    </div>
                    <div className='open-table-sections-dates'>
                        <RangeSelectors title='Date Range' />
                    </div>
                    <div className='open-table-sections-daysofweek'>
                        <CheckBoxCard title='Day Of Week' items={DAYSOFWEEK} />
                    </div>
                    <div className='open-table-sections-procedure'>
                        <ProcedureDropDown procedures={PROCEDURESNAMES} />
                    </div>
                    <div className='open-table-sections-duration'>
                       <Duration />
                    </div>
                </div>
            </div>
            <div className='open-table-main-body-container'>
                <div className='open-table-main-body'>
                    <div className='open-table-times'>
                        <ProviderColumn 
                            provider={PROVIDERS[providerIndex]} 
                            selectedId={selectedTimeID} 
                            block={BLOCKS[0]} 
                            procedures={curProcs} 
                            onSelectedTimeChanged={handleChangeSelectedTime} 
                            showHeaderButton={false}
                            showFoundTimeHeader={false}
                            showIcons={false}
                            showDelete={false}/>
                    </div>
                    <div className='open-table-times'>
                        <ProviderColumn         
                            provider={PROVIDERS[0]} 
                            selectedId={selectedTimeID} 
                            block={BLOCKS[0]} procedures={curTimes} 
                            onSelectedTimeChanged={handleChangeSelectedTime} 
                            showHeaderButton={false}
                            showFoundTimeHeader={true}
                            showIcons={false}
                            showDelete={true}/>
                    </div>
                    <div className='open-table-form'>
                        <EmptySchedulingForm procedureId={selectedTimeID}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OpenTableHome;