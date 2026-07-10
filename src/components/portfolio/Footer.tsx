export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/[0.06] py-14">
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg font-medium tracking-tight">
            Rahul Naik<span className="text-[#5EA2FF]">.</span>
          </p>
          <p className="text-[13px] text-[#A1A1AA] mt-1">Full Stack Developer & Freelancer</p>
          <p className="text-[13px] text-white/50 mt-3 italic">
            "Building meaningful digital experiences."
          </p>
        </div>
        <div className="text-[12px] text-white/40">© {year} Rahul Naik. All rights reserved.</div>
      </div>
    </footer>
  );
}
