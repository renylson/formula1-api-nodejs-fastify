import { FastifyInstance } from "fastify";
import { getDriverById, listDrivers } from "../controllers/driver-controller.js";

export async function driverRoutes(fastify: FastifyInstance) {
  fastify.get("/drivers", listDrivers);
  fastify.get<{ Params: { id: string } }>("/drivers/:id", getDriverById);
}
