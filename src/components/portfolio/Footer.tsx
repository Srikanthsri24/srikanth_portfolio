export function Footer() {
  return (
    <footer className="border-t border-border mt-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-10 grid sm:grid-cols-3 gap-6 items-center text-xs text-muted-foreground">
        <div>
          <p className="font-display text-xl text-foreground">
            <span className="serif-italic">Srikanth</span><span className="text-amber">.</span>
          </p>
          <p className="mt-2">© VisionariesAI Labs Pvt Ltd. All rights reserved.</p>
        </div>
        <p className="text-center hidden sm:block uppercase tracking-[0.3em]">Built with intent · 2026</p>
        <p className="sm:text-right">Designed & engineered in India.</p>
      </div>
    </footer>
  );
}
