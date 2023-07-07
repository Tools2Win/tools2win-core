import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList, SafeAreaView } from 'react-native';
import { Input, ListItem, SearchBar } from 'react-native-elements';
import { useSalesmanSelection } from '../../../hooks/useSalesmanSelection';

const SalesmanSelection = () => {
    const { salesmen, loading, error, selectSalesman } = useSalesmanSelection();
    const [enteredSalesmanName, setEnteredSalesmanName] = useState('');

    const filteredSalesmen = enteredSalesmanName ? salesmen.filter(salesman => salesman.name.toUpperCase().includes(enteredSalesmanName.toUpperCase())) : salesmen;

    const handleSalesmanSelection = async (SalesmanCode) => {
        await selectSalesman(SalesmanCode);
    };

    const renderSalesman = ({ item }) => (
        <ListItem key={item.id} bottomDivider onPress={() => handleSalesmanSelection(item.id)}>
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.id}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    );

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar
                placeholder="Search Salesman by Code"
                onChangeText={setEnteredSalesmanName}
                value={enteredSalesmanName}
                disabled={loading}
                containerStyle={styles.searchBarContainer}
                inputContainerStyle={styles.searchBarInputContainer}
            />
            <FlatList
                data={filteredSalesmen}
                renderItem={renderSalesman}
                keyExtractor={(item) => item.SalesmanCode}
            />
            {loading && <ActivityIndicator size="large" style={styles.loading} />}
            {error && (
                <Text style={styles.errorMessage}>
                    {error || 'An error occurred.'}
                </Text>
            )}
            <TouchableOpacity style={styles.button} onPress={() => handleSalesmanSelection('SKIPPED')} disabled={loading}>
                <Text style={styles.buttonText}>Skip this for now</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: '#f7f7f7'
    },
    searchBarContainer: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        marginBottom: 10
    },
    searchBarInputContainer: {
        backgroundColor: '#e8e8e8'
    },
    loading: {
        margin: 16
    },
    errorMessage: {
        color: 'red',
        marginTop: 16,
        textAlign: 'center',
        fontSize: 14
    },
    button: {
        backgroundColor: '#4C7BDC',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginVertical: 10,
        alignItems: 'center',
        alignSelf: 'center'
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16
    }
});

export default SalesmanSelection;
