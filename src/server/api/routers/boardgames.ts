import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { search } from "~/utils/bggConnection";

export const boardgameRouter = createTRPCRouter({
  search: publicProcedure.input(z.string()).query(async ({ input }) => {
    return await search(input);
  }),
  create: publicProcedure
    .input(
      z.object({
        name: z.string(),
        description: z.string().optional().nullable(),
        image: z.string().optional().nullable(),
        bggLink: z.string().optional().nullable(),
        length: z.number().optional().nullable(),
        rounds: z.number().optional().nullable(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma.boardgame.create({ data: input });
    }),
});
