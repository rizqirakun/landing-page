import type { PropsWithChildren } from "react";
import clsx from "clsx";

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: PropsWithChildren<{
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
}>) {
  return (
    <section id={id} className={clsx("section", className)}>
      {(title || subtitle) && (
        <header className="mb-8">
          {title && <h2 className="h2">{title}</h2>}
          {subtitle && <p className="muted mt-1">{subtitle}</p>}
        </header>
      )}
      {children}
    </section>
  );
}
