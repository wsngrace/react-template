type ProductOption = {
  name: string;
  values: string[];
};

type Props = {
  options: ProductOption[];
  selected: Record<string, string>;
  onChange: (value: Record<string, string>) => void;
};

export default function VariantSelector({ options, selected, onChange }: Props) {

  const handleChange = (name: string, value: string) => {
    onChange({
      ...selected,
      [name]: value
    });
  };

  return (
    <div className="mt-6 space-y-4">

      {options?.map(option => (
        <div key={option.name}>

          <label className="block text-sm font-medium text-gray-700">
            {option.name}
          </label>

          <div className="flex gap-2 mt-2 flex-wrap">

            {option.values.map(value => (
              <button
                key={value}
                onClick={() => handleChange(option.name, value)}
                className={`
                  px-4 py-2 border rounded-lg text-sm transition
                  ${selected[option.name] === value
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700"}
                `}
              >
                {value}
              </button>
            ))}

          </div>

        </div>
      ))}

    </div>
  );
}