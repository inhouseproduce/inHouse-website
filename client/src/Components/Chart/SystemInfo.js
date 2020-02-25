import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Progress, Badge } from 'antd';

const SystemInfo = props => {
    const usage = () => {
        if (props.info.memory) {
            let memory = props.info.memory;
            let cpu = props.info.cpu;
            return { memory: memory.used, cpu: cpu.used }
        }
        return {}
    };

    return (
        <Col style={{ height: '345px' }}>
            <Row className='text-center'>
                <Col xs={6}>
                    <h5>Memory</h5>
                    <Progress strokeColor={{
                        '0%': '#87d068',
                        '100%': '#108ee9',
                    }} type="circle" percent={usage().memory} />
                </Col>
                <Col xs={6}>
                    <h5>RAM</h5>
                    <Progress strokeColor={{
                        '0%': '#87d068',
                        '100%': '#108ee9',
                    }} type="circle" percent={usage().cpu} />
                </Col>
            </Row>
            <Row className='text-center'>
                <Col xs={6} className='p-3'>
                    <small>Connection<Badge className='p-1' status="success" /></small><br />
                    <small>Health<Badge className='p-1' status="success" /></small><br />
                </Col>
                <Col xs={6} className='p-3'>
                    <small>Connection<Badge className='p-1' status="success" /></small><br />
                    <small>Health<Badge className='p-1' status="success" /></small><br />
                </Col>
            </Row>
        </Col>
    )
};

export default SystemInfo;