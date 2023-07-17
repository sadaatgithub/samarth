/** @type {import('next').NextConfig} */


// module.exports = {
//   async redirects() {
//     return [
//       {
//         source: '/about',
//         destination: '/',
//         permanent: true,
//       },
//     ];
//   },
// };

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'],
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/web/:slug*',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/wp-includes/:slug*',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/website/:slug*',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/news/:slug*',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/2019/:slug*',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/wp1/:slug*',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/wp2/:slug*',
  //       destination: '/',
  //       permanent: true,
  //     },
  //     {
  //       source: '/cms/:slug*',
  //       destination: '/',
  //       permanent: true,
  //     },
  //   ];
  // },
}

module.exports = nextConfig

