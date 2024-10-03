  'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'
import { Provider } from '@supabase/supabase-js'

export async function emaillogin(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/login?message=authentication failed')
  }

  revalidatePath('/', 'layout')
  redirect('/todos')
}

export async function signup(formData: FormData) {
  const supabase = createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function oAuthSignIn(provider: Provider) {
  if(!provider) {
    return redirect('/login?message=No provider selected')
  }
  const supabase = createClient();
  const redirectUrl = getUrl("/auth/callback")
}

function getUrl(arg0: string) {
  throw new Error('Function not implemented.')
}
