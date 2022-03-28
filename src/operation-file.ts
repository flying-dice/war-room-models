import { Feature, Polygon } from "@turf/turf";
import { StaticUnit } from "./static-unit";
import { AirUnit } from "./air-unit";
import { Installation } from "./installation";
import { GroundUnit } from "./ground-unit";

export interface OperationFile {
  id: string;
  name: string;
  description: string;
  startDate: string;
  coalitions: {
    blufor: string[];
    opfor: string[];
  };
  area: Feature<Polygon>;
  installations: Installation[];
  groundUnits: GroundUnit[];
  staticUnits: StaticUnit[];
  airUnits: AirUnit[];
}
