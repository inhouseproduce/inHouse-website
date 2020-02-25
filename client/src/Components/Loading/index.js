import React from 'react';
import { Spin, Col, Icon } from 'antd';

export const Loading = () => {
    return (
        <Col className='text-center'>
            <Spin style={{ paddingTop: '5rem' }} size='large' />
        </Col>
    )
};

export const LoadingIcon = () => {
    return (
        <Col className='text-center'>
            <Icon style={{ fontSize: '2.5rem' }} type='loading' />
        </Col>
    )
};