import Layout from "@/layouts/appLayout";
import { Head, usePage } from "@inertiajs/react";
import ChirpCard from "@/components/chirp";


// this needs to be consisten across both chirp props
type Chirp = {
    id: number;
    message: string;
    created_at: string;
    updated_at: string;
    user?: {
        name: string;
        email: string;
    } | null;
    can: {
        update: boolean;
        delete: boolean;
    };
};

type HomeProps = {
    chirps: Chirp[]; // a list of chirps to pass through the home page 
};

export default function Home({ chirps }: HomeProps) {
    const { props } = usePage<{
        errors: {
            message?: string;
        };
    }>();

    const errors = props.errors || {};
    const oldMessage = "";
    return (
        <>
            <Head title="Home Feed" />

            <Layout>
                <div className="card bg-base-100 shadow mt-8">
                    <div className="card-body">
                        <form method="POST" action="/chirps">
                            <div className="form-control w-full">
                                <textarea
                                    name="message"
                                    placeholder="What's on your mind?"
                                    className={`textarea textarea-bordered w-full resize-none ${
                                        errors.message ? "textarea-error" : ""
                                    }`}
                                    rows={4}
                                    maxLength={255}
                                    defaultValue={oldMessage}
                                    required
                                />

                                {errors.message && (
                                    <div className="label">
                                        <span className="label-text-alt text-error">
                                            {errors.message}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="mt-4 flex items-center justify-end">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-sm"
                                >
                                    Chirp
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                    <div className="space-y-4 mt-8">
                        {chirps.length > 0 ? (
                            chirps.map((chirp) => (
                                <ChirpCard key={chirp.id} chirp={chirp} />
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
            </Layout>
        </>
    );
}