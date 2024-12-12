import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        <form method="POST" action="/api/auth/login" className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 mt-1 border rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
          >
            Log In
          </button>
        </form>
        <div className="flex justify-between items-center text-sm text-gray-600">
          <Link href="/signup" className="hover:underline">
            Sign Up
          </Link>
          <Link href="/forgotPassword" className="hover:underline">
            Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  );
}