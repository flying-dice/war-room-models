# Untitled object in undefined Schema

```txt
undefined#/definitions/Feature<Polygon>
```

Feature

<https://tools.ietf.org/html/rfc7946#section-3.2> A Feature object represents a spatially bounded thing. Every Feature object is a GeoJSON object no matter where it occurs in a GeoJSON text.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [models.schema.json\*](models.schema.json "open original schema") |

## Feature\<Polygon> Type

`object` ([Details](models-definitions-featurepolygon.md))

# Feature\<Polygon> Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                        |
| :------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [bbox](#bbox)             | Merged   | Optional | cannot be null | [Untitled schema](models-definitions-bbox.md "undefined#/definitions/Feature<Polygon>/properties/bbox")                           |
| [geometry](#geometry)     | `object` | Required | cannot be null | [Untitled schema](models-definitions-polygon.md "undefined#/definitions/Feature<Polygon>/properties/geometry")                    |
| [id](#id)                 | Multiple | Optional | cannot be null | [Untitled schema](models-definitions-featurepolygon-properties-id.md "undefined#/definitions/Feature<Polygon>/properties/id")     |
| [properties](#properties) | Merged   | Required | cannot be null | [Untitled schema](models-definitions-properties.md "undefined#/definitions/Feature<Polygon>/properties/properties")               |
| [type](#type)             | `string` | Required | cannot be null | [Untitled schema](models-definitions-featurepolygon-properties-type.md "undefined#/definitions/Feature<Polygon>/properties/type") |

## bbox

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections. <https://tools.ietf.org/html/rfc7946#section-5>

`bbox`

*   is optional

*   Type: merged type ([Details](models-definitions-bbox.md))

*   cannot be null

*   defined in: [Untitled schema](models-definitions-bbox.md "undefined#/definitions/Feature<Polygon>/properties/bbox")

### bbox Type

merged type ([Details](models-definitions-bbox.md))

any of

*   [Untitled array in undefined](models-definitions-bbox2d.md "check type definition")

*   [Untitled array in undefined](models-definitions-bbox3d.md "check type definition")

## geometry

Polygon Geometry Object

<https://tools.ietf.org/html/rfc7946#section-3.1.6>

`geometry`

*   is required

*   Type: `object` ([Details](models-definitions-polygon.md))

*   cannot be null

*   defined in: [Untitled schema](models-definitions-polygon.md "undefined#/definitions/Feature<Polygon>/properties/geometry")

### geometry Type

`object` ([Details](models-definitions-polygon.md))

## id

Id

<https://tools.ietf.org/html/rfc7946#section-3.2> If a Feature has a commonly used identifier, that identifier SHOULD be included as a member of the Feature object with the name "id", and the value of this member is either a JSON string or number.

`id`

*   is optional

*   Type: any of the folllowing: `string` or `number` ([Details](models-definitions-featurepolygon-properties-id.md))

*   cannot be null

*   defined in: [Untitled schema](models-definitions-featurepolygon-properties-id.md "undefined#/definitions/Feature<Polygon>/properties/id")

### id Type

any of the folllowing: `string` or `number` ([Details](models-definitions-featurepolygon-properties-id.md))

## properties

Properties

<https://tools.ietf.org/html/rfc7946#section-3.2> A Feature object has a member with the name "properties". The value of the properties member is an object (any JSON object or a JSON null value).

`properties`

*   is required

*   Type: merged type ([Details](models-definitions-properties.md))

*   cannot be null

*   defined in: [Untitled schema](models-definitions-properties.md "undefined#/definitions/Feature<Polygon>/properties/properties")

### properties Type

merged type ([Details](models-definitions-properties.md))

any of

*   [Untitled object in undefined](models-definitions-properties-anyof-0.md "check type definition")

*   [Untitled null in undefined](models-definitions-properties-anyof-1.md "check type definition")

## type

Specifies the type of GeoJSON object.

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](models-definitions-featurepolygon-properties-type.md "undefined#/definitions/Feature<Polygon>/properties/type")

### type Type

`string`

### type Constraints

**constant**: the value of this property must be equal to:

```json
"Feature"
```
