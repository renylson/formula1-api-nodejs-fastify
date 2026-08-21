import { FastifyReply, FastifyRequest } from "fastify";
import { findAllDrivers, findDriverById } from "../repositories/driver-repository.js";

export async function listDrivers(request: FastifyRequest, reply: FastifyReply) {
  reply.type("application/json").code(200);
  return { drivers: findAllDrivers() };
}

export async function getDriverById(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  const { id } = request.params;
  const parsedId = Number(id);

  if (Number.isNaN(parsedId)) {
    reply.type("application/json").code(400);
    return { error: "ID inválido!" };
  }

  const driver = findDriverById(parsedId);

  if (!driver) {
    reply.type("application/json").code(404);
    return { error: "Piloto não encontrado!" };
  }

  reply.type("application/json").code(200);
  return driver;
}
