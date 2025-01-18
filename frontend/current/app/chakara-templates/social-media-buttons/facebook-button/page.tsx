'use client'

import {Providers} from '@/components/providers';
import { FaFacebook } from 'react-icons/fa'
import { Button, Center, Text } from '@chakra-ui/react'

export default function FacebookButton() {
  return (
    <Providers>
    <Center p={8}>
      <Button w={'full'} maxW={'md'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>
        <Center>
          <Text>Continue with Facebook</Text>
        </Center>
      </Button>
    </Center>
    </Providers>
  )
}