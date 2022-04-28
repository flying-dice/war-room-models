import { Unit } from "./unit";
import { Damageable } from "./damageable";
import { Locatable } from "./locatable";
import { Echelon } from "./echelon";

export interface StaticUnit
  extends Locatable,
    Damageable,
    Unit<Echelon.BATTERY> {}
