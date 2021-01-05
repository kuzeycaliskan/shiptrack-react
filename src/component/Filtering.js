import React from 'react';
import {Form, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Filtering extends React.Component {
    render() {
        return(

            <Form>
                <Form.Row>
                    <Col>
                        <Row>
                            <Form.Label style={{color: '#FFF'}}>Filter Type</Form.Label>
                        </Row>
                        <Row>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Company</option>
                                <option>POL</option>
                                <option>POD</option>
                                <option>Bill of Lading</option>
                                <option>Reference</option>
                            </Form.Control>
                        </Row>
                    </Col>
                    <Col>
                        <Form.Group controlId="formGridZip">
                            <Form.Label style={{color: '#FFF'}}>Filter Value</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Col>
                </Form.Row>
            </Form>

        // <Form>
        //     <Form.Row>
        //         <Form.Group as={Col} controlId="formGridEmail">
        //             <Form.Label>Email</Form.Label>
        //             <Form.Control type="email" placeholder="Enter email" />
        //         </Form.Group>
        //
        //         <Form.Group as={Col} controlId="formGridPassword">
        //             <Form.Label>Password</Form.Label>
        //             <Form.Control type="password" placeholder="Password" />
        //         </Form.Group>
        //     </Form.Row>
        // </Form>

        );
    }
}

export default Filtering;