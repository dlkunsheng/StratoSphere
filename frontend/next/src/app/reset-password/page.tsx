'use client'

import {
  Button,
  Flex,
  //FormControl,
  //FormLabel,
  Heading,
  Input,
  Stack,
  Text
  //useColorModeValue,
} from '@chakra-ui/react';

import {useColorModeValue} from '@/components/ui/color-mode';
import { Field } from '@/components/ui/field';

export default function ResetPasswordForm() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        gap={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Enter new password
        </Heading>
        <Field id="email" required={true}>
          <Text>Email address</Text>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </Field>
        <Field id="password" required={true}>
          <Text>Password</Text>
          <Input type="password" />
        </Field>
        <Stack gap={6}>
          <Button
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}>
            Submit
          </Button>
        </Stack>
      </Stack>
    </Flex>
  )
}