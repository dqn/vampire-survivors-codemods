type Props = {
  text: undefined | string;
};

export const ErrorMessage: React.FC<Props> = ({ text }) => {
  return <p className="pt-2 text-sm text-red-500">{text}</p>;
};
