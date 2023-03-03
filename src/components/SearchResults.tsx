import { BggThingDto } from "boardgamegeekclient/dist/esm/dto";
import { useState } from "react";
import BoardgameCard from "~/components/BoardgameCard";
import BoardgameForm from "~/components/BoardgameForm";

interface SearchResultsProps {
  data: BggThingDto[];
}

const SearchResults = ({ data }: SearchResultsProps) => {
  const [selected, setSelected] = useState<BggThingDto>();

  return (
    <>
      <div className="flex flex-wrap justify-around gap-2 p-2">
        {data.map((game) => (
          <BoardgameCard key={game.id} {...game} onSelect={setSelected} />
        ))}
      </div>
      {selected && <BoardgameForm key={selected.id} {...selected} />}
    </>
  );
};

export default SearchResults;
