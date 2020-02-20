import React from 'react';
import DEMO from './../../../../../store/constant';
import Aux from '../../../../../hoc/_Aux';

const logoUrl = 'https://inhouseproduce.com/img/inhouse-icon.png';

const navLogo = (props) => {
    let toggleClass = ['mobile-menu'];
    if (props.collapseMenu) {
        toggleClass = [...toggleClass, 'on'];
    }

    return (
        <Aux>
            <div className='navbar-brand header-logo'>
                <a href='/dashboard' className='b-brand'>
                    <div className='bg-logo'>
                        <img className='img-fluid' src={logoUrl} alt='main-logo' />
                    </div>
                    <span className='b-title'>inHouse</span>
                </a>
                <a className={toggleClass.join(' ')} id='mobile-collapse' onClick={props.onToggleNavigation}><span /></a>
            </div>
        </Aux>
    );
};

export default navLogo;
