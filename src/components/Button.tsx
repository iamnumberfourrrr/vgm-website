export const Button = ({children, className, onClick }: React.PropsWithChildren & { className?: string, onClick?: any }) => {
  return (
    <button className={`bg-grey-button hover:brightness-75 text-white font-bold px-5 py-3 my-5 ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
