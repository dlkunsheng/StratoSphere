'use client'

import {Providers} from '@/components/providers';
import { SiMessenger } from 'react-icons/si'
import { Button, Center, Text } from '@chakra-ui/react'

export default function MessengerButton() {
  return (
    <Providers>
    <Center p={8}>
      <Button w={'full'} maxW={'md'} colorScheme={'messenger'} leftIcon={<SiMessenger />}>
        <Center>
          <Text>Send to Messenger</Text>
        </Center>
      </Button>
    </Center>
    </Providers>
  )
}