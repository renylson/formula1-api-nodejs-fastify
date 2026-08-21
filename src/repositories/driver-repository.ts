import { drivers } from "../data/drivers.js";
import { Driver } from "../models/driver-models.js";

export function findAllDrivers(): Driver[] {
  return drivers;
}

export function findDriverById(id: number): Driver | undefined {
  return drivers.find((driver) => driver.id === id);
}
