import React, { Component } from 'react';
import './style.css';

import { Divider } from 'antd';

import FleetList from './Components/FleetList';
import Modals from '../Modals';

class BodyContent extends Component {
    constructor(props){
        super(props);

        this.state = {
            configModal: false,
            addNewModal: false,
        };

        this.updateFleetConfig = this.updateFleetConfig.bind(this);
        this.createNewFleet = this.createNewFleet.bind(this);
    };
    
    updateFleetConfig(){
        this.setState({
            configModal: !this.state.configModal
        });
    }

    createNewFleet(){
        this.setState({
            addNewModal: !this.state.addNewModal
        });
    }

    render() {
        return (
            <div className='row dashboard-body-content'>
                <div className='col-sm-12 col-md-8'>
                    <div className='body-content-container'>
                        <FleetList {...this} />
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
                <Modals {...this} state={this.state} />
            </div>
        )
    };
};

export default BodyContent;