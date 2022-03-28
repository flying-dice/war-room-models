import { Entity } from "./entity";
import { Damageable } from "./damageable";

export interface Unit extends Damageable, Entity {
  country: string;
  size: number;
  type: string;
}
