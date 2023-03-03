import { type BggThingDto } from "boardgamegeekclient/dist/esm/dto";
import Image from "next/image";
import { Button } from "~/components/ui";

interface BoardgameCardProps extends BggThingDto {
  className?: string;
  onSelect?: (boardgame: BggThingDto) => void;
}

const BoardgameCard = ({
  className = "",
  onSelect,
  ...boardgame
}: BoardgameCardProps) => {
  return (
    <div
      className={`${className} card image-full aspect-square w-64 overflow-hidden bg-base-100 shadow-xl transition-transform  hover:z-20 hover:scale-110`}
    >
      <figure className="relative">
        <Image src={boardgame.image} alt={boardgame.name} fill />
      </figure>
      <div className="card-body justify-between p-5">
        <h2
          className="card-title self-center text-center text-2xl text-white"
          dangerouslySetInnerHTML={{ __html: boardgame.name }}
        ></h2>
        <div className="card-actions justify-center">
          <Button
            intent="primary"
            className="w-full"
            onClick={() => onSelect && onSelect(boardgame)}
          >
            Select
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BoardgameCard;
