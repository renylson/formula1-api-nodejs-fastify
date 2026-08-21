import { FastifyInstance } from "fastify";
import { listTeams } from "../controllers/team-controller.js";

export async function teamRoutes(fastify: FastifyInstance) {
  fastify.get("/teams", listTeams);
}
