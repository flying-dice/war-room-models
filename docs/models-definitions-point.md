# Untitled object in War Room Models Schema

```txt
WarRoomModels#/definitions/Point
```

Point Geometry Object

<https://tools.ietf.org/html/rfc7946#section-3.1.2>

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [models.schema.json\*](models.schema.json "open original schema") |

## Point Type

`object` ([Details](models-definitions-point.md))

# Point Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                        |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------- |
| [bbox](#bbox)               | Merged   | Optional | cannot be null | [War Room Models](models-definitions-bbox.md "WarRoomModels#/definitions/Point/properties/bbox")                  |
| [coordinates](#coordinates) | `array`  | Required | cannot be null | [War Room Models](models-definitions-position.md "WarRoomModels#/definitions/Point/properties/coordinates")       |
| [type](#type)               | `string` | Required | cannot be null | [War Room Models](models-definitions-point-properties-type.md "WarRoomModels#/definitions/Point/properties/type") |

## bbox

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections. <https://tools.ietf.org/html/rfc7946#section-5>

`bbox`

*   is optional

*   Type: merged type ([Details](models-definitions-bbox.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-bbox.md "WarRoomModels#/definitions/Point/properties/bbox")

### bbox Type

merged type ([Details](models-definitions-bbox.md))

any of

*   [Untitled array in War Room Models](models-definitions-bbox2d.md "check type definition")

*   [Untitled array in War Room Models](models-definitions-bbox3d.md "check type definition")

## coordinates

Position

<https://tools.ietf.org/html/rfc7946#section-3.1.1> Array should contain between two and three elements. The previous GeoJSON specification allowed more elements (e.g., which could be used to represent M values), but the current specification only allows X, Y, and (optionally) Z to be defined.

`coordinates`

*   is required

*   Type: `number[]`

*   cannot be null

*   defined in: [War Room Models](models-definitions-position.md "WarRoomModels#/definitions/Point/properties/coordinates")

### coordinates Type

`number[]`

## type

Specifies the type of GeoJSON object.

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-point-properties-type.md "WarRoomModels#/definitions/Point/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"Point"
```
