import React, { Component } from 'react';
import { Input, Divider } from 'antd';

// Config menu options create/update
import IntervalMenu from '../../../../../../../Components/Menu/Interval';
import ClockMenu from '../../../../../../../Components/Menu/Clock';
import InfoMenu from '../../../../../../../Components/Menu/Info';

class FleetForm extends Component {
    render() {
        return (
            <div className='col-12'>
                <div className='col-12 p-0'>
                    <div className='my-3'>
                        <span><b>Client Info</b></span>
                        <InfoMenu name='client' handleInput={this.props.handleInput}/>
                    </div>
                    <Divider className='my-2' />
                    <div>
                        <span><b>Main Pump</b></span>
                        <span className='p-1'>
                            <IntervalMenu name='mainPump' handleInput={this.props.handleInput} />
                        </span>
                    </div>
                    <Divider className='my-2' />
                    <div>
                        <span><b>Irrigation</b></span>
                        <span className='p-1'>
                            <ClockMenu name='irrigation' handleInput={this.props.handleInput} />
                        </span>
                    </div>
                    <Divider className='my-2' />
                    <div>
                        <span><b>Lighting</b></span>
                        <span className='p-1'>
                            <ClockMenu name='lighting' handleInput={this.props.handleInput} />
                        </span>
                    </div>
                </div>
            </div>
        );
    };
};

export default FleetForm;