export default {
  // Also supports server
  target: 'static',
  css: [
    '~/assets/css/tailwind.css',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  build: {
    analyze: true,
  },
  debug: true,
  compatibilityDate: '2025-02-01'
};