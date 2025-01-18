'use client';
import { requestPasswordUpdate } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Input,
  useColorModeValue,
  Link
} from '@chakra-ui/react';

// Define prop type with allowEmail boolean
interface ForgotPasswordProps {
  allowEmail: boolean;
  redirectMethod: string;
  disableButton?: boolean;
}

export default function ForgotPassword({
  allowEmail,
  redirectMethod
}: ForgotPasswordProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;

  const textColor = useColorModeValue('navy.700', 'white');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, requestPasswordUpdate, router);
    setIsSubmitting(false);
  };

  return (
    <Box mb={8}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormLabel
          htmlFor="email"
          display="flex"
          ms="4px"
          fontSize="sm"
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

      <Flex direction="column">
        <Link
          href="/dashboard/signin/password_signin"
          color={textColor}
          fontWeight="medium"
        >
          Sign in with email and password
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
        <Link
          href="/dashboard/signin/signup"
          color={textColor}
          fontWeight="medium"
        >
          Don't have an account? Sign up
        </Link>
      </Flex>
    </Box>
  );
}
