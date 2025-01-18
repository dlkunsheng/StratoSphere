import Footer from '@/components/footer/FooterAdmin';
import Navbar from '@/components/navbar/NavbarAdmin';
import { routes } from '@/components/routes';
import Sidebar from '@/components/sidebar/Sidebar';
import { Database } from '@/types_db';
import { getActiveRoute } from '@/utils/navigation';
import { Box, useDisclosure } from '@chakra-ui/react';
import { User } from '@supabase/supabase-js';
import { usePathname } from 'next/navigation';
import {
  PlanContext,
  OpenContext,
  ProductsContext,
  SubscriptionContext,
  UserContext,
  UserDetailsContext,
  ApiKeyContext
} from '@/contexts/layout';
import React from 'react';

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
  children: React.ReactNode;
  title: string;
  description: string;
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
  userDetails: { [x: string]: any } | null;
}

const DashboardLayout: React.FC<Props> = (props: Props) => {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [plan, setPlan] = React.useState({
    product: 'prod_QfhYC6AAtI5IKW',
    price: 'price_1PoM9GDWNoHJSR0zmwpicH8y'
  });
  const [apiKey, setApiKey] = React.useState('default');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <UserContext.Provider value={props.user}>
      <UserDetailsContext.Provider value={props.user}>
        <OpenContext.Provider value={{ open, setOpen }}>
          <PlanContext.Provider value={{ plan, setPlan }}>
            <ProductsContext.Provider value={props.products}>
              <SubscriptionContext.Provider value={props.subscription}>
                <ApiKeyContext.Provider value={{ apiKey, setApiKey }}>
                  <Box>
                    <Sidebar routes={routes} />
                    <Box
                      pt={{ base: '70px', md: '80px' }}
                      float="right"
                      minHeight="100vh"
                      height="100%"
                      overflow="auto"
                      position="relative"
                      maxHeight="100%"
                      w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
                      maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
                      transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
                      transitionDuration=".2s, .2s, .35s"
                      transitionProperty="top, bottom, width"
                      transitionTimingFunction="linear, linear, ease"
                    >
                      <Navbar
                        onOpen={onOpen}
                        logoText={'Horizon UI Boilerplate'}
                        userDetails={props.userDetails}
                        brandText={getActiveRoute(routes, pathname)}
                      />
                      <Box
                        mx="auto"
                        p={{ base: '20px', md: '30px' }}
                        pe="20px"
                        minH="100vh"
                      >
                        {props.children}
                      </Box>
                      <Footer />
                    </Box>
                  </Box>
                </ApiKeyContext.Provider>
              </SubscriptionContext.Provider>
            </ProductsContext.Provider>
          </PlanContext.Provider>
        </OpenContext.Provider>
      </UserDetailsContext.Provider>
    </UserContext.Provider>
  );
};

export default DashboardLayout;
