module.exports = {
  async redirects() {
    return [
      {
        source: '/search',
        destination: '/',
        permanent: true,
      },
      {
        source: '/api/data',
        destination:
          'https://script.google.com/macros/s/AKfycbw5PJ8ehZkqAgMuzs4NCLiZA9zNfqKY-ILVZAcoRBoL1sInlAKdntYS1yA4QttJHhTs/exec',
        permanent: false,
      },
    ];
  },
  reactStrictMode: true,
  experimental: {
    reactRoot: 'concurrent',
  },
};
