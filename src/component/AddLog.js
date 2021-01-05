import React from 'react';
import { Col, Form } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class AddLog extends React.Component {
    render() {
        return(
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Group controlId="">
                            <Form.Label>Sales Person</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>Company</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>Import-Export</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Import</option>
                                <option>Export</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>Cargo Way</Form.Label>
                            <Form.Control as="select" defaultValue="Choose...">
                                <option>Sea</option>
                                <option>Air</option>
                                <option>Land</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>POL</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>POD</Form.Label>
                            <Form.Control type="" placeholder="" />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group as={Col} >
                        <Form.Group controlId="">
                            <Form.Label>Terms</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>Bill of Lading</Form.Label>
                            <Form.Control type="number" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>Reference No</Form.Label>
                            <Form.Control type="number" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>ETD</Form.Label>
                            <Form.Control type="date" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="">
                            <Form.Label>ETA</Form.Label>
                            <Form.Control type="date" placeholder="" />
                        </Form.Group>
                    </Form.Group>
                </Form.Row>
            </Form>
        );
    }
}

export default AddLog;