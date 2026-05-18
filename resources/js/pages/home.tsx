import Layout from "@/layouts/appLayout";
import { Head } from "@inertiajs/react";
import ChirpCard from "@/components/chirp";


type Chirp = {
    id: number;
    message: string;
    created_at: string;
    user?: {
        name: string;
        email: string;
    } | null;
};

type HomeProps = {
    chirps: Chirp[];
};

export default function Home({ chirps }: HomeProps) {
    return (
        <>
            <Head title="Home Feed" />

            <Layout>
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mt-8">
                        Latest Chirps
                    </h1>

                    <div className="space-y-4 mt-8">
                        {chirps.length > 0 ? (
                            chirps.map((chirp) => (
                                <ChirpCard
                                    key={chirp.id}
                                    chirp={chirp}
                                />
                            ))
                        ) : (
                            <div className="hero py-12">
                                <div className="hero-content text-center">
                                    <div>
                                        <svg
                                            className="mx-auto h-12 w-12 opacity-30"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                            />
                                        </svg>

                                        <p className="mt-4 text-base-content/60">
                                            No chirps yet. Be the first to
                                            chirp!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Layout>
        </>
    );
}