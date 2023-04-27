import React from 'react';
import { Button } from 'antd';
import './Header.css'


const Header = () => {
    return (
        <header className='header'>
            <div className='container navbar'>
                <div>
                    <a href="https://www.google.com/">Logo</a>
                    <a href="https://www.google.com/">Webshop</a>
                    <a href="https://www.google.com/">Services</a>
                    <a href="https://www.google.com/">Industries</a>
                    <a href="https://www.google.com/">Communities</a>
                    <a href="https://www.google.com/">Subscribe</a>
                </div>
                <div>
                    <Button >Default</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;