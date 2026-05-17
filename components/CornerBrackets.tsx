export function CornerBrackets({
  className = "",
  color = "white",
}: {
  className?: string;
  color?: "white" | "red";
}) {
  const stroke = color === "red" ? "border-cv-red" : "border-white";
  return (
    <>
      <span
        className={`pointer-events-none absolute left-0 top-0 h-4 w-4 border-l border-t ${stroke} ${className}`}
        aria-hidden
      />
      <span
        className={`pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r ${stroke} ${className}`}
        aria-hidden
      />
    </>
  );
}
