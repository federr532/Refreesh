/** @type {import('next').NextConfig} */
module.exports = {
    experimental: {
      serverComponentsExternalPackages: [
        '@react-email/components',
        '@react-email/render',
        '@react-email/tailwind'
    ],
    },
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "scontent.cdninstagram.com",
        },
      ],
    },
  }
