import React, { useState, useEffect } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const AlertDismissible = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            <Alert show={show} variant="danger">
                <Alert.Heading>Only one Answer!</Alert.Heading>
                
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShow(false)} variant="outline-success">
                        Close
            </Button>
                </div>
            </Alert>

            
        </>
    );
}

export default AlertDismissible;