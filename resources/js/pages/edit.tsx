import Layout from "@/layouts/appLayout";
import { Head, Link, useForm } from "@inertiajs/react";

type EditProps = {
    chirp: {
        id: number;
        message: string;
    };
};

export default function Edit({ chirp }: EditProps) {
    const { data, setData, put, processing, errors } = useForm({
        message: chirp.message,
    });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        put(`/chirps/${chirp.id}`);
    };

    return (
        <>
            <Head title="Edit Chirp" />

            <Layout>
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold mt-8">Edit Chirp</h1>

                    <div className="card bg-base-100 shadow mt-8">
                        <div className="card-body">
                            <form onSubmit={submit}>
                                <div className="form-control w-full">
                                    <textarea
                                        value={data.message}
                                        onChange={(e) => setData("message", e.target.value)}
                                        className={`textarea textarea-bordered w-full resize-none ${
                                            errors.message ? "textarea-error" : ""
                                        }`}
                                        rows={4}
                                        maxLength={255}
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

                                <div className="card-actions justify-between mt-4">
                                    <Link href="/" className="btn btn-ghost btn-sm">
                                        Cancel
                                    </Link>

                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-sm"
                                        disabled={processing}
                                    >
                                        Update Chirp
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
}