import React, { Component } from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';

// Wrapper
import Aux from '../../../../hoc/_Aux';

// Components
import TableContent from './TableContent';

class ClientList extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <Col xl={8}>
                        <Card className='User-Activity'>
                            <Card.Header>
                                <Card.Title as='h5'>User Activity</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <Table responsive hover>
                                    <thead>
                                        <tr className='ml-3'>
                                            <th>Client</th>
                                            <th>Location</th>
                                            <th>Health</th>
                                            <th>Status</th>
                                            <th className='text-right' />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {(this.props.list || []).map((client, i) => {
                                            return (
                                                <tr key={i}>
                                                    <td>
                                                        <a href={`client/${client._id}`}>
                                                            <h6 className='m-0'><img className='rounded-circle m-r-10' style={{ width: '40px' }} src={client.image} alt='activity-user' />{client.name}</h6>
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <h6 className='m-0'>{client.location}</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className='m-0 ml-2 text-c-green'>Ok</h6>
                                                    </td>
                                                    <td className='text-right'>
                                                        <p className='m-0 text-c-green'>Online</p>
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} className='m-b-30'>
                        <Card class>
                            <Card.Header>
                                <Card.Title as='h5'>User Activity</Card.Title>
                            </Card.Header>
                            <Card.Body className='pb-0'>
                                <Col className='p-3'>
                                    <TableContent clientList={this.props.list} />
                                </Col>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ClientList;