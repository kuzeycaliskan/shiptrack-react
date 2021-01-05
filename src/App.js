import './App.css';
import React from 'react';
import { Form, Nav, Navbar, Row} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import AddDeleteUpdate from "./component/AddDeleteUpdate";
import Filtering from "./component/Filtering";
import Maps from "./component/Maps";
import AddLog from "./component/AddLog";
import DataTable from "./component/DataTable";



class App extends React.Component {
    state = {
        db_Col: ['Company', 'Imp-Exp', 'Cargo Way', 'POL', 'POD', 'Terms', 'Bill of Lading', 'Reference',
        'ETD', 'ETA'],

        db_Value: [
            {
                "id": 1,
                "salesperson": 1,
                "company": "TLS",
                "imp_exp": "import",
                "cargo_way": "sea",
                "pol": "Harem",
                "pod": "France",
                "terms": "EXW",
                "billoflading_no": "123456",
                "ref_no": "987654",
                "etd": "2020-03-19",
                "eta": "2020-03-31",
                "is_arrived": 0,
                "created_at": "2020-03-19 00:11:11",
                "arrived_at": null
            },
            {
                "id": 2,
                "salesperson": 2,
                "company": "HW",
                "imp_exp": "export",
                "cargo_way": "air",
                "pol": "Izmir",
                "pod": "Spain",
                "terms": "DDP",
                "billoflading_no": "456123",
                "ref_no": "963852",
                "etd": "2020-03-19",
                "eta": "2020-03-31",
                "is_arrived": 0,
                "created_at": "2020-03-19 00:11:32",
                "arrived_at": null
            },
            {
                "id": 3,
                "salesperson": 1,
                "company": "TLS",
                "imp_exp": "import",
                "cargo_way": "highway",
                "pol": "Arabia",
                "pod": "Antalya",
                "terms": "EXW",
                "billoflading_no": "548413",
                "ref_no": "954758",
                "etd": "2020-03-19",
                "eta": "2020-03-30",
                "is_arrived": 0,
                "created_at": "2020-03-19 00:11:32",
                "arrived_at": null
            },
            {
                "id": 4,
                "salesperson": 2,
                "company": "DEKOR",
                "imp_exp": "export",
                "cargo_way": "air",
                "pol": "Aydin",
                "pod": "Russia",
                "terms": "FCA",
                "billoflading_no": "452114",
                "ref_no": "985641",
                "etd": "2020-08-03",
                "eta": "2020-08-20",
                "is_arrived": 0,
                "created_at": "2020-11-23 12:27:56",
                "arrived_at": null
            },
            {
                "id": 5,
                "salesperson": 2,
                "company": "BOSCH",
                "imp_exp": "export",
                "cargo_way": "sea",
                "pol": "Houston",
                "pod": "China",
                "terms": "FOB",
                "billoflading_no": "536852",
                "ref_no": "903201",
                "etd": "2020-10-23",
                "eta": "2020-11-08",
                "is_arrived": 0,
                "created_at": "2020-11-23 23:24:21",
                "arrived_at": null
            }
        ]
    }


  render() {

    return (

        <body id={'mainBody'} style={{weight:'100%', height:'100%'}}>

            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">ShipTrack</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/map">Map</Nav.Link>
                    <Nav.Link href="/manageLog">Add/Delete/Update</Nav.Link>
                </Nav>
                <Form inline>
                    <Filtering/>
                </Form>
            </Navbar>

            <Router>
                <Switch>
                    <Route path="/home" render={
                        () => {
                            return(<DataTable db_Col={this.state.db_Col} db_Value={this.state.db_Value}/>)
                        }
                    }
                    />

                    <Route path="/map" render={
                        () => {
                            return(<Maps/>)
                        }
                    }
                    />

                    <Route path="/manageLog" render={
                        () => {
                            return(
                                <body style={{padding: 75}}>
                                    <Form>
                                            <AddDeleteUpdate/>
                                            <AddLog/>
                                    </Form>
                                </body>
                            )
                        }
                    }
                    />

                </Switch>
            </Router>


        </body>


    );
  }
}

export default App;