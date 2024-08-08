import { Toaster } from '@/components/ui/sonner';
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <section className="font-inter">
      {/* <header>
        <nav>...</nav>
      </header> */}

      <main>
        <Outlet />
        <Toaster />
      </main>
    </section>
  );
}
