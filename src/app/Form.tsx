import { SubmitHandler, useForm } from "react-hook-form";
import { FormGroup } from "./FormGroup";
import { Input } from "./Input";

export type FormValues = {
  greedRate: string;
  goldenEggRate: string;
};

type Props = {
  onSubmit: SubmitHandler<FormValues>;
};

export const Form: React.FC<Props> = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      greedRate: "1",
      goldenEggRate: "1",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormGroup label="Greed rate">
        <Input
          {...register("greedRate")}
          placeholder="1"
          type="number"
          inputMode="numeric"
        />
      </FormGroup>
      <FormGroup label="Golden Egg rate">
        <Input
          {...register("goldenEggRate")}
          placeholder="1"
          type="number"
          inputMode="numeric"
        />
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
