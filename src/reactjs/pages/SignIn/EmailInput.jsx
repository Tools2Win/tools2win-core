import React from 'react';

const EmailInput = ({ value, onChange }) => (
    <input
        type="email"
        placeholder="Email"
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
    },
    
};

export default EmailInput;
