import '@/lib/no-console-prod';
import '@/styles/global.css';
import { Routes } from '@generouted/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '~console/theme-detect';
import { Toaster } from './components/ui/sonner';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
      <main className="font-inter">
        <Routes />
        <Toaster />
      </main>
    </>
  </StrictMode>,
);
