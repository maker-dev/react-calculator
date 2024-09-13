type ButtonProps = {
  label: string;
  colSpan?: number;
  rowSpan?: number;
  color: string;
} & Omit<React.ComponentProps<"button">, "children">;

const CalculatorButton: React.FC<ButtonProps> = ({ label, colSpan = 1, rowSpan = 1, color, ...rest }) => {
  return (
    <button
      className={`px-10 py-6 lg:px-12 lg:py-8 uppercase border-[0.5px] text-lg border-black ${color} col-span-${colSpan} row-span-${rowSpan} hover:border-t-white hover:border-l-white hover:text-black`}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
      {...rest}
    >
      {label}
    </button>
  );
};

export default CalculatorButton;