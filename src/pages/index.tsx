import { useEffect } from 'react';
import { gStatePersist } from '@/lib/store/persist';

export default function Home() {
  const isDarkMode = gStatePersist.useState((s) => s.isDarkMode);
  const counter = gStatePersist.useState((s) => s.counter);

  useEffect(() => {
    console.log('Hello World: ', import.meta.env.VITE_ENV, import.meta.env.MODE);
  }, []);

  useEffect(() => {
    console.log('TEST: ', counter);
  }, [counter]);

  return (
    <div className="grid min-h-screen place-content-center bg-gray-50">
      <div className="debug p-4">
        <h1 className="font-inter text-4xl font-bold text-red-500">Hello World</h1>
        <div className="mx-auto mt-6 size-24 rounded-full bg-green-500"></div>

        <div className="mt-4 flex justify-center">
          <button
            className="mx-auto rounded-md border px-4 py-2 hover:bg-gray-200"
            style={{
              background: isDarkMode ? 'black' : 'white',
              color: isDarkMode ? 'white' : 'black',
            }}
            onClick={() => {
              gStatePersist.update((s) => {
                s.isDarkMode = !s.isDarkMode;
              });
            }}
          >
            Toggle
          </button>
          <button
            className="mx-auto rounded-md border px-4 py-2 hover:bg-gray-200"
            onClick={() => {
              // gStatePersist.update((s) => {
              //   s.counter += 1;
              // });
            }}
          >
            Counter: {counter}
          </button>
        </div>
      </div>
    </div>
  );
}
