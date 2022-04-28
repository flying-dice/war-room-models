import { Feature, LineString, Polygon } from "@turf/turf";
import { Weather } from "./weather";

/**
 * @title Operation Order
 * @description An Operation Order, often abbreviated to OPORD, is a plan format meant to assist subordinate units with the conduct of military operations. An OPORD describes the situation the unit faces, the mission of the unit, and what supporting activities the unit will conduct in order to achieve their commander's desired end state.
 */
export interface OperationOrder {
  /**
   * @title OPORD ID
   * @description [sequential order number and fiscal year] [code name]
   */
  id: string;

  /**
   * @title OPORD Name
   */
  name: string;

  /**
   * @title References
   * @description List of References which apply to the OPORD, supports MD
   */
  references: string[];

  /**
   * @title Addressee of the OPORD
   * @description To who the OPORD is directed at
   */
  addressee: string;

  /**
   * @title Published
   * @description OPORD Published Date
   * @format iso-8601
   */
  published: string;

  /**
   * @title Lines of Operation
   * @description Operation Lines such as Phase Lines, LOE
   */
  linesOfOperation: {
    id: string;
    name: string;
    summary: string;
    line: Feature<LineString>;
  }[];

  /**
   * @title Situation
   * @description OPORD Situation Chapter
   */
  situation: {
    /**
     * @title Summary
     * @description OPORD Situation Summary, (single high level paragraph)
     */
    summary: string;

    /**
     * @title AO Summary
     * @description Area of Operations Summary, where its boundaries are and whats within it, (single high level paragraph)
     */
    aoSummary: string;

    /**
     * @title AO
     * @description GeoJSON Polygon Feature defining the Area of Operation, See
     * https://geojson.org/geojson-spec.html for additional info
     *
     * @see https://geojson.org/geojson-spec.html
     */
    ao: Feature<Polygon>;

    /**
     * @title AI Summary
     * @description Area of Interest Summary, where its boundaries are and what's within it, (single high level paragraph)
     */
    aiSummary: string;

    /**
     * @title Weather
     * @description Operation Weather Information
     */
    weather: Weather;

    /**
     * @title BLUFOR
     * @description BLUFOR Situation
     */
    blufor: {
      /**
       * @title Countries
       * @description Operation Blufor Countries
       * @format iso-31661-alpha-2
       * @examples ["US", "GE"]
       */
      countries: string[];
    };

    /**
     * @title OPFOR
     * @description OPFOR Situation
     */
    opfor: {
      /**
       * @title Countries
       * @description Operation OPFOR Countries
       * @format iso-31661-alpha-2
       * @examples ["RU", "BY"]
       */
      countries: string[];
    };
  };

  /**
   * @title Mission
   * @description OPORD Mission Chapter
   */
  mission: {
    /**
     * @title Statement
     * @description Short Sharp Mission Statement
     */
    statement: string;
  };

  /**
   * @title Execution
   * @description OPORD Execution Chapter
   */
  execution: {
    /**
     * @title Commanders Intent
     * @description Short Summary of steps to be taken to achieve the mission
     */
    commandersIntent: string;

    /**
     * @title Concept of Operations
     * @description Short summary of how the commander intends to carry out the intent
     */
    conceptOfOperations: string;

    /**
     * @title Key Dates
     * @description Key OPORD Dates
     */
    keyDates: {
      /**
       * @title Commencement
       * @description C-Day for the Operations
       * @format iso-8601
       */
      commencement: string;

      /**
       * @title Start
       * @description D-Day for the Operations
       * @format iso-8601
       */
      start: string;

      /**
       * @title End
       * @description Target End date for the Operations
       * @format iso-8601
       */
      end: string;
    };
  };
}
