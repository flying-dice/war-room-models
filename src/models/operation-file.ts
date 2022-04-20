import { Feature, Polygon } from "@turf/turf";
import { StaticUnit } from "./static-unit";
import { AirUnit } from "./air-unit";
import { Installation } from "./installation";
import { GroundUnit } from "./ground-unit";

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
  name: string;

  /**
   * @title Operation Description
   */
  description: string;

  /**
   * @title Operation Start Date
   * @description ISO Date Time String
   * @examples ["2022-04-12T22:28:55.980Z"]
   *
   * @format iso-8601
   */
  startDate: string;

  /**
   * @title Coalitions
   * @description Operation Coalitions
   */
  coalitions: {

    /**
     * Player Coalition
     * @description Which Coalition the Player Represents
     */
    player: "BLUFOR" | "OPFOR"

    /**
     * @title Blufor
     * @description Operation Blufor Coalition
     * @format iso-31661-alpha-2
     * @examples ["US", "GE"]
     */
    blufor: string[];

    /**
     * @title Opfor
     * @description Operation Opfor Coalition
     * @format iso-31661-alpha-2
     * @examples ["RU", "IR"]
     */
    opfor: string[];
  };

  /**
   * @description GeoJSON Polygon Feature defining the Operation Area, See
   * https://geojson.org/geojson-spec.html for additional info
   *
   * @see https://geojson.org/geojson-spec.html
   */
  area: Feature<Polygon>;

  /**
   * @title Installations
   * @description Operation Installations such as Airbases or Naval Bases
   */
  installations: Installation[];

  /**
   * @title Ground Units
   * @description Operation Ground Units such as Infantry or Armor Brigades
   */
  groundUnits: GroundUnit[];

  /**
   * @title Static Units
   * @description Operation Static Units such as SAM Batteries
   */
  staticUnits: StaticUnit[];

  /**
   * @title Air Units
   * @description Operation Air Units such as Fighter Wings
   */
  airUnits: AirUnit[];
}
