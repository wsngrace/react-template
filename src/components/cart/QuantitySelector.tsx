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

  const minValue = min ?? 1;
  const maxValue = max ?? 99;

  const decrease = () => {
    if (value > minValue) onChange(value - 1);
  };

  const increase = () => {
    if (value < maxValue) onChange(value + 1);
  };

  return (
    <div className="flex gap-2 mt-2 flex-wrap items-center border rounded-lg w-fit overflow-hidden">

      <button
        onClick={decrease}
        disabled={value <= minValue}
        className={`px-3 py-1 text-lg font-bold bg-gray-100 hover:bg-gray-200 transition
          ${value <= minValue ? "cursor-not-allowed text-gray-400" : ""}
        `}
      >
        −
      </button>

      <span className="px-4 text-sm font-medium min-w-[40px] text-center">
        {value}
      </span>

      <button
        onClick={increase}
        disabled={value >= maxValue}
        className={`px-3 py-1 text-lg font-bold bg-gray-100 hover:bg-gray-200 transition
          ${value >= maxValue ? "cursor-not-allowed text-gray-400" : ""}
        `}
      >
        +
      </button>

    </div>
  );
}