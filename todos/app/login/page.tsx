
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {label} from "@/components/ui/label";
import { emaillogin, signup } from './actions'
import { OAuthButtons } from './oauth-signin';
import {redirect} from 'next/navigation';
import {createClient} from '@/utils/supabase/server';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = await createClient();

  const {
    data: {user},
  }
  = await supabase.auth.getUser();

  if (user) {
    return redirect('/todos')
  }
  return (
    <section className='h-[calc(100vh-57px)] flex justify-center items-center'>
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">login</CardTitle>
          <CardDescription>
            Enter your email to login
          </CardDescription>
        </CardHeader>
<CardContent className='flex flex-col gap-4'>
  <form id="login-form" className='grid gap-4'>  
    <div className="grid gap-2">
      <label htmlFor="email">Email</label>
      <input 
        id="email" 
        name="email" 
        type="email" 
        placeholder="y@example.com" 
        required 
      />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
      <label htmlFor="password">Password</label>
      </div>
      <input 
        id="password" 
        name="password" 
        type="password" 
        minLength={6} 
        required 
      />
      </div>
      {searchParams.message && (
        <div className="text-sm font-medium text-destructive">
          {searchParams.message}
        </div>
      )}
      <button formAction={emaillogin} className="w-full">
        Log in
      </button>
    </form>
    <OAuthButtons />
    <div className="text-center text-sm">
      Don&apos;t have an account?{" "}
      <button form="login-form" className="underline">
        sign up
      </button>
      </div>
    </CardContent>
    </Card>
    </section>
  );
}