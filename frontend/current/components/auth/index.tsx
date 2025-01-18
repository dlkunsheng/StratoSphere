'use client';

import Footer from '@/components/footer/FooterAuthDefault';
import NavLink from '@/components/link/NavLink';
import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
interface DefaultAuthLayoutProps extends PropsWithChildren {
  children: JSX.Element;
  illustrationBackground: string;
  viewProp: any;
}

export default function DefaultAuthLayout(props: DefaultAuthLayoutProps) {
  const { children, illustrationBackground } = props;
  return (
    <Flex position="relative" h="max-content">
      <Flex
        minH="100vh"
        w="100%"
        maxW={{ base: '90%', md: '66%', lg: '1313px' }}
        mx="auto"
        pt={{ sm: '0px', md: '0px' }}
        px={{ lg: '30px', xl: '0px' }}
        ps={{ xl: '70px' }}
        justifyContent="start"
        direction="column"
      >
        <Link
          href="/"
          width={'fit-content'}
          mt={10}
          mb={{ base: '', md: '', lg: '120px', xl: '150px' }}
        >
          <Flex
            align="center"
            ps={{ base: '25px', lg: '0px' }}
            pt={{ lg: '0px', xl: '0px' }}
            w="fit-content"
          >
            <Icon
              as={FaChevronLeft}
              me="12px"
              h="13px"
              w="8px"
              color="gray.500"
            />
            <Text ms="0px" fontSize="sm" color="gray.500">
              Back to the website
            </Text>
          </Flex>
        </Link>
        {children}
        <Box
          display={{ base: 'none', md: 'block' }}
          h="100%"
          minH="100vh"
          w={{ lg: '50vw', '2xl': '44vw' }}
          position="absolute"
          right="0px"
        >
          <Link href="/">
            <Flex
              bg={`url(${illustrationBackground})`}
              justify="center"
              align="end"
              w="100%"
              h="100%"
              bgSize="cover"
              bgPosition="50%"
              position="absolute"
            />
          </Link>
        </Box>
        <Footer />
      </Flex>
    </Flex>
  );
}
