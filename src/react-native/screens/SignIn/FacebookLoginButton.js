import React from 'react';
import { Image } from 'react-native';
import { Button } from 'react-native-elements';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { signInWithCredential, FacebookAuthProvider, getAdditionalUserInfo } from 'firebase/auth';
import { auth } from '../../../firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const FacebookLoginButton = () => {
    const handleSignInWithFacebook = async () => {
        try {
            const result = await LoginManager.logInWithPermissions(['public_profile, email']);
            if (result.isCancelled) {
                throw new Error('User cancelled the login process');
            }

            // Get the access token
            const data = await AccessToken.getCurrentAccessToken();
            if (!data) {
                throw new Error('Something went wrong obtaining access token');
            }

            const credential = FacebookAuthProvider.credential(data.accessToken);
            const signInResult = await signInWithCredential(auth, credential);

            // Get additional user info
            const additionalUserInfo = getAdditionalUserInfo(signInResult);
            const facebookPictureUrl = additionalUserInfo.profile.picture.data.url;
            console.log(facebookPictureUrl)

            // Save profile picture URL to AsyncStorage
            await AsyncStorage.setItem('facebookProfilePicture', facebookPictureUrl);
        } catch (error) {
            alert(`Facebook Login Error: ${error.message}`);
        }
    }

    return (
        <Button
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
    );
};

export default FacebookLoginButton;
