export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold">
            Golf Charity Subscription Platform
          </h2>
          <p className="text-sm text-white/60 mt-1">
            Play. Support. Win.
          </p>
        </div>

        <div className="mt-4 md:mt-0 text-sm text-white/50">
          © 2026 All rights reserved
        </div>
      </div>
    </footer>
  );
}