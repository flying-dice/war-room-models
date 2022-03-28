import { Feature, Point } from "@turf/turf";

export interface Locatable {
  location: Feature<Point>;
}
