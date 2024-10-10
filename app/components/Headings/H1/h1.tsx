const H1 = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h1 className={`text-large text-bodytext ${className}`}>{children}</h1>
  );
};
export default H1;
