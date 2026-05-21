import { Link, router } from "@inertiajs/react";

type ChirpProps = {
    chirp: {
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
};



export default function ChirpCard({ chirp }: ChirpProps) {
    const handleDelete = () => {
        if (confirm("Are you sure you want to delete this chirp?")) {
            router.delete(`/chirps/${chirp.id}`);
        }
    };

    const createdAt = new Date(chirp.created_at);
    const updatedAt = new Date(chirp.updated_at);
    const wasEdited = updatedAt.getTime() - createdAt.getTime() > 5000;

    return (
        <div className="card bg-base-100 shadow">
            <div className="card-body">
                <div className="flex space-x-3">
                    <div className="avatar">
                        <div className="size-10 rounded-full">
                            <img
                                src={
                                    chirp.user
                                        ? `https://avatars.laravel.cloud/${encodeURIComponent(chirp.user.email)}`
                                        : "https://avatars.laravel.cloud/f61123d5-0b27-434c-a4ae-c653c7fc9ed6?vibe=stealth"
                                }
                                alt={chirp.user ? `${chirp.user.name}'s avatar` : "Anonymous User"}
                                className="rounded-full"
                            />
                        </div>
                    </div>

                    <div className="min-w-0 flex-1">
                        <div className="flex justify-between w-full">
                            <div className="flex items-center gap-1">
                                <span className="text-sm font-semibold">
                                    {chirp.user ? chirp.user.name : "Anonymous"}
                                </span>

                                <span className="text-base-content/60">·</span>

                                <span className="text-sm text-base-content/60">
                                    {chirp.created_at.slice(0, 10)}
                                </span>

                                {wasEdited && (
                                    <>
                                        <span className="text-base-content/60">·</span>
                                        <span className="text-sm text-base-content/60 italic">
                                            edited
                                        </span>
                                    </>
                                )}
                            </div>
                            

                            {/* goes to the edit link if they can edit it */}
                            {(chirp.can.update || chirp.can.delete) && (
                                <div className="flex gap-1">
                                    {chirp.can.update && (
                                        <Link
                                            href={`/chirps/${chirp.id}/edit`}
                                            className="btn btn-ghost btn-xs"
                                        >
                                            Edit
                                        </Link>
                                    )}

                                    {chirp.can.delete && (
                                        <button
                                            onClick={handleDelete}
                                            className="btn btn-ghost btn-xs text-error"
                                        >
                                            Delete
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>

                        <p className="mt-1">{chirp.message}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}