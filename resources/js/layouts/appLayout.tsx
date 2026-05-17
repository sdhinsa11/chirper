import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';

export default function Layout({ 
    children, 
    title = "Chirper" 
}: { 

    // This means children can be valid react elements and a title needs to be a string
    children: ReactNode;
    title?: string;
}) {
    return (
        <div
            data-theme="lofi"
            className="min-h-screen flex flex-col bg-base-200 font-sans"
        >
            <nav className="navbar bg-base-100 px-4">
                <div className="flex w-full items-center justify-between">
                    <a href="/" className="btn btn-ghost text-xl">
                        🐦 Chirper
                    </a>

                    <div className="flex gap-2">
                        <a href="#" className="btn btn-ghost btn-sm">
                            Sign In
                        </a>

                        <a href="#" className="btn btn-primary btn-sm">
                            Sign Up
                        </a>
                    </div>
                </div>
            </nav>

            <main className="flex-1 container mx-auto px-4 py-8">
                {children}
            </main>

            <footer className="footer footer-center p-5 bg-base-300 text-base-content text-xs">
                <div>
                    <p>© {new Date().getFullYear()} Chirper - Built with Laravel and ❤️</p>
                </div>
            </footer>
        </div>
    );
}