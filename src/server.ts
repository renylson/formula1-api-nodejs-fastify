import fastify from "fastify";
import cors from "@fastify/cors";

const port = Number(process.env.PORT ?? 8080);
const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
});

const teams = [
  { id: 1, name: "Mercedes", base: "Brackley, Reino Unido" },
  { id: 2, name: "Red Bull Racing", base: "Milton Keynes, Reino Unido" },
  { id: 3, name: "Ferrari", base: "Maranello, Italia" },
  { id: 4, name: "McLaren", base: "Woking, Reino Unido" },
  { id: 5, name: "Alpine", base: "Fontenay-aux-Roses, France" },
  { id: 6, name: "Aston Martin", base: "Silverstone, Reino Unido" },
  { id: 7, name: "AlphaTauri", base: "Faenza, Italia" },
  { id: 8, name: "Alfa Romeo", base: "Milan, Italia" },
  { id: 9, name: "Haas", base: "Kannapolis, Estados Unidos" },
  { id: 10, name: "Williams", base: "Maranello, Italia" },
];

const drivers = [
  { id: 1, name: "Lewis Hamilton", team: "Mercedes" },
  { id: 2, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 3, name: "Charles Leclerc", team: "Ferrari" },
  { id: 4, name: "Lando Norris", team: "McLaren" },
  { id: 5, name: "Fernando Alonso", team: "Alpine" },
  { id: 6, name: "Sebastian Vettel", team: "Aston Martin" },
  { id: 7, name: "Pierre Gasly", team: "AlphaTauri" },
  { id: 8, name: "Valtteri Bottas", team: "Alfa Romeo" },
  { id: 9, name: "Mick Schumacher", team: "Haas" },
  { id: 10, name: "Nicholas Latifi", team: "Williams" },
  { id: 11, name: "Sergio Perez", team: "Red Bull Racing" },
  { id: 12, name: "Carlos Sainz", team: "Ferrari" },
  { id: 13, name: "George Russell", team: "Mercedes" },
  { id: 14, name: "Daniel Ricciardo", team: "McLaren" },
  { id: 15, name: "Esteban Ocon", team: "Alpine" },
  { id: 16, name: "Lance Stroll", team: "Aston Martin" },
  { id: 17, name: "Yuki Tsunoda", team: "AlphaTauri" },
  { id: 18, name: "Guanyu Zhou", team: "Alfa Romeo" },
  { id: 19, name: "Kevin Magnussen", team: "Haas" },
  { id: 20, name: "Alex Albon", team: "Williams" },
];

server.get("/teams", async (request, reply) => {
  reply.type("application/json").code(200);

  return {
    teams: teams,
  };
});

server.get("/drivers", async (request, reply) => {
  reply.type("application/json").code(200);

  return {
    drivers: drivers,
  };
});

server.get<{ Params: { id: string } }>(
  "/drivers/:id",
  async (request, reply) => {
    const { id } = request.params as { id: string };
    const driver = drivers.find((d) => d.id === parseInt(id));

    if (!driver) {
      reply.type("application/json").code(404);
      return { error: "Piloto não encontrado!" };
    }

    reply.type("application/json").code(200);
    return driver;
  },
);

server.listen({ port: port }, () => {
  console.log("Servidor está rodando em http://localhost:" + port);
});
