// module.exports = {
// 	transpilePackages: ["@react-spring/web", "react-hexgrid"],
// 	/* Your Next.js config */
// 	images: {
// 		remotePatterns: [
// 			{
// 				protocol: "https",
// 				hostname: "ik.imagekit.io",
// 				port: "443",
// 				pathname: "/5ywj5edvn/**",
// 			},
// 		],
// 	},
// };

/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ["@react-spring/web", "react-hexgrid"],
	/* Your Next.js config */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "ik.imagekit.io",
				port: "",
				pathname: "/5ywj5edvn/**",
			},
		],
	},
};

module.exports = nextConfig;
