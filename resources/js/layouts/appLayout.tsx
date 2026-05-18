import { Link, usePage } from "@inertiajs/react";
import { ReactNode } from "react";

export default function Layout({
    children,
    title = "Chirper",
}: {
    children: ReactNode;
    title?: string;
}) {
    const { auth } = usePage().props as {
        auth?: {
            user?: {
                name: string;
            } | null;
        };
    };

    return (
        <div
            data-theme="lofi"
            className="min-h-screen flex flex-col bg-base-200 font-sans"
        >
            <nav className="navbar bg-base-100 px-4">
                <div className="flex w-full items-center justify-between">
                    <Link href="/" className="btn btn-ghost text-xl">
                        🐦 Chirper
                    </Link>

                    <div className="flex gap-2">
                        {auth?.user ? (
                            <>
                                <span className="text-sm self-center">
                                    {auth.user.name}
                                </span>

                                <Link
                                    href="/logout"
                                    method="post"
                                    as="button"
                                    className="btn btn-ghost btn-sm"
                                >
                                    Logout
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link href="/login" className="btn btn-ghost btn-sm">
                                    Sign In
                                </Link>

                                <Link href="/register" className="btn btn-primary btn-sm">
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </nav>

            <main className="flex-1 container mx-auto px-4 py-8">
                {children}
            </main>

            <footer className="footer footer-center p-5 bg-base-300 text-base-content text-xs">
                <div>
                    <p>
                        © 2026 Chirper - Built with Laravel and ❤️
                    </p>
                </div>
            </footer>
        </div>
    );
}