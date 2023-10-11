import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Salesman = ({ index, style, salesman, selectSalesman }) => {
    return (
        <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton>
                <ListItemText primary={salesman.name} secondary={salesman.id} onClick={() => selectSalesman(salesman.id)} />
            </ListItemButton>
        </ListItem>
    );
}

export default Salesman;