export default function Welcome() {
  return (
    <div data-theme="lofi" className="min-h-screen flex flex-col bg-base-200 font-sans">
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
        <div className="max-w-2xl mx-auto">
          <div className="card bg-base-100 shadow mt-8">
            <div className="card-body">
              <h1 className="text-3xl font-bold">Welcome to Chirper!</h1>
              <p className="mt-4 text-base-content/60">
                This is your brand new Laravel application. Time to make it sing
                (or chirp)!
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="footer footer-center p-5 bg-base-300 text-base-content text-xs">
        <div>
          <p>© 2025 Chirper - Built with Laravel and ❤️</p>
        </div>
      </footer>
    </div>
  );
}