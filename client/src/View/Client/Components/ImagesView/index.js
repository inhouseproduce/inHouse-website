import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

class ImagesView extends Component {
    render() {
        return (
            <Row>
                {(this.props.images || []).map((img, i) => (
                    <Col key={i} xs={6} className='p-2'>
                        <small>{img.name}</small>
                        <div className='hover-search-icon mx-2'>
                            <img src={img.image} className='img-fluid' />
                        </div>
                    </Col>
                ))}
            </Row>
        )
    };
};

export default ImagesView;