import { useForm, type SubmitHandler } from "react-hook-form";
import { type BggThingDto } from "boardgamegeekclient/dist/esm/dto";
import { type Prisma } from "@prisma/client";
import { Button, Input } from "~/components/ui";
import { api } from "~/utils/api";

interface BoardgameFormProps extends BggThingDto {
  className?: string;
}

type FormInputs = Prisma.BoardgameCreateInput;

const BoardgameForm = ({
  className = "",
  ...boardgame
}: BoardgameFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const boardgameCreate = api.boardgame.create.useMutation();
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    boardgameCreate.mutate(data);
  };
  const handle = handleSubmit(onSubmit);
  return (
    <form
      onSubmit={handle}
      className={`${className} flex flex-col gap-2`}
      noValidate
    >
      <input
        type="hidden"
        value={boardgame.image}
        {...register("image", { required: true })}
      />
      <Input
        label="Name"
        placeholder="Name..."
        defaultValue={boardgame.name}
        error={errors.name ? "This field is required" : ""}
        {...register("name", { required: true })}
      />
      <Input
        label="Description"
        defaultValue={boardgame.description}
        {...register("description")}
      />
      <Input
        label="BGG Link"
        defaultValue={`https://boardgamegeek.com/boardgame/${boardgame.id}`}
        readOnly
        {...register("bggLink")}
      />
      <Input
        label="Duration"
        type="number"
        step={5}
        min={5}
        defaultValue={boardgame.maxplaytime}
        error={errors.length ? "Minimum of 5 minutes" : ""}
        {...register("length", { min: 5 })}
      />
      <Input
        label="Rounds"
        type="number"
        defaultValue={1}
        min={1}
        error={errors.rounds ? "Minimum of 1 round" : ""}
        {...register("rounds", { min: 1 })}
      />
      <div className="flex flex-row justify-between gap-2">
        <Button type="reset" intent="secondary">
          Reset
        </Button>

        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default BoardgameForm;
