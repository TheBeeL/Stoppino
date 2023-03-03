import { useState } from "react";
import SearchResults from "~/components/SearchResults";
import { Button, Input } from "~/components/ui";
import { api } from "~/utils/api";

export default function SearchPage() {
  const [term, setTerm] = useState("");
  const { data, refetch } = api.boardgame.search.useQuery(term, {
    enabled: false,
  });

  return (
    <main className="container mx-auto">
      <div className="flex flex-row items-end gap-2">
        <Input
          className="grow"
          label="Search term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <Button onClick={() => void refetch()}>Search</Button>
      </div>
      {data && <SearchResults data={data} />}
    </main>
  );
}
