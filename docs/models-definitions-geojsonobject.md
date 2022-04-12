# Untitled object in War Room Models Schema

```txt
WarRoomModels#/definitions/GeoJSONObject
```

GeoJSON Object

<https://tools.ietf.org/html/rfc7946#section-3> The GeoJSON specification also allows [foreign members](https://tools.ietf.org/html/rfc7946#section-6.1) Developers should use "&" type in TypeScript or extend the interface to add these foreign members.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [models.schema.json\*](models.schema.json "open original schema") |

## GeoJSONObject Type

`object` ([Details](models-definitions-geojsonobject.md))

# GeoJSONObject Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                                                        |
| :------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [bbox](#bbox) | Merged   | Optional | cannot be null | [War Room Models](models-definitions-bbox.md "WarRoomModels#/definitions/GeoJSONObject/properties/bbox")                          |
| [type](#type) | `string` | Required | cannot be null | [War Room Models](models-definitions-geojsonobject-properties-type.md "WarRoomModels#/definitions/GeoJSONObject/properties/type") |

## bbox

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections. <https://tools.ietf.org/html/rfc7946#section-5>

`bbox`

*   is optional

*   Type: merged type ([Details](models-definitions-bbox.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-bbox.md "WarRoomModels#/definitions/GeoJSONObject/properties/bbox")

### bbox Type

merged type ([Details](models-definitions-bbox.md))

any of

*   [Untitled array in War Room Models](models-definitions-bbox2d.md "check type definition")

*   [Untitled array in War Room Models](models-definitions-bbox3d.md "check type definition")

## type

Specifies the type of GeoJSON object.

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-geojsonobject-properties-type.md "WarRoomModels#/definitions/GeoJSONObject/properties/type")

### type Type

`string`
