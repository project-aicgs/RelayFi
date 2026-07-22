export function EnterpriseSection() {
  return (
    <section className="relative bg-azure-700 px-4 py-24 sm:px-6 lg:px-0 lg:py-32">
      <div className="mx-auto max-w-[1114px]">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square border-2 border-raven-900 bg-azure-200"
            />
          ))}
        </div>
        <div className="relative z-10 -mt-10 mx-auto max-w-[722px] rounded-2xl border-2 border-raven-900 bg-azure-100 px-6 py-8 text-center sm:-mt-12 sm:px-10">
          <h2 className="font-serif-display text-[clamp(1.75rem,3.5vw,3rem)] leading-[1.15] tracking-[-0.02em] text-raven-900">
            Enterprise solutions that fit{" "}
            <em className="italic">your system</em>
          </h2>
        </div>
      </div>
    </section>
  );
}
