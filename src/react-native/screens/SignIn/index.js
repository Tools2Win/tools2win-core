import React, { useState } from 'react';
import { StyleSheet, View, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
//import ErrorMessage from './ErrorMessage';
//import EmailInput from './EmailInput';
//import PasswordInput from './PasswordInput';
//import SignInButton from './SignInButton';
//import SignUpButton from './SignUpButton';
//import ForgotPasswordButton from './ForgotPasswordButton';
//import { signInWithEmailAndPassword } from 'firebase/auth';
//import { auth } from '../../../firebase';
import { Text } from 'react-native';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  return <Text>wtffffff</Text>

  // const handleSignIn = async () => {
  //   if (email === '' || password === '') {
  //     setError('Email and password are mandatory.')
  //     return;
  //   }

  //   try {
  //     await signInWithEmailAndPassword(auth, email, password);
  //   } catch (error) {
  //     setError(error.message)
  //   }
  // }

  // return <Text>asd;lfkja;lsdkjf;laksjdf;laskdjf</Text>;

  // return (
  //   <KeyboardAvoidingView
  //     behavior={Platform.OS === "ios" ? "padding" : "height"}
  //     style={styles.container}
  //   >
  //     <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
  //       <Text>Testa;lsdkjfa;lksdjfl;aksdfl;jad;lfkdj</Text>
  //       <Text>Testa;lsdkjfa;lksdjfl;aksdfl;jad;lfkdj</Text>
  //       <Text>Testa;lsdkjfa;lksdjfl;aksdfl;jad;lfkdj</Text>
  //       <Text>Testa;lsdkjfa;lksdjfl;aksdfl;jad;lfkdj</Text>
  //       <Text>Testa;lsdkjfa;lksdjfl;aksdfl;jad;lfkdj</Text>
  //       {/* {!!error && <ErrorMessage message={error} />}

  //       <Image
  //         source={require('../../../assets/logo.png')}
  //         style={styles.logo}
  //         resizeMode="contain"
  //       />

  //       <View>
  //         <EmailInput
  //           value={email}
  //           onChangeText={setEmail}
  //         />
  //         <PasswordInput
  //           value={password}
  //           onChangeText={setPassword}
  //         />

  //         <SignInButton onPress={handleSignIn} />

  //         <ForgotPasswordButton navigation={navigation} onPress={() => navigation.navigate('ForgotPassword')} />

  //         <SignUpButton onPress={() => navigation.navigate('SignUp')} />
  //       </View> */}
  //     </ScrollView>
  //   </KeyboardAvoidingView>
  // );
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
