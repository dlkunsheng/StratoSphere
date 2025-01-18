'use client';

import React from 'react';
import { signUp } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  Flex,
  useColorModeValue,
  Link,
  FormLabel,
  Box,
  Input,
  Button
} from '@chakra-ui/react';

// Define prop type with allowEmail boolean
interface SignUpProps {
  allowEmail: boolean;
  redirectMethod: string;
}

export default function SignUp({ allowEmail, redirectMethod }: SignUpProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textColor = useColorModeValue('navy.700', 'white');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, signUp, router);
    setIsSubmitting(false);
  };

  return (
    <Box mb="auto" mt="20px">
      <Box mb="8px">
        <form noValidate={true} onSubmit={(e) => handleSubmit(e)}>
          <FormLabel
            htmlFor="email"
            display="flex"
            ms="4px"
            fontWeight="500"
            color={textColor}
            mb="8px"
          >
            Email
          </FormLabel>
          <Input
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{ base: '0px', md: '0px' }}
            id="email"
            placeholder="name@example.com"
            type="email"
            name="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            mb="24px"
            fontWeight="500"
            size="lg"
          />
          <FormLabel
            htmlFor="password"
            display="flex"
            ms="4px"
            fontWeight="500"
            color={textColor}
            mb="8px"
          >
            Password
          </FormLabel>
          <Input
            isRequired={true}
            variant="auth"
            fontSize="sm"
            ms={{ base: '0px', md: '0px' }}
            id="password"
            placeholder="Password"
            type="password"
            name="password"
            autoComplete="current-password"
            mb="24px"
            fontWeight="500"
            size="lg"
          />
          <Button
            fontSize="sm"
            variant="brand"
            fontWeight="500"
            w="100%"
            h="50"
            mb="24px"
            type="submit"
            isLoading={isSubmitting}
          >
            Sign in
          </Button>
        </form>
      </Box>

      <Flex direction="column">
        <Link
          href="/dashboard/signin/forgot_password"
          color={textColor}
          fontWeight="medium"
        >
          Forgot your password?
        </Link>
        <Link
          href="/dashboard/signin/password_signin"
          color={textColor}
          fontWeight="medium"
        >
          Already have an account?
        </Link>
        {allowEmail && (
          <Link
            href="/dashboard/signin/email_signin"
            color={textColor}
            fontWeight="medium"
          >
            Sign in via magic link
          </Link>
        )}
      </Flex>
    </Box>
  );
}
