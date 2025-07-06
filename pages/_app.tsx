import '../globals.css';
import { ComponentType } from 'react';
import ClientAppWrapper, { LanguageProvider } from '../components/ClientAppWrapper';

interface MyAppProps {
  Component: ComponentType<any>;
  pageProps: any;
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <LanguageProvider>
      <ClientAppWrapper>
        <Component {...pageProps} />
      </ClientAppWrapper>
    </LanguageProvider>
  );
} 