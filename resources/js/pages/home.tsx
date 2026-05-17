import Layout from "@/layouts/appLayout";
import { Head } from "@inertiajs/react";

type Chirp = {
    author: string;
    message: string;
    time: string;
};

type HomeProps = {
    chirps: Chirp[];
};

export default function Home({ chirps }: HomeProps) {
    return (
        <>
            <Head title="Home" />

            <Layout>
                <div className="max-w-2xl mx-auto">
                    {chirps.map((chirp: Chirp, index: number) => (
                        <div
                            key={index}
                            className="card bg-base-100 shadow mt-8"
                        >
                            <div className="card-body">
                                <div className="font-semibold">
                                    {chirp.author}
                                </div>

                                <div className="mt-1">
                                    {chirp.message}
                                </div>

                                <div className="text-sm text-gray-500 mt-2">
                                    {chirp.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Layout>
        </>
    );
}