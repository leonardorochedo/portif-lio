import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import './Header.css'

export function Header() {

    let [count, setCount] = useState(1)

    let navImage;

    // Alterar o nav icon
    if (count % 2 == 0) {
        navImage = "src/assets/close-nav.svg"
    } else {
        navImage = "src/assets/open-nav.svg"
    }

    function openModal() {
        setCount(count = count + 1)
        console.log(count)

        if (count % 2 == 0) {
            list = document.querySelector('#listPages').style.display = 'flex';
            //navImage = "src/assets/close-nav.svg"
        } else {
            list = document.querySelector('#listPages').style.display = 'none';
            //navImage = "src/assets/open-nav.svg"
        }
    }

    return (
        <>
        <button id='openButton' onClick={openModal}><img id='navicon' src={navImage} alt="Menu" /></button>
        <header className='header-projects' id='listPages'>
            <ul>
                <li className='home'><Link to="/"><span className='menu'></span><a className='menu'>ÍNICIO</a></Link></li>
                <li className='about'><Link to="/sobre"><span className='menu'></span><a className='menu'>SOBRE MIM</a></Link></li>
                <li className='tec'><Link to="/tecnologias"><span className='menu'></span><a className='menu'>TECNOLOGIAS</a></Link></li>
                <li className='proj'><Link to="/projetos"><span className='menu'></span><a className='menu'>PROJETOS</a></Link></li>
            </ul>
        </header>
        </>
    );
}