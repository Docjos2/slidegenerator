export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <section className="lg:col-span-3">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 sm:p-6 dark:bg-neutral-900 dark:border-neutral-800">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-gray-100">
              Canvas
            </h2>
            <div className="text-xs text-gray-500 dark:text-gray-400">75% width</div>
          </div>
          <div className="aspect-video w-full rounded-lg bg-gray-100 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700" />
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button className="h-9 rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900 text-sm font-medium hover:opacity-90 transition">Add Slide</button>
            <button className="h-9 rounded-lg border border-gray-200 dark:border-neutral-700 text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-neutral-900 hover:bg-gray-50 dark:hover:bg-neutral-800 transition">Import</button>
          </div>
        </div>
      </section>
      <aside className="lg:col-span-1">
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm p-4 sm:p-5 dark:bg-neutral-900 dark:border-neutral-800">
          <h3 className="text-sm font-semibold text-gray-900 mb-3 dark:text-gray-100">Tools</h3>
          <div className="space-y-3">
            <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-950 p-3">
              <p className="text-xs text-gray-600 dark:text-gray-300">Prompts and suggestions will appear here.</p>
            </div>
            <div className="rounded-lg border border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-950 p-3">
              <p className="text-xs text-gray-600 dark:text-gray-300">Slide outline and metadata.</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}