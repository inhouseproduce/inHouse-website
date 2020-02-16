import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Dropdown } from 'react-bootstrap';
import windowSize from 'react-window-size';

import NavSearch from './NavSearch';
import Aux from '../../../../../hoc/_Aux';
import DEMO from '../../../../../store/constant';
import * as actionTypes from '../../../../../store/actions';

import Modals from '../../../../../Components/Modals'

class NavLeft extends Component {
    state = {
        add: false
    };

    modalSwitch = modal => {
        this.setState({
            add: !this.state.add
        });
    };

    render() {
        let iconFullScreen = ['feather'];
        iconFullScreen = (this.props.isFullScreen) ? [...iconFullScreen, 'icon-minimize'] : [...iconFullScreen, 'icon-maximize'];

        let navItemClass = ['nav-item'];
        if (this.props.windowWidth <= 575) {
            navItemClass = [...navItemClass, 'd-none'];
        }
        let dropdownRightAlign = false;
        if (this.props.rtlLayout) {
            dropdownRightAlign = true;
        }

        return (
            <Aux>
                <ul className='navbar-nav mr-auto'>
                    <li><a href={DEMO.BLANK_LINK} className='full-screen' onClick={this.props.onFullScreen}><i className={iconFullScreen.join(' ')} /></a></li>
                    <li className={navItemClass.join(' ')}>
                        <Dropdown alignRight={dropdownRightAlign}>
                            <Dropdown.Toggle variant={'link'} id='dropdown-basic'>
                                Client
                            </Dropdown.Toggle>
                            <ul>
                                <Dropdown.Menu>
                                    <li><a onClick={this.modalSwitch} className='dropdown-item'>Add Client</a></li>
                                    <li><a className='dropdown-item'>Delete Client</a></li>
                                </Dropdown.Menu>
                            </ul>
                        </Dropdown>
                    </li>
                    <li className='nav-item'><NavSearch /></li>
                </ul>
                <Modals.AddClient {...this} />
            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        isFullScreen: state.isFullScreen,
        rtlLayout: state.rtlLayout
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onFullScreen: () => dispatch({ type: actionTypes.FULL_SCREEN }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(NavLeft));
