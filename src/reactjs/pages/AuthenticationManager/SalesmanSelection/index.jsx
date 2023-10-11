import React, { useState } from 'react';
import { useSalesmanSelection } from '../../../../hooks/useSalesmanSelection';
import Container from 'tools2win-core/src/reactjs/components/Container';

const SalesmanSelection = () => {
    const { salesmen, loading, error, selectSalesman } = useSalesmanSelection();
    const [enteredSalesmanName, setEnteredSalesmanName] = useState('');

    const filteredSalesmen = enteredSalesmanName ? salesmen.filter(salesman => salesman.name.toUpperCase().includes(enteredSalesmanName.toUpperCase())) : salesmen;

    const handleSalesmanSelection = async (SalesmanCode) => {
        await selectSalesman(SalesmanCode);
    };

    return (
        <Container>
            <h1 style={styles.header}>Select a Salesman</h1>
            <input
                type="text"
                placeholder="Search Salesman by Code"
                onChange={e => setEnteredSalesmanName(e.target.value)}
                value={enteredSalesmanName}
                disabled={loading}
                style={styles.searchBar}
            />
            {loading ? (
                <div style={styles.loading}>Loading...</div>
            ) : (
                <ul style={styles.salesmanList}>
                    {filteredSalesmen.map(item => (
                        <li key={item.id} style={styles.salesmanItem} onClick={() => handleSalesmanSelection(item.id)}>
                            <span>{item.name}</span> <small>{item.id}</small>
                        </li>
                    ))}
                </ul>
            )}
            {error && (
                <p style={styles.errorMessage}>
                    {error || 'An error occurred.'}
                </p>
            )}
            <button style={styles.button} onClick={() => handleSalesmanSelection('SKIPPED')} disabled={loading}>
                Skip this for now
            </button>
        </Container>

    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f7f7f7',
        minHeight: '100vh',
    },
    content: {
        width: '60%', // You can adjust this to set the width
        maxWidth: '800px', // You can set a maximum width
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    header: {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#333',
    },
    searchBar: {
        padding: '10px',
        marginBottom: '20px',
        width: '100%',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    loading: {
        textAlign: 'center',
        margin: '16px',
    },
    salesmanList: {
        listStyle: 'none',
        padding: 0,
    },
    salesmanItem: {
        padding: '10px',
        borderBottom: '1px solid #ccc',
        cursor: 'pointer',
    },
    errorMessage: {
        color: 'red',
        marginTop: '16px',
        textAlign: 'center',
        fontSize: '14px',
    },
    button: {
        backgroundColor: '#4C7BDC',
        padding: '15px 30px',
        borderRadius: '5px',
        margin: '20px 0',
        color: '#FFF',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
};

export default SalesmanSelection;
