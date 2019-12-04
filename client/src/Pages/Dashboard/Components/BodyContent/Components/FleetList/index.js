import React from 'react';
import { Icon, Checkbox, Badge, Button } from 'antd';
import FleetBar from './Components/FleetBar';

const Fleet = props => {
    return (
        <div className='col-12 p-0'>
            <div className='col-12 p-0'>
                <FleetBar addFleetSwitch={props.addFleetSwitch}/>
            </div>
            {(props.fleetList || []).map(list => {
                return (
                    <div className='col-12 p-0'>
                        <ul className='fleet-content' style={{ paddingRight: '25px' }}>
                            <li>
                                <Checkbox />
                            </li>
                            <li>
                                <span className='px-1'>
                                    <Icon type='bulb' />
                                </span>
                                <span className='px-1'>
                                    <Badge status='success' />
                                </span>
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
                                <Button onClick={props.configSwitch} type='primary' size='small'><small>Config</small></Button>
                            </li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
};

export default Fleet;