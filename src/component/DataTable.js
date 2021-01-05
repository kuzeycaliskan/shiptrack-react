import React from 'react';
import {Form, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const openMap_Router = (id) => {
    window.location = '/map/'+ id;
}

class DataTable extends React.Component {

    render() {
        return(
            <body id={'mainRow'}>
                <Form id={'dbRow'}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            {this.props.db_Col.map(item => (
                                <th key={item}>{item}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.db_Value.map(item => {
                                return (
                                    <tr onClick={ () => {
                                        console.log('Clicked id: ' + item.id);
                                        openMap_Router(item.id);
                                    }}>
                                        <td>{item.id}</td>
                                        <td>{item.company}</td>
                                        <td>{item.imp_exp}</td>
                                        <td>{item.cargo_way}</td>
                                        <td>{item.pol}</td>
                                        <td>{item.pod}</td>
                                        <td>{item.terms}</td>
                                        <td>{item.billoflading_no}</td>
                                        <td>{item.ref_no}</td>
                                        <td>{item.etd}</td>
                                        <td>{item.eta}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </Table>
                </Form>
            </body>
        );
    }
}

export default DataTable;