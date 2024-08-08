import '@/lib/no-console-prod';
import '@/styles/global.css';
import { Routes } from '@generouted/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import '~console/theme-detect';
import { Toaster } from './components/ui/sonner';

const helmetContext = {};

createRoot(document.getElementById('root')!).render(
  <>
    <StrictMode>
      <HelmetProvider context={helmetContext}>
        <main className="font-inter">
          <Routes />
          <Toaster />
        </main>
      </HelmetProvider>
    </StrictMode>
  </>,
);
