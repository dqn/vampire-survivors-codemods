import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMessage } from "./ErrorMessage";
import { FormGroup } from "./FormGroup";
import { Input } from "./Input";

function validateNumericalString(value: string): undefined | string {
  return /^\d+(:?\.\d+)?$/.test(value) ? undefined : "Please enter a number";
}

export type FormValues = {
  greedRate: string;
  goldenEggRate: string;
};

type Props = {
  onSubmit: SubmitHandler<FormValues>;
};

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      greedRate: "1",
      goldenEggRate: "1",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormGroup label="Greed rate">
        <Input
          {...register("greedRate", {
            validate: {
              message: validateNumericalString,
            },
          })}
          placeholder="1"
          type="number"
          inputMode="numeric"
        />
        <ErrorMessage text={errors.greedRate?.message} />
      </FormGroup>
      <FormGroup label="Golden Egg rate">
        <Input
          {...register("goldenEggRate", {
            validate: {
              message: validateNumericalString,
            },
          })}
          placeholder="1"
          type="number"
          inputMode="numeric"
        />
        <ErrorMessage text={errors.goldenEggRate?.message} />
      </FormGroup>

      <div className="flex justify-center pt-8">
        <button
          type="submit"
          className="rounded-lg bg-black px-4 py-3 text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
