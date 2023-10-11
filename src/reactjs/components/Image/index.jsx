import React from 'react';

const Image = ({ image }) => (
    <img src={image} alt="Logo" style={styles.image} />
);

const styles = {
    image: {
        width: 300,
        marginBottom: 20,
    },
};

export default Image;
