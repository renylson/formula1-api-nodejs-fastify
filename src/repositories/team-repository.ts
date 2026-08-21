import { teams } from "../data/teams.js";
import { Team } from "../models/team-models.js";

export function findAllTeams(): Team[] {
  return teams;
}

export function findTeamById(id: number): Team | undefined {
  return teams.find((team) => team.id === id);
}
