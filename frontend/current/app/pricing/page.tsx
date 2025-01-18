import Pricing from '@/components/pricing';
import { Providers } from '@/components/providers';
import {
  getProducts,
  getUser,
  getSubscription
} from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';

export default async function PricingPage() {
  const supabase = createClient();
  const [user, products, subscription] = await Promise.all([
    getUser(supabase),
    getProducts(supabase),
    getSubscription(supabase)
  ]);

  return (
    <Providers>
      <Pricing user={user} products={products} subscription={subscription} />
    </Providers>
  );
}
