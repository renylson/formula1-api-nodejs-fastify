import { FastifyReply, FastifyRequest } from "fastify";
import { findAllTeams } from "../repositories/team-repository.js";

export async function listTeams(request: FastifyRequest, reply: FastifyReply) {
  reply.type("application/json").code(200);
  return { teams: findAllTeams() };
}
