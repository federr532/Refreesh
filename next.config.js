/** @type {import('next').NextConfig} */
module.exports = {
    experimental: {
      serverActions: true,
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
