import { assertModel } from "./assert-model";
import { Feature, Point } from "@turf/turf";
import { OperationFile } from "./models";

describe("assertSchema", () => {
  it("should throw error if schema not found", () => {
    expect(() =>
      assertModel({ hello: "world" }, "InvalidSchemaId" as any)
    ).toThrowErrorMatchingInlineSnapshot(
      `"Failed to find model schema with keyRef #/definitions/InvalidSchemaId"`
    );
  });

  it("should successfully validate GeoJSON object", () => {
    expect(() =>
      assertModel<Feature<Point>>(
        {
          id: "aeac08c7",
          type: "Feature",
          geometry: { type: "Point", coordinates: [0, 0] },
          properties: {},
        },
        "Feature<Point>"
      )
    ).not.toThrow();
  });

  it("should successfully validate OperationFile schema", () => {
    expect(() =>
      assertModel<OperationFile>(
        {
          airUnits: [],
          coalitions: { blufor: [], opfor: [] },
          groundUnits: [],
          installations: [],
          staticUnits: [],
          id: "2fde5b88-4090-4848-b985-4bb80cb82fd9",
          name: "Waves stutter on amnesty at prison!",
          description: "The cockroach grows booty like an evil shipmate.",
          startDate: new Date().toISOString(),
          area: {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [[[0, 0]], [[1, 1]]],
            },
            properties: {},
          },
        },
        "OperationFile"
      )
    ).not.toThrow();
  });
});
