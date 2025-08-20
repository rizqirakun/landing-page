import { useState, useEffect } from "react";

export type Filter = "all" | "web" | "mobile" | "design";

export default function FilterPills({
  onChange,
}: {
  onChange?: (value: Filter) => void;
}) {
  const [active, setActive] = useState<Filter>("all");
  useEffect(() => {
    onChange?.(active);
  }, [active]);
  const pills: Filter[] = ["all", "web", "mobile", "design"];
  return (
    <div className="flex flex-wrap gap-2">
      {pills.map((p) => (
        <button
          key={p}
          className={`px-3 py-1 rounded-full border ${active === p ? "bg-primary text-white" : ""}`}
          onClick={() => setActive(p)}
        >
          {p}
        </button>
      ))}
    </div>
  );
}
