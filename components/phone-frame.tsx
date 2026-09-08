export function PhoneFrame() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto w-[232px] shrink-0 sm:w-[248px]"
    >
      <div className="absolute -inset-8 rounded-[3rem] bg-accent/10 blur-3xl" />
      <div className="relative rounded-[2.35rem] border border-white/12 bg-linear-to-b from-white/10 to-white/5 p-2 shadow-[0_24px_80px_-24px_rgba(62,224,255,0.35)]">
        <div className="relative overflow-hidden rounded-[1.9rem] border border-white/8 bg-[#071018]">
          <div className="absolute top-2.5 left-1/2 z-10 h-5 w-[88px] -translate-x-1/2 rounded-full bg-black/90" />
          <div className="flex h-[460px] flex-col bg-linear-to-b from-[#0b1c2a] via-[#08111a] to-[#05080d] px-3.5 pt-10 pb-4">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] tracking-widest text-accent/80 uppercase">
                  Live build
                </p>
                <p className="text-sm font-semibold">Studio Feed</p>
              </div>
              <span className="h-8 w-8 rounded-full bg-accent/20 ring-2 ring-accent/30" />
            </div>
            <div className="flex-1 space-y-2.5">
              <div className="h-36 rounded-2xl border border-white/8 bg-linear-to-br from-accent/25 via-accent-2/20 to-transparent p-3">
                <div className="h-full rounded-xl border border-white/10 bg-black/25 p-3">
                  <div className="mb-2 h-2 w-16 rounded-full bg-accent/70" />
                  <div className="h-2 w-24 rounded-full bg-white/20" />
                  <div className="mt-6 flex gap-1.5">
                    <span className="h-6 flex-1 rounded-md bg-white/10" />
                    <span className="h-6 flex-1 rounded-md bg-accent/30" />
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/4 p-3">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-accent-2/40" />
                  <span className="h-2 w-20 rounded-full bg-white/25" />
                </div>
                <div className="h-2 w-full rounded-full bg-white/10" />
                <div className="mt-1.5 h-2 w-2/3 rounded-full bg-white/8" />
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/4 p-3">
                <div className="mb-2 flex items-center gap-2">
                  <span className="h-6 w-6 rounded-full bg-accent/30" />
                  <span className="h-2 w-16 rounded-full bg-white/25" />
                </div>
                <div className="h-2 w-full rounded-full bg-white/10" />
              </div>
            </div>
            <div className="mt-3 flex justify-around rounded-full border border-white/8 bg-black/40 px-2 py-2">
              <span className="h-1.5 w-8 rounded-full bg-accent" />
              <span className="h-1.5 w-8 rounded-full bg-white/20" />
              <span className="h-1.5 w-8 rounded-full bg-white/20" />
              <span className="h-1.5 w-8 rounded-full bg-white/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
