interface SelectableButtonProps {
  value: number | string;
  onSelect: (value: number | string) => void;
  label?: React.ReactNode;
  className?: string;
}

export default function SelectableButton({
  value,
  onSelect,
  label,
  className = "",
}: SelectableButtonProps) {
  return (
    <button
      className={`flex items-center justify-center rounded-lg border-2 border-blue-200 bg-gray-50 p-6 text-2xl ${className}`}
      type="button"
      onClick={() => onSelect(value)}
    >
      {label ?? value}
    </button>
  );
}
