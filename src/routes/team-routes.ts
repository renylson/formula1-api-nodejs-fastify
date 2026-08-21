import { FastifyInstance } from "fastify";
import { getTeamById, listTeams } from "../controllers/team-controller.js";

export async function teamRoutes(fastify: FastifyInstance) {
  fastify.get("/teams", listTeams);
  fastify.get<{ Params: { id: string } }>("/teams/:id", getTeamById);
}
