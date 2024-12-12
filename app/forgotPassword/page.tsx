import Link from 'next/link';

export default function ForgotPasswordPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800">Forgot Password</h2>
                <p className="text-sm text-center text-gray-600">
                    Enter your email address and we’ll send you a link to reset your password.
                </p>
                <form method="POST" action="/api/auth/forgot-password" className="space-y-4">
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
                    <button
                        type="submit"
                        className="w-full p-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                    >
                        Send Reset Link
                    </button>
                </form>
                <div className="text-sm text-center text-gray-600">
                    <Link href="/" className="text-indigo-600 hover:underline">
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
