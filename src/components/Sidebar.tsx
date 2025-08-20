export default function Sidebar() {
  return (
    <aside className="card p-6 sticky top-6">
      <img
        src="/images/avatar.jpg"
        alt="Avatar"
        className="w-28 h-28 rounded-full object-cover"
      />
      <h1 className="h2 mt-4">Your Name</h1>
      <p className="muted">Frontend Developer</p>
      <div className="mt-4 flex gap-3">
        <a className="btn" href="/contact">
          Hire me
        </a>
        <a className="btn" href="/resume">
          Download CV
        </a>
      </div>
      <ul className="mt-6 space-y-2 text-sm">
        <li>📍 City, Country</li>
        <li>✉️ you@example.com</li>
        <li>
          🔗{" "}
          <a
            className="underline"
            href="https://github.com/yourname"
            target="_blank"
          >
            GitHub
          </a>
        </li>
      </ul>
    </aside>
  );
}
