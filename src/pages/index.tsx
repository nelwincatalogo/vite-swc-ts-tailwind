import { AlertDialogDemo } from '@/components/alert-sample';
import { DialogCloseButton } from '@/components/dialog-sample';
import SEO from '@/components/seo';
import SonnerSample from '@/components/sonner-sample';
import { Button } from '@/components/ui/button';
import { gStatePersist } from '@/lib/store/persist';
import { Link } from '@/router';
import { useEffect } from 'react';

export default function Home() {
  const counter = gStatePersist.useState((s) => s.counter);

  useEffect(() => {
    console.log('ENVs: ', import.meta.env.VITE_ENV, import.meta.env.MODE);
  }, []);

  return (
    <>
      <SEO />

      <section>
        <div className="bg-gray-200">
          <div className="flex min-h-screen flex-col items-center justify-center gap-4">
            <h1 className="text-center text-4xl font-bold text-red-500">Vite-SWC-TS-Tailwind Starter Template</h1>

            <div className="mt-4 rounded-full bg-gray-300 px-3 py-1 text-xs">Counter Sample</div>
            <div className="space-x-4">
              <Button
                variant={'outline'}
                onClick={() => {
                  gStatePersist.update((s) => {
                    ++s.counter;
                    console.log('TEST: ', s.counter);
                    console.error('TEST: ', s.counter);
                  });
                }}
              >
                Persisted Counter: {counter}
              </Button>

              <Link to="/test" className="mx-auto">
                <Button className="" variant={'outline'}>
                  Test Page
                </Button>
              </Link>
            </div>

            <div className="mt-4 rounded-full bg-gray-300 px-3 py-1 text-xs">Available Fonts</div>
            <div className="flex gap-4">
              <h1 className="text-center font-inter text-4xl font-bold text-amber-500">Inter Font</h1>
              <h1 className="text-center font-poppins text-4xl font-bold text-blue-500">Popppins Font</h1>
            </div>

            <div className="mt-4 rounded-full bg-gray-300 px-3 py-1 text-xs">Toast Example</div>
            <SonnerSample />

            <div className="mt-4 rounded-full bg-gray-300 px-3 py-1 text-xs">Dialog Example</div>
            <div className="flex gap-4">
              <AlertDialogDemo />
              <DialogCloseButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
