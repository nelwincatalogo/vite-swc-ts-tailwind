import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('Hello World: ', import.meta.env.VITE_ENV, import.meta.env.MODE);
  }, []);

  return (
    <div className="grid min-h-screen place-content-center bg-gray-50">
      <div className="debug p-4">
        <h1 className="font-inter text-4xl font-bold text-red-500">Hello World</h1>
        <div className="mx-auto mt-6 size-24 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
}
