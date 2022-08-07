import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading2 = () => {
    return (
        <div style={{height:'400px'}} className='mt-5'>
              <Spinner animation="border" variant="secondary" />
              <Spinner animation="border" variant="secondary" />
              <Spinner animation="border" variant="secondary" />
        </div>
    );
};

export default Loading2;