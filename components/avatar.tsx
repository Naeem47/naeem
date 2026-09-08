export function Avatar() {
  return (
    <div className="relative mx-auto h-40 w-40 sm:h-48 sm:w-48">
      <div className="absolute inset-[6%] rounded-full bg-linear-to-br from-violet-500/40 via-sky-400/30 to-pink-500/40 blur-xl" />
      <div className="relative overflow-hidden rounded-full border border-white/10 bg-[#0c0c0c] shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
        <svg viewBox="0 0 200 200" className="h-full w-full" aria-hidden="true">
          <rect width="200" height="200" fill="#111111" />
          <ellipse cx="100" cy="168" rx="70" ry="22" fill="#090909" />
          <rect x="42" y="118" width="116" height="62" rx="10" fill="#cfcfd3" />
          <rect x="50" y="126" width="100" height="46" rx="6" fill="#171717" />
          <rect x="58" y="134" width="36" height="5" rx="2.5" fill="#7dd3fc" />
          <rect x="58" y="144" width="58" height="4" rx="2" fill="#3f3f46" />
          <rect x="58" y="152" width="46" height="4" rx="2" fill="#3f3f46" />
          <circle cx="100" cy="78" r="34" fill="#efd3b5" />
          <path
            d="M66 74c8-28 60-28 68 4 2 10-8 14-16 10-12-10-28-10-38 0-7 3-15-2-14-14Z"
            fill="#1c1917"
          />
          <ellipse cx="88" cy="80" rx="4" ry="5" fill="#1c1917" />
          <ellipse cx="112" cy="80" rx="4" ry="5" fill="#1c1917" />
          <path d="M90 96c6 6 14 6 20 0" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="100" cy="118" rx="28" ry="18" fill="#efd3b5" />
          <rect x="84" y="108" width="32" height="12" rx="6" fill="#e7e5e4" />
        </svg>
      </div>
    </div>
  );
}
