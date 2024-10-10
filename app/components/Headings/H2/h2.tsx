const H2 = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h2 className={`text-medlg text-bodytext ${className}`}>{children}</h2>
  );
};
export default H2;
