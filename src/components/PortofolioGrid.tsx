import { useMemo, useState } from "react";
import type { Filter } from "./FilterPills";
import { projects } from "@utils/projects";

export default function PortofolioGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = useMemo(
    () =>
      projects.filter((p) =>
        filter === "all" ? true : p.tags.includes(filter),
      ),
    [filter],
  );
  return (
    <div className="space-y-6">
      <div>
        {/* Island to control filter */}
        <div className="mb-4" data-filter>
          {/* NOTE: FilterPills is mounted separately to minimize rerenders */}
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <article key={p.slug} className="card p-4">
            <a href={p.href} target="_blank" rel="noreferrer">
              <img
                className="rounded-xl aspect-video object-cover"
                src={p.image}
                alt={p.title}
              />
            </a>
            <h3 className="mt-3 font-semibold">{p.title}</h3>
            <p className="muted text-sm">{p.summary}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
