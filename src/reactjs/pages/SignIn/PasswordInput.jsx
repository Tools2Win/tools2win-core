import React from 'react';

const PasswordInput = ({ value, onChange }) => (
    <input
        type="password"
        placeholder="Password"
        value={value}
        onChange={onChange}
        style={styles.input}
    />
);

const styles = {
    input: {
        padding: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    }
};

export default PasswordInput;
