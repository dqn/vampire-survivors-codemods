type FormGroupProps = {
  label: string;
  children: React.ReactNode;
};

export const FormGroup: React.FC<FormGroupProps> = ({ label, children }) => {
  return (
    <div>
      <label className="text-sm font-bold">{label}</label>
      <div className="pt-2">{children}</div>
    </div>
  );
};
