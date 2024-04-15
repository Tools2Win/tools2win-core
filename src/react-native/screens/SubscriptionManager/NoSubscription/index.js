import React from 'react';
import { Text, Image } from '@rneui/themed';
import { View } from 'react-native';
const art = require('../../../../assets/art_displayname.jpg');

const NoSubscription = () => {
    return (
        <View>
            <Image source={art} />
            <Text h4>Display Name</Text>
        </View>
    );
};

export default NoSubscription;