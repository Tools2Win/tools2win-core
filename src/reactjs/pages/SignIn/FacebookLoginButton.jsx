import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { signInWithCredential, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase';

const FacebookLoginButton = () => {
    const responseFacebook = async (response) => {
        if (response.accessToken) {
            const credential = FacebookAuthProvider.credential(response.accessToken);
            try {
                const signInResult = await signInWithCredential(auth, credential);
                // Get additional user info, save profile picture, etc.
                const additionalUserInfo = signInResult.additionalUserInfo;
                const facebookPictureUrl = additionalUserInfo.profile.picture.data.url;
                console.log(facebookPictureUrl);

                // Save profile picture URL to localStorage
                localStorage.setItem('facebookProfilePicture', facebookPictureUrl);
            } catch (error) {
                console.error(`Facebook Login Error: ${error.message}`);
            }
        }
    };

    return (
        <FacebookLogin
            appId="456224369281980" // Your Facebook App ID
            fields="name,email,picture"
            callback={responseFacebook}
            cssClass="facebook-button"
            icon="fa-facebook"
        />
    );
};

export default FacebookLoginButton;
