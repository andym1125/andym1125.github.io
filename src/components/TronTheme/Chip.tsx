const Chip = ({
  label,
  theme,
  isVisible = true,
}: {
  label: string;
  theme: "primary" | "secondary";
  isVisible: boolean;
}) => {
  if (!isVisible) return <></>;

  const primaryStyles = "border-cyan-400/60 bg-cyan-400/20 text-cyan-300 hover:border-cyan-300 hover:text-cyan-200 hover:bg-cyan-300/30";
  const secondaryStyles = "border-orange-500/60 bg-orange-500/20 hover:bg-orange-300/30 hover:border-orange-300 hover:text-orange-200 text-orange-300"

  const themeStyles = theme === "primary" ? primaryStyles : secondaryStyles;

  return (
    <div className={`${themeStyles} px-3 py-1 border rounded-full text-xs font-mono tech-tag hover:scale-105 transition-all duration-300 cursor-pointer`}>
      {label}
    </div>
  );
};
export default Chip;
