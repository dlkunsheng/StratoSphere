'use client';

 
import { signInWithOAuth } from '@/utils/auth-helpers/client';
import { type Provider } from '@supabase/supabase-js';
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { useColorModeValue } from '@chakra-ui/system';
import { Box, Button, Icon, Input } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type OAuthProviders = {
  name: Provider;
  displayName: string;
  icon: IconType;
};

export default function OauthSignIn() {
  // Chakra color mode 
  const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
  const googleText = useColorModeValue('navy.700', 'white');
  const googleHover = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.300' },
  );
  const googleActive = useColorModeValue(
    { bg: 'secondaryGray.300' },
    { bg: 'whiteAlpha.200' },
  );
  const oAuthProviders: OAuthProviders[] = [
    {
      name: 'google',
      displayName: 'Google',
      icon: FcGoogle
    }
    /* Add desired OAuth providers here */
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true); // Disable the button while the request is being handled
    await signInWithOAuth(e);
    setIsSubmitting(false);
  };

  return (
    <Box  mt="40px">
      {oAuthProviders.map((provider) => (
        <form
          key={provider.name}
          className="pb-2"
          onSubmit={(e) => handleSubmit(e)}
        >
          <Input type="hidden" name="provider" value={provider.name} />
          <Button
            fontSize="sm"
            me="0px" 
            py="15px"
            h="50px"
            w="100%"
            borderRadius="16px"
            bg={googleBg}
            color={googleText}
            fontWeight="500"
            _hover={googleHover}
            _active={googleActive}
            _focus={googleActive}
            type="submit"
          >
            <Icon as={ provider.icon}  w="20px" h="20px" me="10px" />
            {provider.displayName}
          </Button> 
        </form>
      ))}
    </Box>
  );
}
