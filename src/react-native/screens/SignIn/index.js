import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import ErrorMessage from './ErrorMessage';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import SignInButton from './SignInButton';
import FacebookLoginButton from './FacebookLoginButton';
import SeparatorWithText from './SeparatorWithText';
import SignUpButton from './SignUpButton';
import ForgotPasswordButton from './ForgotPasswordButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    if (email === '' || password === '') {
      setError('Email and password are mandatory.')
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        {!!error && <ErrorMessage message={error} />}

        <Image
          source={require('../../../assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <FacebookLoginButton />

        <SeparatorWithText text="OR" />

        <View>
          <EmailInput
            value={email}
            onChangeText={setEmail}
          />
          <PasswordInput
            value={password}
            onChangeText={setPassword}
          />

          <SignInButton onPress={handleSignIn} />

          <ForgotPasswordButton navigation={navigation} onPress={() => navigation.navigate('ForgotPassword')} />

          <SignUpButton onPress={() => navigation.navigate('SignUp')} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  logo: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default SignIn;
