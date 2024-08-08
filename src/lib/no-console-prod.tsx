// overide consoles in production
if (import.meta.env.PROD || import.meta.env.VITE_ENV == '2') {
  console.log = () => {};
  console.debug = () => {};
  console.info = () => {};
  console.warn = () => {};
  // console.error = () => {};
}
