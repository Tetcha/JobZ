import '../styles/globals.css';
import 'swiper/css';
import 'react-quill/dist/quill.snow.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
import { ToastContainer } from 'react-toastify';

import { DynamicLayout, ProgressLoadingBar } from '../src/core/components';

const queryClient = new QueryClient({});

import 'react-toastify/dist/ReactToastify.css';

import { UserProviderContext } from '@context/UserContext';
import { ToggleProvider } from 'react-toggle-hook';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FEMBDB700Z" />
            <Script type="text/javascript" src="/static/js/google.script.js" />
            <ToggleProvider>
                <QueryClientProvider client={queryClient}>
                    <UserProviderContext>
                        <ThemeProvider enableSystem={true} attribute="class">
                            <ToastContainer autoClose={1500} />
                            <ProgressLoadingBar />
                            <DynamicLayout>
                                <Component {...pageProps} />
                            </DynamicLayout>
                            <ReactQueryDevtools initialIsOpen={false} />
                        </ThemeProvider>
                    </UserProviderContext>
                </QueryClientProvider>
            </ToggleProvider>
        </>
    );
}

export default MyApp;
