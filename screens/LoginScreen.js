import React, { useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { UserContext } from '../context/UserContext'

// IMPORT CUSTOM COMPONENTS
import { Formik } from 'formik';
import {
  Colors,
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  StyledInputLabel,
  StyledTextInput,
  RightIcon,
  StyledBtn,
  BtnText,
  MsgBox,
  Line,
  ExtraText,
  ExtraView,
  TextLink,
  TextLinkContent,
} from '../components/styles';

// Icns
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

// colors
const { brand, darklight, primary } = Colors;

// Keyboard avoiding view
import KeyboardAvoidingWrapper from '../components/KeyboardAvoidingWrapper';

// AXOIS IMPORT
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [hidepassword, setHidePassword] = useState(true);
  const [message, setMessage] = useState();
  const [messageType, setMessageType] = useState();

  const handleLogin = (credentials, setSubmitting) => {
    handleMessage(null);
    const url = 'https://warm-eyrie-98820.herokuapp.com/user/signin';

    axios
      .post(url, credentials)
      .then((response) => {
        const result = response.data;
        const { message, status, data } = result;

        if (status !== 'SUCCESS') {
          handleMessage(message, status);
        } else {
          navigation.navigate('Welcome', { ...data[0] });
        }
        setSubmitting(false);
      })
      .catch((err) => {
        console.log(err.JSON());
        setSubmitting(false);
        handleMessage(
          'An error occured. Check thy network connect and try again'
        );
      });
  };

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message);
    setMessageType(type);
  };

  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer>
        <StatusBar style='dark' />
        <InnerContainer>
          <PageLogo
            resizeMode='cover'
            source={require('../assets/img/imgLogo.png')}
          />
          <PageTitle>Dwon's Shop</PageTitle>
          <SubTitle>Account Login</SubTitle>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email == '' || values.password == '') {
                handleMessage('Please fill all the fields');
                setSubmitting(false);
              } else {
                // values.email.toLowerCase();
                handleLogin(values, setSubmitting);
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              isSubmitting,
            }) => (
              <StyledFormArea>
                <CustomTextInput
                  label='Email Address'
                  icon='mail'
                  placeholder='example@example.com'
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email.toLowerCase()}
                  onChangeText={handleChange('email')}
                  keyboardType='email-address'
                />

                <CustomTextInput
                  label='Password'
                  icon='lock'
                  placeholder='* * * * * * *'
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidepassword}
                  isPassword={true}
                  hidepassword={hidepassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox type={messageType}>{message}</MsgBox>
                {!isSubmitting && (
                  <StyledBtn onPress={handleSubmit}>
                    <BtnText>Login</BtnText>
                  </StyledBtn>
                )}
                {isSubmitting && (
                  <StyledBtn disabled={true}>
                    <ActivityIndicator size='large' color={primary} />
                  </StyledBtn>
                )}
                <Line />
                <StyledBtn google={true} onPress={handleSubmit}>
                  <Fontisto name='google' size={25} color={primary} />
                  <BtnText google={true}>Sign in with Google</BtnText>
                </StyledBtn>
                <ExtraView>
                  <ExtraText>Don't have an acount already?</ExtraText>
                  <TextLink onPress={() => navigation.navigate('Signup')}>
                    <TextLinkContent>Signup</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const CustomTextInput = ({
  label,
  icon,
  isPassword,
  hidepassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidepassword)}>
          <Ionicons
            name={hidepassword ? 'md-eye-off' : 'md-eye'}
            size={30}
            color={darklight}
          />
        </RightIcon>
      )}
    </View>
  );
};

export default LoginScreen;
