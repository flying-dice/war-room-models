import { StaticUnit } from "./static-unit";
import { AirUnit } from "./air-unit";
import { Installation } from "./installation";
import { GroundUnit } from "./ground-unit";
import { OperationOrder } from "./operation-order";
import { Echelon } from "./echelon";

/**
 * @title Operation File
 * @description War Room Operation File
 */
export interface OperationFile {
  /**
   * @title Operation ID
   */
  id: string;

  /**
   * @title Operation Name
   */
  opord: OperationOrder;

  /**
   * @title Installations
   * @description Installations such as Airbases or Naval Bases
   */
  installations: Installation[];

  /**
   * @title Divisions
   * @description Top level Divisions
   */
  divisions: GroundUnit<Echelon.DIVISION>[];

  /**
   * @title Brigades
   * @description Brigades within Divisions
   */
  brigades: GroundUnit<Echelon.BRIGADE>[];

  /**
   * @title Batteries
   * @description Static Battery Sites
   */
  batteries: GroundUnit<Echelon.BATTERY>[];

  /**
   * @title Wings
   * @description Top Level Air Wings
   */
  wings: AirUnit<Echelon.WING>[];

  /**
   * @title Squadrons
   * @description Squadrons within Wings
   */
  squadrons: AirUnit<Echelon.SQUADRON>[];
}
