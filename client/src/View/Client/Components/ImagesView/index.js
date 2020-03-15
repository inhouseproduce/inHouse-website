import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { Row, Col } from 'react-bootstrap';
import { Icon, Button } from 'antd';

import { LoadingIcon } from '../../../../Components/Loading';

class ImagesView extends Component {
    state = {
        updateAllowed: true
    };

    updateImageList = (id) => {
        if (this.state.updateAllowed) {
            this.props.update(id);
            this.setState({ updateAllowed: false });

            setTimeout(() => {
                this.setState({ updateAllowed: true });
            }, 60000 );
        }
    };

    render() {
        let images = this.props.images;
        return (
            <Col>
                <Col>
                    <Button onClick={() => this.updateImageList(this.props.match.params.id)} shape='round'>
                        <Icon style={{ padding: '5px' }} type={this.state.updateAllowed ? 'reload' : 'loading'} />
                    </Button>
                </Col>
                <Col>
                    <Row>
                        {images ? images.map((img, i) => (
                            <Col key={i} xs={6} className='p-2'>
                                <small>{img.name}</small>
                                <div className='hover-search-icon mx-2'>
                                    <img src={img.image} className='img-fluid zoom-hover br-1' />
                                </div>
                            </Col>
                        )) : <Col><LoadingIcon /></Col>}
                    </Row>
                </Col>
            </Col>
        )
    };
};

export default withRouter(ImagesView);