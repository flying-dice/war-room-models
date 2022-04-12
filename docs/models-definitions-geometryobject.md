# Untitled object in undefined Schema

```txt
undefined#/definitions/GeometryObject
```

Geometry Object

<https://tools.ietf.org/html/rfc7946#section-3>

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [models.schema.json\*](models.schema.json "open original schema") |

## GeometryObject Type

`object` ([Details](models-definitions-geometryobject.md))

# GeometryObject Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                      |
| :------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| [bbox](#bbox) | Merged   | Optional | cannot be null | [Untitled schema](models-definitions-bbox.md "undefined#/definitions/GeometryObject/properties/bbox")                           |
| [type](#type) | `string` | Required | cannot be null | [Untitled schema](models-definitions-geometryobject-properties-type.md "undefined#/definitions/GeometryObject/properties/type") |

## bbox

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections. <https://tools.ietf.org/html/rfc7946#section-5>

`bbox`

*   is optional

*   Type: merged type ([Details](models-definitions-bbox.md))

*   cannot be null

*   defined in: [Untitled schema](models-definitions-bbox.md "undefined#/definitions/GeometryObject/properties/bbox")

### bbox Type

merged type ([Details](models-definitions-bbox.md))

any of

*   [Untitled array in undefined](models-definitions-bbox2d.md "check type definition")

*   [Untitled array in undefined](models-definitions-bbox3d.md "check type definition")

## type

GeometryTypes

<https://tools.ietf.org/html/rfc7946#section-1.4> The valid values for the "type" property of GeoJSON geometry objects.

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](models-definitions-geometryobject-properties-type.md "undefined#/definitions/GeometryObject/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                  | Explanation |
| :--------------------- | :---------- |
| `"Point"`              |             |
| `"LineString"`         |             |
| `"Polygon"`            |             |
| `"MultiPoint"`         |             |
| `"MultiLineString"`    |             |
| `"MultiPolygon"`       |             |
| `"GeometryCollection"` |             |
