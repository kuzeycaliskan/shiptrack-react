import React from 'react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class AddDeleteUpdate extends React.Component {
    render() {
        return(
            <div>
                <Button className='defaultButton' variant="primary">Add</Button>
                <Button className='defaultButton' variant="primary">Update</Button>
                <Button className='defaultButton' variant="primary">Delete</Button>
            </div>
        );
    }
}

export default AddDeleteUpdate;