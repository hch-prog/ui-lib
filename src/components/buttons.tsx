export default function Buttons() {
  return (
    <div className="flex flex-wrap gap-4 items-center p-4">
      <button className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium bg-zinc-900 text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-100">
        Primary
      </button>

      <button className="inline-flex h-10 items-center justify-center rounded-md border border-zinc-200 px-4 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800">
        Secondary
      </button>

      <button className="inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100 dark:text-zinc-50 dark:hover:bg-zinc-800 disabled:opacity-50" disabled>
        Disabled
      </button>
    </div>
  );
}