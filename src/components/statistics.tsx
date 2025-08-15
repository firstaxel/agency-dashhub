export default function StatsSection() {
  return (
    <section className="py-5 md:py-10">
      <div className=" space-y-8 px-6 md:space-y-16">
        <div className="grid gap-3 *:text-center md:grid-cols-3 dark:[--color-muted:var(--color-zinc-900)]">
          <div className=" rounded-(--radius) space-y-4 p-6">
            <div className="text-5xl font-bold">+1200</div>
            <p>Stars on GitHub</p>
          </div>
          <div className=" rounded-(--radius) space-y-4 p-6">
            <div className="text-5xl font-bold">56%</div>
            <p>Conversion rate</p>
          </div>
          <div className=" rounded-(--radius) space-y-4 p-6">
            <div className="text-5xl font-bold">+500</div>
            <p>Powered Apps</p>
          </div>
        </div>
      </div>
    </section>
  );
}
