import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

// IMPORT CUSTOM COMPONENT
import KeyboardAvoidingWrapper from '../../components/KeyboardAvoidingWrapper';
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
} from '../../components/styles';
import { Formik } from 'formik';
import { Octicons, Ionicons, Fontisto, FontAwesome5 } from '@expo/vector-icons';

// COlors
const { brand, darklight, primary } = Colors;

const CheckoutScreen = () => {
  return (
    <KeyboardAvoidingWrapper>
      <StyledContainer style={{ padding: 100 }}>
        <StatusBar style='dark' />
        <InnerContainer>
          <PageTitle>Dwon's Shop</PageTitle>
          <SubTitle>Checkout Page</SubTitle>
          <Formik
            initialValues={{
              name: '',
              email: '',
              address: '',
              phone: '',
              confirmPassword: '',
              cardName: '',
              cardNumber: '',
              expire: '',
              ccv: '',
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              isSubmitting,
            }) => (
              <StyledFormArea style={{}}>
                <CustomTextInput
                  label='Full Name'
                  icon='person'
                  placeholder='John Doe'
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                <CustomTextInput
                  label='Email Address'
                  icon='mail'
                  placeholder='example@example.com'
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email.toLowerCase()}
                  keyboardType='email-address'
                />
                <CustomTextInput
                  label='Address'
                  icon='location'
                  placeholder='12 UPSA Road'
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('address')}
                  onBlur={handleBlur('address')}
                  value={values.email.toLowerCase()}
                  // keyboardType='email-address'
                />
                <CustomTextInput
                  label='Phone Number'
                  icon='device-mobile'
                  placeholder='0592324719'
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                <Line />
                <View
                  style={{ flexDirection: 'row', justifyContent: 'center' }}
                >
                  <SubTitle>Card Detail</SubTitle>
                </View>
                <CustomTextInput
                  label='Phone Number'
                  icon='credit-card'
                  placeholder='8728 9203 5283 9720'
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                <CustomTextInput
                  label='Expiry Date'
                  icon='calendar'
                  placeholder='10/20'
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                <CustomTextInput
                  label='CCV'
                  icon='credit-card'
                  placeholder='097'
                  placeholderTextColor={darklight}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />

                <StyledBtn onPress={handleSubmit}>
                  <BtnText>Pay</BtnText>
                </StyledBtn>
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
  isDate,
  showDatePicker,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )}
      {!isDate && <StyledTextInput {...props} />}

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

export default CheckoutScreen;
