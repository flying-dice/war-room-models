import { Unit } from "./unit";
import { Damageable } from "./damageable";
import { Locatable } from "./locatable";

export interface StaticUnit extends Locatable, Damageable, Unit {}
