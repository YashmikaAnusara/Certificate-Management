import * as React from 'react';
import Alert from '@mui/material/Alert';

export default function Alerts(props) {
    return (
        <Alert variant="filled" severity={props.type}>
            {props.message}
        </Alert>
    );
}
