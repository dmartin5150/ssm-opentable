import React from 'react';
import MainNav from '../components/MainNav';
import './OpenTableHome.css';


const OpenTableHome = () => {
    return(
        <div className='open-table'>
            <div className='open-table-main-nav'>
                <MainNav />
            </div>
            <div className='open-table-selections'>
                <div className='open-table-secitions-surgeon'>Surgeon Info</div>
                <div className='open-table-secitions-calendar'>Calendar Info</div>
                <div className='open-table-secitions-procedure'>Procedure Info</div>
            </div>
            <div className='open-table-main-body'>
                <div className='open-table-times'>Times</div>
                <div className='open-table-form'>Scheduling Form</div>
            </div>
        </div>
    )
}
export default OpenTableHome;