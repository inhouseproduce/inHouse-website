import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { LoadingIcon } from '../../../../Components/Loading';

class ImagesView extends Component {
    render() {
        let images = this.props.images;
        return (
            <Row>
                {images ? images.map((img, i) => (
                    <Col key={i} xs={6} className='p-2'>
                        <small>{img.name}</small>
                        <div className='hover-search-icon mx-2'>
                            <img src={img.image} className='img-fluid' />
                        </div>
                    </Col>
                )) : <Col><LoadingIcon /></Col>}
            </Row>
        )
    };
};

export default ImagesView;