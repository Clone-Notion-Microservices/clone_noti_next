
interface SwitchActiveComponentProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

export default function SwitchActiveComponent({ value, onChange }: SwitchActiveComponentProps) {
  const toggleSwitch = () => {
    onChange(!value);
  };

  return (
    <div className="mx-8 w-80 shadow rounded-full h-10 mt-4 p-1 relative items-center bg-gray-200">
      <span
        className={`base_color shadow text-gray-800 flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute cursor-pointer ${
          value ? "left-1/2" : "left-1"
        }`}
        onClick={toggleSwitch}
      >
        {value ? "Enabled" : "Disabled"}
      </span>
    </div>
  );
}