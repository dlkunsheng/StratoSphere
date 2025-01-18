import Subscription from '@/components/dashboard/subscription';
import { Providers } from '@/components/providers';
import {
  getProducts,
  getSubscription,
  getUser,
  getUserDetails
} from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function SubscriptionPage() {
  const supabase = createClient();
  const [user, userDetails, products, subscription] = await Promise.all([
    getUser(supabase),
    getUserDetails(supabase),
    getProducts(supabase),
    getSubscription(supabase)
  ]);

  if (!user) {
    return redirect('/dashboard/signin');
  }
  return (
    <Providers>
      <Subscription
        userDetails={userDetails}
        user={user}
        products={products}
        subscription={subscription}
      />
    </Providers>
  );
}
