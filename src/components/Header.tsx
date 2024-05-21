import { ReactComponent as Profile } from '../assets/profile.svg';
import React from 'react';

export const Header = () => {
    return (
        <header>
            <div className='header_left'>
                Каталог
            </div>
            <div className='header_right'>
                <div className='header_right__comparison'>СРАВНЕНИЕ</div>
                <div className='header_right__profile'>
                    <div className='profile'>Личный кабинет</div>
                    <div><Profile /></div>
                </div>
            </div>
        </header>
    )
}