import type { Metadata } from 'next'
import { AuthForm } from './auth-form/AuthForm'

export const metadata: Metadata = {
	title: 'Login'
}

export default function LoginPage() {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="bg-neutral-900 p-8 rounded-lg shadow-md">
				<h2 className="font-semibold mb-4">Вход</h2>
				<AuthForm isLogin />
			</div>
		</div>
	)
}
