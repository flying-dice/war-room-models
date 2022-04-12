# Untitled string in undefined Schema

```txt
undefined#/definitions/GeometryTypes
```

GeometryTypes

<https://tools.ietf.org/html/rfc7946#section-1.4> The valid values for the "type" property of GeoJSON geometry objects.

| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [models.schema.json\*](models.schema.json "open original schema") |

## GeometryTypes Type

`string`

## GeometryTypes Constraints

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
