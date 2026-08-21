import fastify from "fastify";
import cors from "@fastify/cors";
import { teamRoutes } from "./routes/team-routes.js";
import { driverRoutes } from "./routes/driver-routes.js";

const server = fastify({ logger: true });
const port = Number(process.env.PORT ?? 8080);

server.register(cors, {
  origin: "*",
});

server.register(teamRoutes);
server.register(driverRoutes);

server.listen({ port }, () => {
  console.log("Servidor está rodando em http://localhost:" + port);
});
