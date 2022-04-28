import { Entity } from "./entity";
import { Damageable } from "./damageable";
import { Echelon } from "./echelon";

export interface Unit<T extends Echelon> extends Damageable, Entity {
  uniqueDesignation: string;
  echelon: T;
  country: string;
  size: number;
  type: string;
  parent?: string;
}
