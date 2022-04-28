import { Unit } from "./unit";
import { GridLocatable } from "./grid-locatable";
import { Echelon } from "./echelon";

export interface GroundUnit<T extends Echelon> extends GridLocatable, Unit<T> {}
