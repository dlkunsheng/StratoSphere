'use client'

import {Providers} from '@/components/providers';
import { SiLinkedin } from 'react-icons/si'
import { Button, Center, Text } from '@chakra-ui/react'

export default function LinkedinButton() {
  return (
    <Providers>
    <Center p={8}>
      <Button w={'full'} maxW={'md'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
        <Center>
          <Text>Send to Linkedin</Text>
        </Center>
      </Button>
    </Center>
    </Providers>
  )
}