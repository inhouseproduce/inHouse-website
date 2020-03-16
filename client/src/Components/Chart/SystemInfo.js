import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Progress, Badge } from 'antd';

const SystemInfo = props => {
    const system = () => {
        if (props.info.memory) {
            let memory = props.info.memory;
            let cpu = props.info.cpu;
            return { memory: memory.used, cpu: cpu.used };
        }
        return { memory: 0, cpu: 0 };
    };

    const modules = () => {
        let modules = props.module;
        if (modules && modules.camera) {
            let camera = modules.camera;
            return { list: camera.espLength, active: camera.active };
        }
        return { list: 0, active: 0 };
    };
    modules()
    return (
        <Col style={{ height: '345px' }}>
            <Row className='text-center'>
                <Col xs={6}>
                    <h5>Memory</h5>
                    <Progress strokeColor={{
                        '0%': '#87d068',
                        '100%': '#108ee9',
                    }} type="circle" percent={system().memory} />
                </Col>
                <Col xs={6}>
                    <h5>RAM</h5>
                    <Progress strokeColor={{
                        '0%': '#87d068',
                        '100%': '#108ee9',
                    }} type="circle" percent={system().cpu} />
                </Col>
            </Row>
            <Row className='p-3 mt-3'>
                <Col xs={6}>
                    <h5>Camera
                        <Badge
                            className='px-1'
                            status={modules().list >= modules().active ? 'error' : 'success'}
                        />
                    </h5>
                    <p className='pl-3'>{`${modules().list} / ${modules().active}`}</p>
                </Col>
            </Row>
        </Col>
    )
};

export default SystemInfo;