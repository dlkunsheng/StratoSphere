'use client';

import PasswordSignIn from '@/components/auth-ui/PasswordSignIn';
import EmailSignIn from '@/components/auth-ui/EmailSignIn';
import OauthSignIn from '@/components/auth-ui/OauthSignIn';
import ForgotPassword from '@/components/auth-ui/ForgotPassword';
import UpdatePassword from '@/components/auth-ui/UpdatePassword';
import SignUp from '@/components/auth-ui/Signup';
import { Flex, Text } from '@chakra-ui/react';
import { HSeparator } from '../separator/Separator';

export default function AuthUI(props: any) {
  return (
    <Flex
      direction={'column'}
      my="auto"
      mt={{ base: '30px', md: '70px', lg: 'auto' }}
      maxW={{ md: 'full', lg: '420px' }}
    >
      <Text fontSize="32px" fontWeight={'bold'} color="gray.900">
        {props.viewProp === 'signup'
          ? 'Sign Up'
          : props.viewProp === 'forgot_password'
          ? 'Forgot Password'
          : props.viewProp === 'update_password'
          ? 'Update Password'
          : props.viewProp === 'email_signin'
          ? 'Email Sign In'
          : 'Sign In'}
      </Text>
      <Text fontSize="16px" color="gray.t00">
        {props.viewProp === 'signup'
          ? 'Enter your email and password to sign up!'
          : props.viewProp === 'forgot_password'
          ? 'Enter your email to get a passoword reset link!'
          : props.viewProp === 'update_password'
          ? 'Choose a new password for your account!'
          : props.viewProp === 'email_signin'
          ? 'Enter your email to get a magic link!'
          : 'Enter your email and password to sign in!'}
      </Text>
      {props.viewProp !== 'update_password' &&
        props.viewProp !== 'signup' &&
        props.allowOauth && (
          <>
            <OauthSignIn />
            <HSeparator my="20px" />
          </>
        )}
      {props.viewProp === 'password_signin' && (
        <PasswordSignIn
          allowEmail={props.allowEmail}
          redirectMethod={props.redirectMethod}
        />
      )}
      {props.viewProp === 'email_signin' && (
        <EmailSignIn
          allowPassword={props.allowPassword}
          redirectMethod={props.redirectMethod}
          disableButton={props.disableButton}
        />
      )}
      {props.viewProp === 'forgot_password' && (
        <ForgotPassword
          allowEmail={props.allowEmail}
          redirectMethod={props.redirectMethod}
          disableButton={props.disableButton}
        />
      )}
      {props.viewProp === 'update_password' && (
        <UpdatePassword redirectMethod={props.redirectMethod} />
      )}
      {props.viewProp === 'signup' && (
        <SignUp
          allowEmail={props.allowEmail}
          redirectMethod={props.redirectMethod}
        />
      )}
    </Flex>
  );
}
