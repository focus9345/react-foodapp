import { ReactNode } from 'react';

export default function PageWrapper( { children }: { children: ReactNode }) {
    return (
            <main className="flex flex-col content-start gap-4 px-10 py-12 w-screen items-center justify-between">
                <div className="w-full md:w-5/6 lg:w-3/4 justify-start">
                    { children }
                </div>
            </main>
    );
}