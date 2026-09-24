export default function TrustChip({
  children,
  tone = "light",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-medium ${
        tone === "light"
          ? "bg-white/95 text-ink shadow-card"
          : "bg-white/10 text-white backdrop-blur-sm"
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
      {children}
    </span>
  );
}
