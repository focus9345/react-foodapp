import { ReactNode } from 'react';

export default function PageWrapper( { children }: { children: ReactNode }) {
    return (
     
            <main className="content-start gap-4 px-6 py-10 w-full h-screen items-center justify-center">
            { children }
            </main>

    );
}