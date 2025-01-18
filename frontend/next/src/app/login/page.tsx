'use client'

import {
  Flex,
  Box,
  //FormControl,
  //FormLabel,
  Input,
  //Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  //useColorModeValue,
} from '@chakra-ui/react';

import {Field} from '@/components/ui/field';
import {Checkbox} from '@/components/ui/checkbox';
import {useColorModeValue} from '@/components/ui/color-mode';

export default function SimpleCard() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack gap={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            {/* to enjoy all of our cool <Text color={'blue.400'}>features</Text> ✌️ */}
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack gap={4}>
            <Field id="email">
              <Text>Email address</Text>
              <Input type="email" />
            </Field>
            <Field id="password">
              <Text>Password</Text>
              <Input type="password" />
            </Field>
            <Stack gap={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}