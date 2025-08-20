import { useState } from "react";

export default function MobileNavDrawer({
  className = "",
}: {
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className={className}
        aria-label="Open menu"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40"
          onClick={() => setOpen(false)}
        >
          <nav className="absolute right-0 top-0 h-full w-72 bg-white dark:bg-gray-800 p-6 flex flex-col gap-4">
            <button className="self-end" onClick={() => setOpen(false)}>
              ✕
            </button>
            <a href="/" onClick={() => setOpen(false)}>
              Home
            </a>
            <a href="/resume" onClick={() => setOpen(false)}>
              Resume
            </a>
            <a href="/portofolio" onClick={() => setOpen(false)}>
              Portofolio
            </a>
            <a href="/contact" onClick={() => setOpen(false)}>
              Contact
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
