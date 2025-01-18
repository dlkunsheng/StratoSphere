'use client'

import {Providers} from '@/components/providers';
import { FcGoogle } from 'react-icons/fc'
import { Button, Center, Text } from '@chakra-ui/react'

export default function GoogleButton() {
  return (
    <Providers>
    <Center p={8}>
      <Button w={'full'} maxW={'md'} variant={'outline'} leftIcon={<FcGoogle />}>
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </Center>
    </Providers>
  )
}