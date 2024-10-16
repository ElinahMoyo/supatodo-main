import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { emaillogin, signup } from './actions'
import { useSearchParams } from 'next/navigation'
import { OAuthButtons } from './oauth-signin';

export default function LoginPage({
}) {
  return (
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">login</CardTitle>
          <CardDescription>
            Enter your email to login
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-col gap-4'>
        <form> 
          <OAuthButtons />   
    <div className="grid gap-2">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" placeholder="y@example.com" required />
      </div>
      <div className="grid gap-2">
        <div className="flex items-center">
      <label htmlFor="password">Password:</label>
      </div>
      <input id="password" name="password" type="password" minLength={6} required />
      </div>
        <div className="text-sm font-medium text-destructive">
        </div>
      <button formAction={emaillogin} className="w-full">Log in</button>
      </form>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
      </div>
      <button form="login-form" className="underline">
        sign up
      </button>
    </CardContent>
    </Card>
  );
}