/**
 * yarn dev | npm run dev - will always be in development mode
 * we can simulate modes by updating the VITE_ENV of .env.development
 */

export const currentMode = Number(import.meta.env.VITE_ENV) || 0;
export const config = [
  // dev mode
  {
    api_url: 'https://example.com/api',
  },
  //   staging mode
  {
    api_url: 'https://example.com/api',
  },
  // prod mode
  {
    api_url: 'https://example.com/api',
  },
];

export default {
  project: 'vite-swc-ts-tailwind',
  settings: config[currentMode],
};
