import { ReactNode } from 'react';

export default function PageWrapper( { children }: { children: ReactNode }) {
    return (
        <div className="md:flex md:flex-col pt-2 px-4 space-y-2 md:flex-grow h-full border-1 border-yellow-400">
            { children }
        </div>
    );
}