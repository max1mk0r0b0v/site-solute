import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-24 text-center sm:px-8 lg:px-10 lg:py-32">
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-700">
        404
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        העמוד לא נמצא.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        ייתכן שהקישור השתנה או שהעמוד עדיין לא נוסף לאתר.
      </p>
      <Link
        href="/"
        className="premium-sheen mt-8 inline-flex rounded-full bg-gradient-to-r from-slate-950 via-indigo-950 to-blue-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
      >
        חזרה לעמוד הבית
      </Link>
    </div>
  );
}
