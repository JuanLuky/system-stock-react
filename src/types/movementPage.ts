import type { Movement } from "./movement";

export interface MovementPage {
  movement: Movement[];
  totalElements: number;
  totalPages: number;
}
