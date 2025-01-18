import PremiumGenerator from '@/components/dashboard/premium-generator';
import { Providers } from '@/components/providers';
import {
  getProducts,
  getSubscription,
  getUser,
  getUserDetails
} from '@/utils/supabase/queries';
import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function PremiumGeneratorPage() {
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

  if (!subscription) {
    redirect('/dashboard/main');
  }
  return (
    <Providers>
      {subscription ? (
        <PremiumGenerator
          userDetails={userDetails}
          user={user}
          products={products}
          subscription={subscription}
        />
      ) : (
        <p>NICE TRY BUDDY</p>
      )}
    </Providers>
  );
}
