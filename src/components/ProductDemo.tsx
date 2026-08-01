import * as Tabs from "@radix-ui/react-tabs";

const categoryRows = [
  { label: "Create", time: "2h 35m", width: "86%", color: "bg-create" },
  { label: "Communicate", time: "2h 10m", width: "72%", color: "bg-communicate" },
  { label: "Learn", time: "1h 05m", width: "36%", color: "bg-learn" },
] as const;

const memories = [
  ["JUL 26", "Defined the first privacy-first MVP for HelpMeBe.Me.", "Product · Decision"],
  ["JUL 24", "A quiet two-hour walk led to a clearer product direction.", "Personal · Reflection"],
  ["JUL 21", "Decided not to turn daily life into a score.", "Product · Principle"],
] as const;

const triggerClass =
  "rounded-full px-4 py-2 text-sm text-white/45 transition-colors hover:text-white/80 data-[state=active]:bg-white data-[state=active]:font-semibold data-[state=active]:text-ink";

export default function ProductDemo() {
  return (
    <Tabs.Root defaultValue="today" className="w-full">
      <Tabs.List
        className="mb-8 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-white/10 bg-white/[0.05] p-1"
        aria-label="预览 HelpMeBe.Me 产品页面"
      >
        <Tabs.Trigger className={triggerClass} value="today">
          Today
        </Tabs.Trigger>
        <Tabs.Trigger className={triggerClass} value="memories">
          Memories
        </Tabs.Trigger>
        <Tabs.Trigger className={triggerClass} value="reflection">
          Reflection
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="today" className="outline-none">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-white/10 bg-[#fbfaf6] p-6 text-ink shadow-2xl shadow-black/20 sm:p-8">
            <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-ink-faint uppercase">Sunday, July 26</p>
            <h3 className="font-serif text-xl font-medium sm:text-2xl">Where did your time go today?</h3>
            <p className="mt-2 text-sm text-ink-faint">Ten seconds is enough.</p>

            <p className="mt-8 max-w-xl font-serif text-lg leading-relaxed">
              Today, most of your recorded time went to <span className="text-create">creating</span> and{" "}
              <span className="text-communicate">communicating</span>.
            </p>

            <div className="mt-7 rounded-2xl border border-line bg-white p-5">
              <p className="mb-4 text-[11px] font-bold tracking-[0.14em] text-ink-faint uppercase">Where your time went</p>
              <div className="space-y-4">
                {categoryRows.map((row) => (
                  <div key={row.label}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span>{row.label}</span>
                      <span className="font-mono text-xs text-ink-faint">{row.time}</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-line-soft">
                      <div className={`h-full rounded-full ${row.color}`} style={{ width: row.width }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-[28px] border border-white/10 bg-white/[0.06] p-6 sm:p-8">
              <p className="text-[11px] font-bold tracking-[0.14em] text-white/40 uppercase">Something worth noticing</p>
              <p className="mt-4 font-serif text-lg leading-relaxed text-white/90">
                Your longest uninterrupted activity was 68 minutes of product planning.
              </p>
              <p className="mt-4 text-xs leading-relaxed text-white/35">A quiet fact, not a score.</p>
            </div>

            <div className="rounded-[28px] border border-[#789185]/35 bg-[#405e54] p-6 sm:p-8">
              <p className="text-[11px] font-bold tracking-[0.14em] text-white/45 uppercase">Worth carrying forward?</p>
              <p className="mt-4 font-serif text-lg leading-relaxed text-white">
                Defined the first privacy-first MVP for HelpMeBe.Me.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-accent-deep">Keep as memory</span>
                <span className="rounded-full border border-white/20 px-4 py-2 text-xs text-white/65">Not this one</span>
              </div>
            </div>
          </div>
        </div>
      </Tabs.Content>

      <Tabs.Content value="memories" className="outline-none">
        <div className="rounded-[28px] border border-white/10 bg-[#fbfaf6] p-6 text-ink shadow-2xl shadow-black/20 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">Your long-term collection</p>
          <div className="mt-2 flex flex-wrap items-end justify-between gap-3">
            <h3 className="font-serif text-2xl font-medium">Memories</h3>
            <span className="text-xs text-ink-faint">Only what you chose to keep</span>
          </div>
          <div className="mt-8 divide-y divide-line overflow-hidden rounded-2xl border border-line bg-white">
            {memories.map(([date, memory, meta]) => (
              <div className="grid gap-3 p-5 sm:grid-cols-[70px_1fr] sm:p-6" key={memory}>
                <span className="font-mono text-[11px] text-ink-faint">{date}</span>
                <div>
                  <p className="font-serif text-base leading-relaxed">{memory}</p>
                  <p className="mt-2 text-xs text-ink-faint">{meta}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Tabs.Content>

      <Tabs.Content value="reflection" className="outline-none">
        <div className="rounded-[28px] border border-white/10 bg-[#fbfaf6] p-6 text-ink shadow-2xl shadow-black/20 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">Week of July 20–26</p>
          <h3 className="mt-2 font-serif text-2xl font-medium">A week, gently reflected.</h3>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-3">
            <div className="bg-white p-6">
              <span className="text-[11px] font-bold tracking-[0.12em] text-ink-faint uppercase">What changed</span>
              <p className="mt-4 font-serif text-base leading-relaxed">Time spent creating grew from 4.2 to 6.8 hours.</p>
            </div>
            <div className="bg-white p-6">
              <span className="text-[11px] font-bold tracking-[0.12em] text-ink-faint uppercase">Worth noticing</span>
              <p className="mt-4 font-serif text-base leading-relaxed">Your clearest thinking happened in longer, uninterrupted blocks.</p>
            </div>
            <div className="bg-accent-faint p-6">
              <span className="text-[11px] font-bold tracking-[0.12em] text-accent uppercase">A question, not advice</span>
              <p className="mt-4 font-serif text-base leading-relaxed">Does this reflect how you want to spend your time?</p>
            </div>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-ink-faint">
            Based only on the time HelpMeBe.Me could observe. This may not represent your full week.
          </p>
        </div>
      </Tabs.Content>
    </Tabs.Root>
  );
}
