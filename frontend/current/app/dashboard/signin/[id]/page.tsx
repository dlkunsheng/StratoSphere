import DefaultAuth from '@/components/auth';
import AuthUI from '@/components/auth/AuthUI';
import { Providers } from '@/components/providers';
import {
  getAuthTypes,
  getDefaultSignInView,
  getRedirectMethod,
  getViewTypes
} from '@/utils/auth-helpers/settings';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import illustration from '/public/img/auth/auth.png';

export default async function SignIn({
  params,
  searchParams
}: {
  params: { id: string };
  searchParams: { disable_button: boolean };
}) {
  const { allowOauth, allowEmail, allowPassword } = getAuthTypes();
  const viewTypes = getViewTypes();
  const redirectMethod = getRedirectMethod();

  // Declare 'viewProp' and initialize with the default value
  let viewProp: string;

  // Assign url id to 'viewProp' if it's a valid string and ViewTypes includes it
  if (typeof params.id === 'string' && viewTypes.includes(params.id)) {
    viewProp = params.id;
  } else {
    const preferredSignInView =
      cookies().get('preferredSignInView')?.value || null;
    viewProp = getDefaultSignInView(preferredSignInView);
    return redirect(`/dashboard/signin/${viewProp}`);
  }

  // Check if the user is already logged in and redirect to the account page if so
  const supabase = createClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  if (user && viewProp !== 'update_password') {
    return redirect('/dashboard/main');
  } else if (!user && viewProp === 'update_password') {
    return redirect('/dashboard/signin');
  }
  return (
    <Providers>
      <DefaultAuth
        viewProp={viewProp}
        illustrationBackground={illustration.src}
      >
        <div>
          <AuthUI
            viewProp={viewProp}
            user={user}
            allowPassword={allowPassword}
            allowEmail={allowEmail}
            redirectMethod={redirectMethod}
            disableButton={searchParams.disable_button}
            allowOauth={allowOauth}
          />
        </div>
      </DefaultAuth>
    </Providers>
  );
}
