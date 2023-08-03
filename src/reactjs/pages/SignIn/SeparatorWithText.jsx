import React from 'react';

const SeparatorWithText = ({ text }) => (
    <div style={styles.separatorContainer}>
        <div style={styles.separatorLine} />
        <span style={styles.separatorText}>{text}</span>
        <div style={styles.separatorLine} />
    </div>
);

const styles = {
    separatorContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '20px 0',
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: '#ccc',
    },
    separatorText: {
        margin: '0 10px',
        color: '#888',
    },
};

export default SeparatorWithText;
