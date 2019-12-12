import React from 'react';
import { connect } from 'react-redux';

import { Icon, Checkbox, Badge, Button } from 'antd';
import FleetBar from './Components/FleetBar';

const Fleet = props => {
    return (
        <div className='col-12 p-0'>
            <div className='col-12 p-0'>
                <FleetBar modalSwitch={props.createNewFleet} />
            </div>
            {(props.fleetList || []).map((list, i) => {
                return (
                    <div key={i} className='col-12 p-0'>
                        <ul className='fleet-content' style={{ paddingRight: '25px' }}>
                            <li>
                                <Checkbox />
                            </li>
                            <li>
                                <Icon className='px-1' type='bulb' />
                                <Badge className='px-1' status='success' />
                            </li>
                            <li>
                                <Icon type="file-image" />
                            </li>
                            <li>
                                <a href={'/fleet'}><span>Hugos 2</span></a>
                            </li>
                            <li>
                                <span>Studio city</span>
                            </li>
                            <li>
                                <Button type='primary' size='small' 
                                    onClick={props.updateFleetConfig} 
                                >
                                    <small>Config</small>
                                </Button>
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
};


const mapStateToProps = state => {
    return {
        fleetList: state.app.fleetList
    }
};

const mapDispatchToProps = dispatch => {
    return {
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Fleet);