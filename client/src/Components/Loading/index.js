import React, { Component } from 'react';
import { Spin, Col } from 'antd';

class Loading extends Component {
    render() {
        return (
            <Col className='text-center'>
                <Spin style={{ paddingTop: '5rem' }} size='large' />
            </Col>
        )
    };
};

export default Loading;