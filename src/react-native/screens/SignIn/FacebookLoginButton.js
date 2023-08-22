import React from 'react';
import { Image } from 'react-native';
import { Button } from 'react-native-elements';
import { signInWithCredential, FacebookAuthProvider, getAdditionalUserInfo } from 'firebase/auth';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { auth } from '../../../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FacebookLoginButton = () => {
    const [request, response, promptAsync] = Facebook.useAuthRequest(
        {
            clientId: "456224369281980",
            scopes: []
        }
    );

    const handleSignInWithFacebook = async () => {
        try {
            const result = await promptAsync();
            if (result.type === 'success') {
                const credential = FacebookAuthProvider.credential(result.params.access_token);
                const signInResult = await signInWithCredential(auth, credential);
                // Get additional user info
                const additionalUserInfo = getAdditionalUserInfo(signInResult);
                const facebookPictureUrl = additionalUserInfo.profile.picture.data.url;
                console.log(facebookPictureUrl)

                // Save profile picture URL to AsyncStorage
                await AsyncStorage.setItem('facebookProfilePicture', facebookPictureUrl);
            }
        } catch ({ message }) {
            alert(`Facebook Login Error: ${message}`);
        }
    }

    return (
        <Button
            disabled={!request}
            title="Facebook"
            onPress={handleSignInWithFacebook}
            buttonStyle={{ backgroundColor: '#1877F2' }}
            icon={
                <Image
                    source={require('../../../assets/f_logo_RGB-Blue_58.png')}
                    style={{ width: 24, height: 24, marginRight: 8, marginTop: -6 }}
                    resizeMode="contain"
                />
            }
        />
    )
};

export default FacebookLoginButton;
