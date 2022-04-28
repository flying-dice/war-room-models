import { Unit } from "./unit";
import { Echelon } from "./echelon";

/**
 * @title AirUnit
 * @description Air Unit Model such as Fighter, Bomber or CAS Wing
 */
export interface AirUnit<T extends Echelon> extends Unit<T> {}
