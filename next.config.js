module.exports = {
    images: {
      domains: ['cdn.mec.ca'],
    },
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'https://www.mec.ca/api/v1/:path*',
          },
        ]
    },
};