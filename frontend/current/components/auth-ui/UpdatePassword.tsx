'use client';

import { updatePassword } from '@/utils/auth-helpers/server';
import { handleRequest } from '@/utils/auth-helpers/client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormLabel,
  Input,
  useColorModeValue
} from '@chakra-ui/react';

interface UpdatePasswordProps {
  redirectMethod: string;
}

export default function UpdatePassword({
  redirectMethod
}: UpdatePasswordProps) {
  const router = redirectMethod === 'client' ? useRouter() : null;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const textColor = useColorModeValue('navy.700', 'white');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await handleRequest(e, updatePassword, router);
    setIsSubmitting(false);
  };

  return (
    <Box mb={8}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormLabel
          htmlFor="password"
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="8px"
        >
          New Password
        </FormLabel>
        <Input
          isRequired={true}
          variant="auth"
          fontSize="sm"
          ms={{ base: '0px', md: '0px' }}
          mb="24px"
          fontWeight="500"
          size="lg"
          id="password"
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="current-password"
        />
        <FormLabel
          htmlFor="password"
          display="flex"
          ms="4px"
          fontSize="sm"
          fontWeight="500"
          color={textColor}
          mb="8px"
        >
          Confirm New Password
        </FormLabel>
        <Input
          isRequired={true}
          variant="auth"
          fontSize="sm"
          ms={{ base: '0px', md: '0px' }}
          mb="24px"
          fontWeight="500"
          size="lg"
          id="passwordConfirm"
          placeholder="Password"
          type="password"
          name="passwordConfirm"
          autoComplete="current-password"
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
  );
}
