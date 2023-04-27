import React from 'react';
import './Counts.css'

const Counts = () => {
    return (
        <div className='count-container'>
            <div className='container content'>
                <div>
                    <div className='count-elem'>407+</div>
                    <p>CLUB MEMBERS</p>
                </div>
                <div>
                    <div className='count-elem'>45+</div>
                    <p>ACTIVE COUNTRIES</p>
                </div>
                <div>
                    <div className='count-elem'>1</div>
                    <p>STARTUP ECO-SYSTEM</p>
                </div>
            </div>
        </div>
    );
}

export default Counts;