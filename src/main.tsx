import '@/styles/global.css';
import { Routes } from '@generouted/react-router';
import { createRoot } from 'react-dom/client';
import '~console/theme-detect';
import { Toaster } from '@/components/ui/sonner';

createRoot(document.getElementById('root')!).render(
  <div className="font-inter">
    <Routes />
    <Toaster />
  </div>,
);
