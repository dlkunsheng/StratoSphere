'use client';

//   Custom components
import { useSupabase } from '@/app/supabase-provider';
import Brand from '@/components/sidebar/components/Brand';
import Links from '@/components/sidebar/components/Links';
import SidebarCard from '@/components/sidebar/components/SidebarCard';
import { UserContext } from '@/contexts/layout';
import { IRoute } from '@/types/types';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import { PropsWithChildren, useContext } from 'react';
import { FiLogOut } from 'react-icons/fi';

// FUNCTIONS

interface SidebarContent extends PropsWithChildren {
  routes: IRoute[];
  [x: string]: any;
}
function SidebarContent(props: SidebarContent) {
  const router = useRouter();
  const { supabase } = useSupabase();
  const { routes, setApiKey } = props;
  const user = useContext(UserContext);
  console.log(user.user_metadata.avatar_url);
  const textColor = useColorModeValue('#120F43', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.300');
  const shadowPillBar = useColorModeValue(
    '4px 17px 40px 4px rgba(112, 144, 176, 0.08)',
    'none'
  );
  return (
    <Flex
      direction="column"
      height="100%"
      pt="36px"
      pb="26px"
      borderRadius="30px"
      maxW="285px"
      w="100%"
    >
      <Brand />
      <Stack direction="column" mb="auto" mt="8px" ps="20px" pe="16px">
        <Box ps="0px" pe={{ md: '0px', '2xl': '0px' }}>
          <Links routes={routes} />
        </Box>
      </Stack>

      <Box
        mt="60px"
        width={'100%'}
        display={'flex'}
        justifyContent={'center'}
        ps="20px"
        pe="20px"
      >
        <SidebarCard />
      </Box>
      <Flex
        mt="20px"
        justifyContent="center"
        alignItems="center"
        boxShadow={shadowPillBar}
        borderRadius="30px"
        p="14px"
        px="34px"
      >
        <Avatar
          h="34px"
          w="34px"
          me="10px"
          src={user.user_metadata.avatar_url}
        />
        <Text color={textColor} fontSize="sm" fontWeight="700" me="10px">
          {user.user_metadata.full_name ? user.user_metadata.full_name : 'User'}
        </Text>
        <Button
          ms="auto"
          variant="transparent"
          border="1px solid"
          borderColor={borderColor}
          borderRadius="full"
          w="34px"
          h="34px"
          px="0px"
          minW="34px"
          justifyContent={'center'}
          alignItems="center"
          onClick={(e) => {
            supabase.auth.signOut();
            router.push('/');
          }}
        >
          <Icon as={FiLogOut} width="16px" height="16px" color="inherit" />
        </Button>
      </Flex>
    </Flex>
  );
}

export default SidebarContent;
