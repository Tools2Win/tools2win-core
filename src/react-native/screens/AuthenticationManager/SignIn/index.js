import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import ErrorMessage from './ErrorMessage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../firebase';
import { Image, Input, Button } from '@rneui/themed';
import KeyboardAvoidingView from '../../../components/KeyboardAvoidingView';
const logo = require('../../../../assets/logo.png');

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignIn = async () => {
    if (email === '' || password === '') {
      setError('email and password are required')
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <KeyboardAvoidingView>
      {!!error && <ErrorMessage message={error} />}
      <Image source={logo} />
      <Input autoCapitalize='none' value={email} onChangeText={setEmail} placeholder='Email' leftIcon={{ type: 'material', name: 'mail' }} />
      <Input autoCapitalize='none' secureTextEntry value={password} onChangeText={setPassword} placeholder='Password' leftIcon={{ type: 'material', name: 'lock' }} />
      <Button title="Login" onPress={handleSignIn} />

      <Button type='clear' title="Forgot Password?" onPress={() => navigation.navigate('ForgotPassword')} />
      <Button type='clear' title="New User? Sign Up" onPress={() => navigation.navigate('SignUp')} />
    </KeyboardAvoidingView>
  );
};

export default SignIn;
