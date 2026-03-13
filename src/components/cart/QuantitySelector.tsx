type Props = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
};

export default function QuantitySelector({
  value,
  min,
  max,
  onChange,
}: Props) {
  const decrease = () => {
    if (value > min) onChange(value - 1);
  };

  const increase = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className="flex gap-2 mt-2 flex-wrap items-center border rounded-lg w-fit overflow-hidden">
      {/* Decrease */}
      <button
        onClick={decrease}
        disabled={value === min}
        className={`px-3 py-1 text-lg font-bold bg-gray-100 hover:bg-gray-200 transition
          ${value === min
            ? "cursor-not-allowed text-gray-400"
            : ""}
        `}
      >
        −
      </button>

      {/* Value */}
      <span className="px-4 text-sm font-medium min-w-[40px] text-center">
        {value}
      </span>

      {/* Increase */}
      <button
        disabled={value === max}
        onClick={increase}
        className={`px-3 py-1 text-lg font-bold bg-gray-100 hover:bg-gray-200 transition
          ${value === max
            ? "cursor-not-allowed text-gray-400"
            : ""}
        `}
      >
        +
      </button>
    </div>
  );
}