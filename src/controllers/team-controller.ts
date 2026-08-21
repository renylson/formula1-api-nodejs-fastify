import { FastifyReply, FastifyRequest } from "fastify";
import { findAllTeams, findTeamById } from "../repositories/team-repository.js";

export async function listTeams(request: FastifyRequest, reply: FastifyReply) {
  reply.type("application/json").code(200);
  return { teams: findAllTeams() };
}

export async function getTeamById(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = request.params;
  const parsedId = Number(id);

  if (Number.isNaN(parsedId)) {
    reply.type("application/json").code(400);
    return { error: "ID inválido!" };
  }

  const team = findTeamById(parsedId);

  if (!team) {
    reply.type("application/json").code(404);
    return { error: "Equipe não encontrada!" };
  }

  reply.type("application/json").code(200);
  return team;
}
