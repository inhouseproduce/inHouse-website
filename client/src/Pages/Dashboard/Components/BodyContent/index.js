import React, { Component } from 'react';
import './style.css';

import { Divider } from 'antd';

import FleetList from './Components/FleetList';
import Modals from '../Modals';

class BodyContent extends Component {
    state = {
        configModal: false,
        addNewModal: false,
        fleetList: [1, 2, 3]
    };

    render() {
        const configModalSwitch = () => {
            this.setState({
                configModal: !this.state.configModal
            });
        };

        const addFleetSwitch = () => {
            this.setState({
                addNewModal: !this.state.addNewModal
            });
        };

        return (
            <div className='row dashboard-body-content'>
                <div className='col-sm-12 col-md-8'>
                    <div className='body-content-container'>
                        <FleetList
                            addFleetSwitch={addFleetSwitch}
                            configSwitch={configModalSwitch}
                            fleetList={this.state.fleetList}
                        />
                    </div>
                </div>
                <div className='col-sm-12 col-md-4' >
                    <div className='body-content-container'>
                        <div className='col-12 monitorning-title'>
                            <h3>Health monitoring</h3>
                            <Divider />
                        </div>
                        <div className='col-12'>
                            <div className='col-12'>

                            </div>
                        </div>
                    </div>
                </div>
                <Modals
                    newFleetModal={this.state.addNewModal}
                    newFleetSwtich={addFleetSwitch}
                    configModal={this.state.configModal}
                    configSwitch={configModalSwitch}
                />
            </div>
        )
    }
};

export default BodyContent;