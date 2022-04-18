import { assertModel } from "./assert-model";
import { Feature, Point } from "@turf/turf";

describe("assertSchema", () => {
  it("should throw error if schema not found", () => {
    expect(() =>
      assertModel({ hello: "world" }, "InvalidSchemaId" as any)
    ).toThrowErrorMatchingInlineSnapshot(
      `"Failed to find model schema with keyRef WarRoomModels#/definitions/InvalidSchemaId"`
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
      assertModel(
        { id: "2fde5b88-4090-4848-b985-4bb80cb82fd9" },
        "OperationFile"
      )
    ).not.toThrow();
  });
});
