import { useGlobalState } from '@/lib/store';
import { useHookstate } from '@hookstate/core';
import { useEffect } from 'react';

export default function Home() {
  const gState = useGlobalState();
  const counter = useHookstate(gState.counter);

  useEffect(() => {
    console.log('Hello World: ', import.meta.env.VITE_ENV, import.meta.env.MODE);
  }, []);

  useEffect(() => counter.subscribe((v) => console.log('gState test: ', v)), []);

  return (
    <div className="grid min-h-screen place-content-center bg-gray-50">
      <div className="debug p-4">
        <h1 className="font-inter text-4xl font-bold text-red-500">Hello World</h1>
        <div className="mx-auto mt-6 size-24 rounded-full bg-green-500"></div>

        <div className="mt-4 flex justify-center">
          <button
            className="mx-auto rounded-md border px-4 py-2 hover:bg-gray-200"
            onClick={() => counter.set((v) => v + 1)}
          >
            Click me
          </button>
        </div>
      </div>
    </div>
  );
}
