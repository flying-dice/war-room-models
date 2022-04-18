import { Locatable } from "./locatable";
import { Damageable } from "./damageable";
import { Entity } from "./entity";

export interface Installation extends Locatable, Damageable, Entity {
  country: string;
  type: string;
}
