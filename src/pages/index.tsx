import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('Hello World');
  }, []);

  return (
    <div className="grid min-h-screen place-content-center bg-gray-50">
      <div className="debug p-4">
        <h1 className="text-4xl font-bold text-red-500">Hello World</h1>
        <div className="mx-auto mt-6 size-24 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
}
