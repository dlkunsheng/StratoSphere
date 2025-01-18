/*eslint-disable*/
'use client';

// import ManageSubscriptionButton from './ManageSubscriptionButton';
import Card from '@/components/card/Card';
import DashboardLayout from '@/components/layout';
import { HSeparator } from '@/components/separator/Separator';
import { Database } from '@/types_db';
import { handleRequest } from '@/utils/auth-helpers/client';
import { updateEmail, updateName } from '@/utils/auth-helpers/server';
import {
  Button,
  Flex,
  FormLabel,
  Input,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import { redirect, useRouter } from 'next/navigation';
import { useState } from 'react';

type Subscription = Database['public']['Tables']['subscriptions']['Row'];
type Product = Database['public']['Tables']['products']['Row'];
type Price = Database['public']['Tables']['prices']['Row'];
interface ProductWithPrices extends Product {
  prices: Price[];
}
interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

interface Props {
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
  userDetails: { [x: string]: any } | null;
}

export default function Settings(props: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const textColor = useColorModeValue('#120F43', 'white');
  const placeholderColor = useColorModeValue(
    { color: 'gray.500' },
    { color: 'whiteAlpha.600' }
  );
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.200');

  // -------------- Input Value Handler --------------

  const handleSubmitEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Check if the new email is the same as the old email
    if (e.currentTarget.newEmail.value === props.user.email) {
      e.preventDefault();
      setIsSubmitting(false);
      return;
    }
    handleRequest(e, updateEmail, router);
    setIsSubmitting(false);
  };

  const handleSubmitName = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true);
    // Check if the new name is the same as the old name
    if (e.currentTarget.fullName.value === props.user.user_metadata.full_name) {
      e.preventDefault();
      setIsSubmitting(false);
      return;
    }
    handleRequest(e, updateName, router);
    setIsSubmitting(false);
  };

  if (!props.user) {
    return redirect('/dashboard/signin');
  }

  return (
    <>
      <DashboardLayout
        userDetails={props.userDetails}
        user={props?.user}
        products={props.products}
        subscription={props.subscription}
        title="Account Settings"
        description="Profile settings."
      >
        <Flex
          w="100%"
          direction="column"
          position="relative"
          mt={{ base: '70px', md: '0px', xl: '0px' }}
        >
          <Flex
            mx="auto"
            w={{ base: '100%', md: '100%', xl: '100%' }}
            maxW="100%"
            justify="center"
            direction={{ base: 'column', md: 'row' }}
          >
            <Card
              // minW={{ base: '100%' }}
              maxW={{ base: '100%' }}
              px={{ base: '10px', md: '20px', lg: '20px' }}
              py={{ base: '28px', md: '20px', lg: '30px' }}
              w="820px"
              h="min-content"
              me={{ base: '0px', md: '20px' }}
              mb={{ base: '20px', md: '0px' }}
            >
              <Text
                ps={{ base: '10px', md: '32px' }}
                fontSize={{ base: 'lg', md: '30px' }}
                color={textColor}
                fontWeight="800"
              >
                Account Settings
              </Text>
              <Text
                ps={{ base: '10px', md: '32px' }}
                fontSize={{ base: 'sm', md: 'md' }}
                color="gray.500"
                fontWeight="500"
                mb="30px"
              >
                Here you can change your account information
              </Text>
              <FormLabel
                px={{ base: '10px', md: '32px' }}
                display="flex"
                ms="10px"
                htmlFor={'fullName'}
                fontSize="md"
                color={textColor}
                letterSpacing="0px"
                fontWeight="bold"
                _hover={{ cursor: 'pointer' }}
                lineHeight="100%"
                mb="12px"
              >
                Your Name
                <Text
                  fontSize={'14px'}
                  color="gray.500"
                  fontWeight="500"
                  ms="4px"
                >
                  {' '}
                  (30 characters maximum)
                </Text>
              </FormLabel>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                px={{ base: '10px', md: '32px' }}
                mb={{ base: '30px', md: '0px' }}
              >
                <form
                  style={{ width: '100%' }}
                  id="nameForm"
                  onSubmit={(e) => handleSubmitName(e)}
                >
                  <Input
                    color={textColor}
                    border="1px solid"
                    borderRadius={'45px'}
                    borderColor={borderColor}
                    h="60px"
                    type="text"
                    name="fullName"
                    id="fullName"
                    defaultValue={props.user?.user_metadata.full_name ?? ''}
                    fontWeight="500"
                    placeholder="Please enter your full name"
                    _placeholder={placeholderColor}
                    _focus={{ borderColor: 'none' }}
                    mb={{ base: '14px', md: '26px' }}
                    me="20px"
                  />
                </form>
                <Button
                  py="20px"
                  px="16px"
                  fontSize="sm"
                  ms="10px"
                  variant="primary"
                  borderRadius="45px"
                  h="54px"
                  form="nameForm"
                  type="submit"
                  _hover={{
                    boxShadow:
                      '0px 21px 27px -10px rgba(96, 60, 255, 0.48) !important',
                    bg:
                      'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%) !important',
                    _disabled: {
                      bg:
                        'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)'
                    }
                  }}
                  minW="150px"
                >
                  Update name
                </Button>
                <HSeparator
                  bg="gray.200"
                  mt={{ base: '30px', md: '0px' }}
                  display={{ md: 'none' }}
                  alignSelf="center"
                  maxW="90%"
                />
              </Flex>
              {/* <Text
                px={{ base: '10px', md: '36px' }}
                color="red"
                mb="20px"
                display={nameError?.status ? 'block' : 'none'}
              >
                {nameError?.message}
              </Text> */}
              <FormLabel
                px={{ base: '10px', md: '32px' }}
                display="flex"
                htmlFor={'email'}
                fontSize="md"
                flexDirection={{ base: 'column', md: 'row' }}
                color={textColor}
                letterSpacing="0px"
                fontWeight="bold"
                _hover={{ cursor: 'pointer' }}
                lineHeight="100%"
                mb="12px"
              >
                Your Email
                <Text
                  fontSize={'14px'}
                  color="gray.500"
                  fontWeight="500"
                  ms={{ base: '0px', md: '4px' }}
                  mt={{ base: '6px', md: '0px' }}
                >
                  {' '}
                  (We will email you to verify the change)
                </Text>
              </FormLabel>
              <Flex
                direction={{ base: 'column', md: 'row' }}
                px={{ base: '10px', md: '32px' }}
              >
                <form
                  style={{ width: '100%' }}
                  id="emailForm"
                  onSubmit={(e) => handleSubmitEmail(e)}
                >
                  <Input
                    type="text"
                    name="newEmail"
                    id="email"
                    color={textColor}
                    border="1px solid"
                    borderRadius={'45px'}
                    borderColor={borderColor}
                    h="60px"
                    fontWeight="500"
                    placeholder="Please enter your email"
                    _placeholder={placeholderColor}
                    _focus={{ borderColor: 'none' }}
                    defaultValue={props.user.email ?? ''}
                    mb={{ base: '14px', md: '26px' }}
                    me="20px"
                  />
                </form>
                <Button
                  py="20px"
                  px="16px"
                  fontSize="sm"
                  type="submit"
                  form="emailForm"
                  variant="primary"
                  borderRadius="45px"
                  ms="10px"
                  h="54px"
                  _hover={{
                    boxShadow:
                      '0px 21px 27px -10px rgba(96, 60, 255, 0.48) !important',
                    bg:
                      'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%) !important',
                    _disabled: {
                      bg:
                        'linear-gradient(15.46deg, #4A25E1 26.3%, #7B5AFF 86.4%)'
                    }
                  }}
                  minW="150px"
                >
                  Update email
                </Button>
              </Flex>
            </Card>
          </Flex>
        </Flex>
      </DashboardLayout>
    </>
  );
}
