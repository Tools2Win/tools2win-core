import React, { useEffect } from 'react';
import { signInWithCredential, FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../../../firebase';

const FacebookLoginButton = () => {
    useEffect(() => {
        // Load the Facebook SDK script
        (function (d, s, id) {
            const fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            const js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        // Initialize Facebook SDK once it's loaded
        window.fbAsyncInit = () => {
            window.FB.init({
                appId: '456224369281980',
                cookie: true,
                xfbml: true,
                version: 'v10.0'
            });
        };
    }, []);

    const handleSignInWithFacebook = () => {
        window.FB.login((response) => {
            if (response.authResponse) {
                const { accessToken } = response.authResponse;
                const credential = FacebookAuthProvider.credential(accessToken);
                signInWithCredential(auth, credential).catch((error) => {
                    console.error(`Facebook Login Error: ${error.message}`);
                });
            }
        }, { scope: 'email,public_profile' });
    };

    return (
        <button
            onClick={handleSignInWithFacebook}
            style={{
                backgroundColor: '#1877F2',
                color: '#fff',
                padding: '10px 15px',
                borderRadius: '4px',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
            }}
        >
            Login with Facebook
        </button>
    );
};

export default FacebookLoginButton;
