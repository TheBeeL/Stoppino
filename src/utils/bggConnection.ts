import { BggClient } from "boardgamegeekclient";

const bggClient = BggClient.Create();

export const search = async (query: string) => {
  const results = await bggClient.search.query({ query, type: "boardgame" });
  if (typeof results[0] === "undefined") {
    return [];
  }
  const games = await bggClient.thing.query({
    id: results[0].items.map((game) => game.id),
  });
  return games.filter((game) => game.type === "boardgame");
};
