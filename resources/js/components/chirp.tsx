type ChirpProps = {
    chirp: {
        id: number;
        message: string;
        created_at: string;
        user?: {
            name: string;
            email: string;
        } | null;
    };
};

export default function ChirpCard({ chirp }: ChirpProps) {
    return (
        <div className="card bg-base-100 shadow">
            <div className="card-body">
                <div className="flex space-x-3">
                    {chirp.user ? (
                        <div className="avatar">
                            <div className="size-10 rounded-full">
                                <img
                                    src={`https://avatars.laravel.cloud/${encodeURIComponent(
                                        chirp.user.email
                                    )}`}
                                    alt={`${chirp.user.name}'s avatar`}
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="avatar placeholder">
                            <div className="size-10 rounded-full">
                                <img
                                    src="https://avatars.laravel.cloud/f61123d5-0b27-434c-a4ae-c653c7fc9ed6?vibe=stealth"
                                    alt="Anonymous User"
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                    )}

                    <div className="min-w-0">
                        <div className="flex items-center gap-1">
                            <span className="text-sm font-semibold">
                                {chirp.user
                                    ? chirp.user.name
                                    : "Anonymous"}
                            </span>

                            <span className="text-base-content/60">·</span>

                            <span className="text-sm text-base-content/60">
                                {new Date(
                                    chirp.created_at
                                ).toLocaleDateString()}
                            </span>
                        </div>

                        <p className="mt-1">
                            {chirp.message}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}