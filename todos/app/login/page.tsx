import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <div className="mt-4 text-center text-sm">
        Don&apos;t have an account?{" "}
      </div>
      <button formAction={login} className="w-full">Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  )
}