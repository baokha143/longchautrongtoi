// src/pages/_app.tsx
import '../app/globals.css'; // Đường dẫn đến file CSS chính
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
