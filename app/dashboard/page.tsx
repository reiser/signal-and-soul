import Link from "next/link";

export const metadata = {
  title: "Dashboard — DevShot Studio",
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#fbf8f3]">
      <header className="border-b border-line bg-paper">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 font-display text-base font-semibold text-ink/80"
          >
            <span
              aria-hidden="true"
              className="grid h-7 w-7 place-items-center rounded-full bg-accent text-paper"
            >
              ◆
            </span>
            <span>DevShot Studio</span>
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
          >
            Back to magazine
          </Link>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">
          Welcome back
        </h1>
        <p className="mt-2 text-ink-soft">
          Your DevShot Studio workspace is ready.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Link
            href="/"
            className="rounded-2xl border border-line bg-paper p-6 transition-colors hover:border-accent"
          >
            <h2 className="font-display text-lg font-semibold">Projects</h2>
            <p className="mt-1 text-sm text-ink-soft">
              Open the magazine project to keep editing.
            </p>
          </Link>
          <div className="rounded-2xl border border-line bg-paper p-6">
            <h2 className="font-display text-lg font-semibold">Activity</h2>
            <p className="mt-1 text-sm text-ink-soft">
              No recent activity yet.
            </p>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-6">
            <h2 className="font-display text-lg font-semibold">Settings</h2>
            <p className="mt-1 text-sm text-ink-soft">
              Manage workspace members and billing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
