import React, { Component } from 'react';
import './style.css';

import { Divider } from 'antd';

import FleetBar from '../FleetBar';
import FleetList from '../FleetList';
import ConfigModal from '../ConfigModal';

class BodyContent extends Component {
    state={
        configModal: false,
        fleetList: [1,2,3]
    };

    render() {
        const modalSwitch = () => {
            this.setState({
                configModal: !this.state.configModal
            })
        };

        return (
            <div className='row dashboard-body-content'>
                <div className='col-sm-12 col-md-8'>
                    <div className='body-content-container'>
                        <FleetBar />
                        <FleetList 
                            modalSwitch={modalSwitch} 
                            fleetList={this.state.fleetList}
                        />
                    </div>
                </div>
                <div className='col-sm-12 col-md-4' >
                    <div className='body-content-container'>
                        <div className='col-12 monitorning-title'>
                            <h3>Health monitoring</h3>
                            <Divider/>
                        </div>
                        <div className='col-12'>
                            <div className='col-12'>

                            </div>
                        </div>
                    </div>
                </div>
                <ConfigModal 
                    modal={this.state.configModal}
                    switch={modalSwitch}
                />
            </div>
        )
    }
};

export default BodyContent;