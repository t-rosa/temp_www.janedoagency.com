/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizeCss: true,
		scrollRestoration: true,
		// typedRoutes: true,
	},
	images: {
		remotePatterns: [
			{ hostname: "cdn.sanity.io" },
			{ hostname: "source.unsplash.com" },
		],
	},
};

module.exports = nextConfig;
