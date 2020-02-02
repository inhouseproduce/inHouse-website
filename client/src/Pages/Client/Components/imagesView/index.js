import React, { Component } from 'react';
import { Row, Col, Button, Card } from 'react-bootstrap';

let imgs = [
    'https://s3.amazonaws.com/cdn.gardensalive.com/images/800/62314.jpg',
    'https://s3.amazonaws.com/cdn.gardensalive.com/images/800/62314.jpg',
    'https://s3.amazonaws.com/cdn.gardensalive.com/images/800/62314.jpg',
    'https://s3.amazonaws.com/cdn.gardensalive.com/images/800/62314.jpg',
    'https://s3.amazonaws.com/cdn.gardensalive.com/images/800/62314.jpg',
    'https://s3.amazonaws.com/cdn.gardensalive.com/images/800/62314.jpg',
];

class ImagesView extends Component {
    render() {
        return (
            <Row>
                {imgs.map(img => (
                    <Col xs={6} className='p-2'>
                        <div className='hover-search-icon mx-2'>
                            <img src={img} className='img-fluid' />
                        </div>
                    </Col>
                ))}
            </Row>
        )
    }
}

export default ImagesView;