/** @type {import('next').NextConfig} */
const nextConfig = {
	rewrites: () => {
		return [
			{
				source: "/auth/google",
				destination: `${process.env.SERVER_URL}/auth/google`,
			},
			{
				source: "/auth/github",
				destination: `${process.env.SERVER_URL}/auth/github`,
			},
		]
	},
	env: {
		SERVER_URL: process.env.SERVER_URL,
		DOMAIN: process.env.DOMAIN,
	},
	images: {
		remotePatterns: [
			{
				protocol: process.env.PROTOCOL,
				hostname: process.env.DOMAIN,
				port: process.env.PORT,
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "lh3.googleusercontent.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
				port: "",
				pathname: "/**",
			},
		],
	},
}

export default nextConfig
