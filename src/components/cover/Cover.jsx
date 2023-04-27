import React from 'react';
import { Button } from 'antd';
import { useState } from 'react';
import './Cover.css'

const Cover = () => {
    const [size, setSize] = useState('large'); // default is 'middle'

    return (
        <div className='cover'>
            <div className='container text-content'>
                <h1>Join <span>our club</span> and let’s grow together</h1>
                <p>Ibiza Center for Enterpreneurship (ICE) is the central place for anything related to enterpreneurship on the island, internationaly and online.</p>
                <div>
                    <Button type="primary" size={size}>
                        Primary
                    </Button>
                    <Button size={size}>Default</Button>
                </div>
            </div>
        </div>
    );
}

export default Cover;