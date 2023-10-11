import React, { useState } from 'react';
import { useSalesmanSelection } from '../../../../hooks/useSalesmanSelection';
import Container from '../../../components/Container';
import { FixedSizeList } from 'react-window';
import { Button, TextField, Typography } from '@mui/material';
import Image from '../../../components/Image';
import art from '../../../../assets/art_salesperson.jpg';
import Salesman from './Salesman';

const SalesmanSelection = () => {
    const { salesmen, loading, error, selectSalesman } = useSalesmanSelection();
    const [enteredSalesmanName, setEnteredSalesmanName] = useState('');

    const filteredSalesmen = enteredSalesmanName ? salesmen.filter(salesman => salesman.name.toUpperCase().includes(enteredSalesmanName.toUpperCase())) : salesmen;

    const handleSalesmanSelection = async (SalesmanCode) => {
        await selectSalesman(SalesmanCode);
    };

    return (
        <Container>
            <Image image={art} />
            <Typography variant='h4'>Are you a Salesperson?</Typography>
            <TextField fullWidth label="Search" value={enteredSalesmanName} onChange={(e) => setEnteredSalesmanName(e.target.value)} />
            {!loading && (
                <FixedSizeList
                    height={300}
                    width='100%'
                    itemSize={70}
                    itemCount={filteredSalesmen.length}
                    overscanCount={20}
                >
                    {({ index, style }) => <Salesman index={index} style={style} salesman={filteredSalesmen[index]} selectSalesman={selectSalesman} />}
                </FixedSizeList>
            )}
            {error && (
                <p style={styles.errorMessage}>
                    {error || 'An error occurred.'}
                </p>
            )}
            <Button variant='contained' fullWidth disabled={loading} onClick={() => handleSalesmanSelection('SKIPPED')}>No</Button>
        </Container>

    );
};

const styles = {
    errorMessage: {
        color: 'red',
        marginTop: '16px',
        textAlign: 'center',
        fontSize: '14px',
    },
};

export default SalesmanSelection;
