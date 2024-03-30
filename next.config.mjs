/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
remotePatterns: [
    {
        protocol: 'https',
        domain: 'dogsapi.origamid.dev',
    }
]
    }

}