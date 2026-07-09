interface PlaceholderBoxProps {
  label: string;
  className?: string;
  aspect?: "video" | "square" | "wide";
}

const aspectClass: Record<NonNullable<PlaceholderBoxProps["aspect"]>, string> = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

export function PlaceholderBox({ label, className = "", aspect = "video" }: PlaceholderBoxProps) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-gray-400 bg-gray-100 text-center text-sm text-gray-500 ${aspectClass[aspect]} ${className}`}
    >
      {label}
    </div>
  );
}
