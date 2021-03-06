# War Room Models Schema

```txt
WarRoomModels
```

All War Room Data Models

| Abstract               | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                      |
| :--------------------- | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------- |
| Cannot be instantiated | Yes        | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [models.schema.json](models.schema.json "open original schema") |

## War Room Models Type

unknown ([War Room Models](models.md))

# War Room Models Definitions

## Definitions group AirUnit

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/AirUnit"}
```

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                  |
| :------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [country](#country) | `string` | Required | cannot be null | [War Room Models](models-definitions-airunit-properties-country.md "WarRoomModels#/definitions/AirUnit/properties/country") |
| [health](#health)   | `number` | Required | cannot be null | [War Room Models](models-definitions-airunit-properties-health.md "WarRoomModels#/definitions/AirUnit/properties/health")   |
| [id](#id)           | `string` | Required | cannot be null | [War Room Models](models-definitions-airunit-properties-id.md "WarRoomModels#/definitions/AirUnit/properties/id")           |
| [name](#name)       | `string` | Required | cannot be null | [War Room Models](models-definitions-airunit-properties-name.md "WarRoomModels#/definitions/AirUnit/properties/name")       |
| [size](#size)       | `number` | Required | cannot be null | [War Room Models](models-definitions-airunit-properties-size.md "WarRoomModels#/definitions/AirUnit/properties/size")       |
| [type](#type)       | `string` | Required | cannot be null | [War Room Models](models-definitions-airunit-properties-type.md "WarRoomModels#/definitions/AirUnit/properties/type")       |

### country



`country`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-airunit-properties-country.md "WarRoomModels#/definitions/AirUnit/properties/country")

#### country Type

`string`

### health



`health`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [War Room Models](models-definitions-airunit-properties-health.md "WarRoomModels#/definitions/AirUnit/properties/health")

#### health Type

`number`

### id



`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-airunit-properties-id.md "WarRoomModels#/definitions/AirUnit/properties/id")

#### id Type

`string`

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-airunit-properties-name.md "WarRoomModels#/definitions/AirUnit/properties/name")

#### name Type

`string`

### size



`size`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [War Room Models](models-definitions-airunit-properties-size.md "WarRoomModels#/definitions/AirUnit/properties/size")

#### size Type

`number`

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-airunit-properties-type.md "WarRoomModels#/definitions/AirUnit/properties/type")

#### type Type

`string`

## Definitions group BBox

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/BBox"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group BBox2d

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/BBox2d"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group BBox3d

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/BBox3d"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group Coalition

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/Coalition"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group Damageable

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/Damageable"}
```

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                      |
| :------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------ |
| [health](#health-1) | `number` | Required | cannot be null | [War Room Models](models-definitions-damageable-properties-health.md "WarRoomModels#/definitions/Damageable/properties/health") |

### health



`health`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [War Room Models](models-definitions-damageable-properties-health.md "WarRoomModels#/definitions/Damageable/properties/health")

#### health Type

`number`

## Definitions group Entity

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/Entity"}
```

| Property        | Type     | Required | Nullable       | Defined by                                                                                                          |
| :-------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------ |
| [id](#id-1)     | `string` | Required | cannot be null | [War Room Models](models-definitions-entity-properties-id.md "WarRoomModels#/definitions/Entity/properties/id")     |
| [name](#name-1) | `string` | Required | cannot be null | [War Room Models](models-definitions-entity-properties-name.md "WarRoomModels#/definitions/Entity/properties/name") |

### id



`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-entity-properties-id.md "WarRoomModels#/definitions/Entity/properties/id")

#### id Type

`string`

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-entity-properties-name.md "WarRoomModels#/definitions/Entity/properties/name")

#### name Type

`string`

## Definitions group Feature\<Point>

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/Feature<Point>"}
```

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                        |
| :------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [bbox](#bbox)             | Merged   | Optional | cannot be null | [War Room Models](models-definitions-featurepoint-properties-bbox.md "WarRoomModels#/definitions/Feature<Point>/properties/bbox") |
| [geometry](#geometry)     | `object` | Required | cannot be null | [War Room Models](models-definitions-point.md "WarRoomModels#/definitions/Feature<Point>/properties/geometry")                    |
| [id](#id-2)               | Multiple | Optional | cannot be null | [War Room Models](models-definitions-featurepoint-properties-id.md "WarRoomModels#/definitions/Feature<Point>/properties/id")     |
| [properties](#properties) | Merged   | Required | cannot be null | [War Room Models](models-definitions-properties.md "WarRoomModels#/definitions/Feature<Point>/properties/properties")             |
| [type](#type-1)           | `string` | Required | cannot be null | [War Room Models](models-definitions-featurepoint-properties-type.md "WarRoomModels#/definitions/Feature<Point>/properties/type") |

### bbox

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections. <https://tools.ietf.org/html/rfc7946#section-5>

`bbox`

*   is optional

*   Type: merged type ([Details](models-definitions-featurepoint-properties-bbox.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-featurepoint-properties-bbox.md "WarRoomModels#/definitions/Feature<Point>/properties/bbox")

#### bbox Type

merged type ([Details](models-definitions-featurepoint-properties-bbox.md))

any of

*   [Untitled array in War Room Models](models-definitions-bbox2d.md "check type definition")

*   [Untitled array in War Room Models](models-definitions-bbox3d.md "check type definition")

### geometry

Point Geometry Object

<https://tools.ietf.org/html/rfc7946#section-3.1.2>

`geometry`

*   is required

*   Type: `object` ([Details](models-definitions-point.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-point.md "WarRoomModels#/definitions/Feature<Point>/properties/geometry")

#### geometry Type

`object` ([Details](models-definitions-point.md))

### id

Id

<https://tools.ietf.org/html/rfc7946#section-3.2> If a Feature has a commonly used identifier, that identifier SHOULD be included as a member of the Feature object with the name "id", and the value of this member is either a JSON string or number.

`id`

*   is optional

*   Type: any of the folllowing: `string` or `number` ([Details](models-definitions-featurepoint-properties-id.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-featurepoint-properties-id.md "WarRoomModels#/definitions/Feature<Point>/properties/id")

#### id Type

any of the folllowing: `string` or `number` ([Details](models-definitions-featurepoint-properties-id.md))

### properties

Properties

<https://tools.ietf.org/html/rfc7946#section-3.2> A Feature object has a member with the name "properties". The value of the properties member is an object (any JSON object or a JSON null value).

`properties`

*   is required

*   Type: merged type ([Details](models-definitions-properties.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-properties.md "WarRoomModels#/definitions/Feature<Point>/properties/properties")

#### properties Type

merged type ([Details](models-definitions-properties.md))

any of

*   [Untitled object in War Room Models](models-definitions-properties-anyof-0.md "check type definition")

*   [Untitled null in War Room Models](models-definitions-properties-anyof-1.md "check type definition")

### type

Specifies the type of GeoJSON object.

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-featurepoint-properties-type.md "WarRoomModels#/definitions/Feature<Point>/properties/type")

#### type Type

`string`

#### type Constraints

**constant**: the value of this property must be equal to:

```json
"Feature"
```

## Definitions group Feature\<Polygon>

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/Feature<Polygon>"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                            |
| :-------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| [bbox](#bbox-1)             | Merged   | Optional | cannot be null | [War Room Models](models-definitions-featurepolygon-properties-bbox.md "WarRoomModels#/definitions/Feature<Polygon>/properties/bbox") |
| [geometry](#geometry-1)     | `object` | Required | cannot be null | [War Room Models](models-definitions-polygon.md "WarRoomModels#/definitions/Feature<Polygon>/properties/geometry")                    |
| [id](#id-3)                 | Multiple | Optional | cannot be null | [War Room Models](models-definitions-featurepolygon-properties-id.md "WarRoomModels#/definitions/Feature<Polygon>/properties/id")     |
| [properties](#properties-1) | Merged   | Required | cannot be null | [War Room Models](models-definitions-properties.md "WarRoomModels#/definitions/Feature<Polygon>/properties/properties")               |
| [type](#type-2)             | `string` | Required | cannot be null | [War Room Models](models-definitions-featurepolygon-properties-type.md "WarRoomModels#/definitions/Feature<Polygon>/properties/type") |

### bbox

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections. <https://tools.ietf.org/html/rfc7946#section-5>

`bbox`

*   is optional

*   Type: merged type ([Details](models-definitions-featurepolygon-properties-bbox.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-featurepolygon-properties-bbox.md "WarRoomModels#/definitions/Feature<Polygon>/properties/bbox")

#### bbox Type

merged type ([Details](models-definitions-featurepolygon-properties-bbox.md))

any of

*   [Untitled array in War Room Models](models-definitions-bbox2d.md "check type definition")

*   [Untitled array in War Room Models](models-definitions-bbox3d.md "check type definition")

### geometry

Polygon Geometry Object

<https://tools.ietf.org/html/rfc7946#section-3.1.6>

`geometry`

*   is required

*   Type: `object` ([Details](models-definitions-polygon.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-polygon.md "WarRoomModels#/definitions/Feature<Polygon>/properties/geometry")

#### geometry Type

`object` ([Details](models-definitions-polygon.md))

### id

Id

<https://tools.ietf.org/html/rfc7946#section-3.2> If a Feature has a commonly used identifier, that identifier SHOULD be included as a member of the Feature object with the name "id", and the value of this member is either a JSON string or number.

`id`

*   is optional

*   Type: any of the folllowing: `string` or `number` ([Details](models-definitions-featurepolygon-properties-id.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-featurepolygon-properties-id.md "WarRoomModels#/definitions/Feature<Polygon>/properties/id")

#### id Type

any of the folllowing: `string` or `number` ([Details](models-definitions-featurepolygon-properties-id.md))

### properties

Properties

<https://tools.ietf.org/html/rfc7946#section-3.2> A Feature object has a member with the name "properties". The value of the properties member is an object (any JSON object or a JSON null value).

`properties`

*   is required

*   Type: merged type ([Details](models-definitions-properties.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-properties.md "WarRoomModels#/definitions/Feature<Polygon>/properties/properties")

#### properties Type

merged type ([Details](models-definitions-properties.md))

any of

*   [Untitled object in War Room Models](models-definitions-properties-anyof-0.md "check type definition")

*   [Untitled null in War Room Models](models-definitions-properties-anyof-1.md "check type definition")

### type

Specifies the type of GeoJSON object.

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-featurepolygon-properties-type.md "WarRoomModels#/definitions/Feature<Polygon>/properties/type")

#### type Type

`string`

#### type Constraints

**constant**: the value of this property must be equal to:

```json
"Feature"
```

## Definitions group GeoJSONObject

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/GeoJSONObject"}
```

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                        |
| :-------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [bbox](#bbox-2) | Merged   | Optional | cannot be null | [War Room Models](models-definitions-geojsonobject-properties-bbox.md "WarRoomModels#/definitions/GeoJSONObject/properties/bbox") |
| [type](#type-3) | `string` | Required | cannot be null | [War Room Models](models-definitions-geojsonobject-properties-type.md "WarRoomModels#/definitions/GeoJSONObject/properties/type") |

### bbox

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections. <https://tools.ietf.org/html/rfc7946#section-5>

`bbox`

*   is optional

*   Type: merged type ([Details](models-definitions-geojsonobject-properties-bbox.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-geojsonobject-properties-bbox.md "WarRoomModels#/definitions/GeoJSONObject/properties/bbox")

#### bbox Type

merged type ([Details](models-definitions-geojsonobject-properties-bbox.md))

any of

*   [Untitled array in War Room Models](models-definitions-bbox2d.md "check type definition")

*   [Untitled array in War Room Models](models-definitions-bbox3d.md "check type definition")

### type

Specifies the type of GeoJSON object.

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-geojsonobject-properties-type.md "WarRoomModels#/definitions/GeoJSONObject/properties/type")

#### type Type

`string`

## Definitions group GeometryObject

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/GeometryObject"}
```

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                          |
| :-------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| [bbox](#bbox-3) | Merged   | Optional | cannot be null | [War Room Models](models-definitions-geometryobject-properties-bbox.md "WarRoomModels#/definitions/GeometryObject/properties/bbox") |
| [type](#type-4) | `string` | Required | cannot be null | [War Room Models](models-definitions-geometryobject-properties-type.md "WarRoomModels#/definitions/GeometryObject/properties/type") |

### bbox

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections. <https://tools.ietf.org/html/rfc7946#section-5>

`bbox`

*   is optional

*   Type: merged type ([Details](models-definitions-geometryobject-properties-bbox.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-geometryobject-properties-bbox.md "WarRoomModels#/definitions/GeometryObject/properties/bbox")

#### bbox Type

merged type ([Details](models-definitions-geometryobject-properties-bbox.md))

any of

*   [Untitled array in War Room Models](models-definitions-bbox2d.md "check type definition")

*   [Untitled array in War Room Models](models-definitions-bbox3d.md "check type definition")

### type

GeometryTypes

<https://tools.ietf.org/html/rfc7946#section-1.4> The valid values for the "type" property of GeoJSON geometry objects.

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-geometryobject-properties-type.md "WarRoomModels#/definitions/GeometryObject/properties/type")

#### type Type

`string`

#### type Constraints

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

## Definitions group GeometryTypes

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/GeometryTypes"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group GridLocatable

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/GridLocatable"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| [location](#location) | `object` | Required | cannot be null | [War Room Models](models-definitions-gridlocatable-properties-location.md "WarRoomModels#/definitions/GridLocatable/properties/location") |

### location



`location`

*   is required

*   Type: `object` ([Details](models-definitions-gridlocatable-properties-location.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-gridlocatable-properties-location.md "WarRoomModels#/definitions/GridLocatable/properties/location")

#### location Type

`object` ([Details](models-definitions-gridlocatable-properties-location.md))

## Definitions group GroundUnit

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/GroundUnit"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                          |
| :---------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| [country](#country-1)   | `string` | Required | cannot be null | [War Room Models](models-definitions-groundunit-properties-country.md "WarRoomModels#/definitions/GroundUnit/properties/country")   |
| [health](#health-2)     | `number` | Required | cannot be null | [War Room Models](models-definitions-groundunit-properties-health.md "WarRoomModels#/definitions/GroundUnit/properties/health")     |
| [id](#id-4)             | `string` | Required | cannot be null | [War Room Models](models-definitions-groundunit-properties-id.md "WarRoomModels#/definitions/GroundUnit/properties/id")             |
| [location](#location-1) | `object` | Required | cannot be null | [War Room Models](models-definitions-groundunit-properties-location.md "WarRoomModels#/definitions/GroundUnit/properties/location") |
| [name](#name-2)         | `string` | Required | cannot be null | [War Room Models](models-definitions-groundunit-properties-name.md "WarRoomModels#/definitions/GroundUnit/properties/name")         |
| [size](#size-1)         | `number` | Required | cannot be null | [War Room Models](models-definitions-groundunit-properties-size.md "WarRoomModels#/definitions/GroundUnit/properties/size")         |
| [type](#type-5)         | `string` | Required | cannot be null | [War Room Models](models-definitions-groundunit-properties-type.md "WarRoomModels#/definitions/GroundUnit/properties/type")         |

### country



`country`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-groundunit-properties-country.md "WarRoomModels#/definitions/GroundUnit/properties/country")

#### country Type

`string`

### health



`health`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [War Room Models](models-definitions-groundunit-properties-health.md "WarRoomModels#/definitions/GroundUnit/properties/health")

#### health Type

`number`

### id



`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-groundunit-properties-id.md "WarRoomModels#/definitions/GroundUnit/properties/id")

#### id Type

`string`

### location



`location`

*   is required

*   Type: `object` ([Details](models-definitions-groundunit-properties-location.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-groundunit-properties-location.md "WarRoomModels#/definitions/GroundUnit/properties/location")

#### location Type

`object` ([Details](models-definitions-groundunit-properties-location.md))

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-groundunit-properties-name.md "WarRoomModels#/definitions/GroundUnit/properties/name")

#### name Type

`string`

### size



`size`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [War Room Models](models-definitions-groundunit-properties-size.md "WarRoomModels#/definitions/GroundUnit/properties/size")

#### size Type

`number`

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-groundunit-properties-type.md "WarRoomModels#/definitions/GroundUnit/properties/type")

#### type Type

`string`

## Definitions group Id

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/Id"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group Installation

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/Installation"}
```

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                              |
| :---------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [country](#country-2)   | `string`      | Required | cannot be null | [War Room Models](models-definitions-installation-properties-country.md "WarRoomModels#/definitions/Installation/properties/country")   |
| [health](#health-3)     | `number`      | Required | cannot be null | [War Room Models](models-definitions-installation-properties-health.md "WarRoomModels#/definitions/Installation/properties/health")     |
| [id](#id-5)             | `string`      | Required | cannot be null | [War Room Models](models-definitions-installation-properties-id.md "WarRoomModels#/definitions/Installation/properties/id")             |
| [location](#location-2) | Not specified | Required | cannot be null | [War Room Models](models-definitions-installation-properties-location.md "WarRoomModels#/definitions/Installation/properties/location") |
| [name](#name-3)         | `string`      | Required | cannot be null | [War Room Models](models-definitions-installation-properties-name.md "WarRoomModels#/definitions/Installation/properties/name")         |
| [type](#type-6)         | `string`      | Required | cannot be null | [War Room Models](models-definitions-installation-properties-type.md "WarRoomModels#/definitions/Installation/properties/type")         |

### country



`country`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-installation-properties-country.md "WarRoomModels#/definitions/Installation/properties/country")

#### country Type

`string`

### health



`health`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [War Room Models](models-definitions-installation-properties-health.md "WarRoomModels#/definitions/Installation/properties/health")

#### health Type

`number`

### id



`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-installation-properties-id.md "WarRoomModels#/definitions/Installation/properties/id")

#### id Type

`string`

### location



`location`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [War Room Models](models-definitions-installation-properties-location.md "WarRoomModels#/definitions/Installation/properties/location")

#### location Type

unknown

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-installation-properties-name.md "WarRoomModels#/definitions/Installation/properties/name")

#### name Type

`string`

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-installation-properties-type.md "WarRoomModels#/definitions/Installation/properties/type")

#### type Type

`string`

## Definitions group Locatable

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/Locatable"}
```

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                        |
| :---------------------- | :------------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------- |
| [location](#location-3) | Not specified | Required | cannot be null | [War Room Models](models-definitions-locatable-properties-location.md "WarRoomModels#/definitions/Locatable/properties/location") |

### location



`location`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [War Room Models](models-definitions-locatable-properties-location.md "WarRoomModels#/definitions/Locatable/properties/location")

#### location Type

unknown

## Definitions group OperationFile

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/OperationFile"}
```

| Property                        | Type          | Required | Nullable       | Defined by                                                                                                                                                 |
| :------------------------------ | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [airUnits](#airunits)           | `array`       | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-air-units.md "WarRoomModels#/definitions/OperationFile/properties/airUnits")                |
| [area](#area)                   | Not specified | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-area.md "WarRoomModels#/definitions/OperationFile/properties/area")                         |
| [coalitions](#coalitions)       | `object`      | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-coalitions.md "WarRoomModels#/definitions/OperationFile/properties/coalitions")             |
| [description](#description)     | `string`      | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-operation-description.md "WarRoomModels#/definitions/OperationFile/properties/description") |
| [groundUnits](#groundunits)     | `array`       | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-ground-units.md "WarRoomModels#/definitions/OperationFile/properties/groundUnits")          |
| [id](#id-6)                     | `string`      | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-operation-id.md "WarRoomModels#/definitions/OperationFile/properties/id")                   |
| [installations](#installations) | `array`       | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-installations.md "WarRoomModels#/definitions/OperationFile/properties/installations")       |
| [name](#name-4)                 | `string`      | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-operation-name.md "WarRoomModels#/definitions/OperationFile/properties/name")               |
| [startDate](#startdate)         | `string`      | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-operation-start-date.md "WarRoomModels#/definitions/OperationFile/properties/startDate")    |
| [staticUnits](#staticunits)     | `array`       | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-static-units.md "WarRoomModels#/definitions/OperationFile/properties/staticUnits")          |

### airUnits

Operation Air Units such as Fighter Wings

`airUnits`

*   is required

*   Type: `object[]` ([AirUnit](models-definitions-airunit.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-air-units.md "WarRoomModels#/definitions/OperationFile/properties/airUnits")

#### airUnits Type

`object[]` ([AirUnit](models-definitions-airunit.md))

### area

GeoJSON Polygon Feature defining the Operation Area, See
<https://geojson.org/geojson-spec.html> for additional info

`area`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-area.md "WarRoomModels#/definitions/OperationFile/properties/area")

#### area Type

unknown

### coalitions

Operation Coalitions

`coalitions`

*   is required

*   Type: `object` ([Coalitions](models-definitions-operation-file-properties-coalitions.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-coalitions.md "WarRoomModels#/definitions/OperationFile/properties/coalitions")

#### coalitions Type

`object` ([Coalitions](models-definitions-operation-file-properties-coalitions.md))

### description



`description`

*   is required

*   Type: `string` ([Operation Description](models-definitions-operation-file-properties-operation-description.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-operation-description.md "WarRoomModels#/definitions/OperationFile/properties/description")

#### description Type

`string` ([Operation Description](models-definitions-operation-file-properties-operation-description.md))

### groundUnits

Operation Ground Units such as Infantry or Armor Brigades

`groundUnits`

*   is required

*   Type: `object[]` ([Details](models-definitions-groundunit.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-ground-units.md "WarRoomModels#/definitions/OperationFile/properties/groundUnits")

#### groundUnits Type

`object[]` ([Details](models-definitions-groundunit.md))

### id



`id`

*   is required

*   Type: `string` ([Operation ID](models-definitions-operation-file-properties-operation-id.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-operation-id.md "WarRoomModels#/definitions/OperationFile/properties/id")

#### id Type

`string` ([Operation ID](models-definitions-operation-file-properties-operation-id.md))

### installations

Operation Installations such as Airbases or Naval Bases

`installations`

*   is required

*   Type: `object[]` ([Details](models-definitions-installation.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-installations.md "WarRoomModels#/definitions/OperationFile/properties/installations")

#### installations Type

`object[]` ([Details](models-definitions-installation.md))

### name



`name`

*   is required

*   Type: `string` ([Operation Name](models-definitions-operation-file-properties-operation-name.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-operation-name.md "WarRoomModels#/definitions/OperationFile/properties/name")

#### name Type

`string` ([Operation Name](models-definitions-operation-file-properties-operation-name.md))

### startDate

ISO Date Time String

`startDate`

*   is required

*   Type: `string` ([Operation Start Date](models-definitions-operation-file-properties-operation-start-date.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-operation-start-date.md "WarRoomModels#/definitions/OperationFile/properties/startDate")

#### startDate Type

`string` ([Operation Start Date](models-definitions-operation-file-properties-operation-start-date.md))

#### startDate Constraints

**unknown format**: the value of this string must follow the format: `iso-8601`

#### startDate Examples

```json
"2022-04-12T22:28:55.980Z"
```

### staticUnits

Operation Static Units such as SAM Batteries

`staticUnits`

*   is required

*   Type: `object[]` ([Details](models-definitions-staticunit.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-static-units.md "WarRoomModels#/definitions/OperationFile/properties/staticUnits")

#### staticUnits Type

`object[]` ([Details](models-definitions-staticunit.md))

## Definitions group Point

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/Point"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                        |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------- |
| [bbox](#bbox-4)             | Merged   | Optional | cannot be null | [War Room Models](models-definitions-point-properties-bbox.md "WarRoomModels#/definitions/Point/properties/bbox") |
| [coordinates](#coordinates) | `array`  | Required | cannot be null | [War Room Models](models-definitions-position.md "WarRoomModels#/definitions/Point/properties/coordinates")       |
| [type](#type-7)             | `string` | Required | cannot be null | [War Room Models](models-definitions-point-properties-type.md "WarRoomModels#/definitions/Point/properties/type") |

### bbox

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections. <https://tools.ietf.org/html/rfc7946#section-5>

`bbox`

*   is optional

*   Type: merged type ([Details](models-definitions-point-properties-bbox.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-point-properties-bbox.md "WarRoomModels#/definitions/Point/properties/bbox")

#### bbox Type

merged type ([Details](models-definitions-point-properties-bbox.md))

any of

*   [Untitled array in War Room Models](models-definitions-bbox2d.md "check type definition")

*   [Untitled array in War Room Models](models-definitions-bbox3d.md "check type definition")

### coordinates

Position

<https://tools.ietf.org/html/rfc7946#section-3.1.1> Array should contain between two and three elements. The previous GeoJSON specification allowed more elements (e.g., which could be used to represent M values), but the current specification only allows X, Y, and (optionally) Z to be defined.

`coordinates`

*   is required

*   Type: `number[]`

*   cannot be null

*   defined in: [War Room Models](models-definitions-position.md "WarRoomModels#/definitions/Point/properties/coordinates")

#### coordinates Type

`number[]`

### type

Specifies the type of GeoJSON object.

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-point-properties-type.md "WarRoomModels#/definitions/Point/properties/type")

#### type Type

`string`

#### type Constraints

**constant**: the value of this property must be equal to:

```json
"Point"
```

## Definitions group Polygon

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/Polygon"}
```

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                          |
| :---------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| [bbox](#bbox-5)               | Merged   | Optional | cannot be null | [War Room Models](models-definitions-polygon-properties-bbox.md "WarRoomModels#/definitions/Polygon/properties/bbox")               |
| [coordinates](#coordinates-1) | `array`  | Required | cannot be null | [War Room Models](models-definitions-polygon-properties-coordinates.md "WarRoomModels#/definitions/Polygon/properties/coordinates") |
| [type](#type-8)               | `string` | Required | cannot be null | [War Room Models](models-definitions-polygon-properties-type.md "WarRoomModels#/definitions/Polygon/properties/type")               |

### bbox

Bounding box of the coordinate range of the object's Geometries, Features, or Feature Collections. <https://tools.ietf.org/html/rfc7946#section-5>

`bbox`

*   is optional

*   Type: merged type ([Details](models-definitions-polygon-properties-bbox.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-polygon-properties-bbox.md "WarRoomModels#/definitions/Polygon/properties/bbox")

#### bbox Type

merged type ([Details](models-definitions-polygon-properties-bbox.md))

any of

*   [Untitled array in War Room Models](models-definitions-bbox2d.md "check type definition")

*   [Untitled array in War Room Models](models-definitions-bbox3d.md "check type definition")

### coordinates



`coordinates`

*   is required

*   Type: `number[][][]`

*   cannot be null

*   defined in: [War Room Models](models-definitions-polygon-properties-coordinates.md "WarRoomModels#/definitions/Polygon/properties/coordinates")

#### coordinates Type

`number[][][]`

### type

Specifies the type of GeoJSON object.

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-polygon-properties-type.md "WarRoomModels#/definitions/Polygon/properties/type")

#### type Type

`string`

#### type Constraints

**constant**: the value of this property must be equal to:

```json
"Polygon"
```

## Definitions group Position

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/Position"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group Properties

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/Properties"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group StaticUnit

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/StaticUnit"}
```

| Property                | Type          | Required | Nullable       | Defined by                                                                                                                          |
| :---------------------- | :------------ | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| [country](#country-3)   | `string`      | Required | cannot be null | [War Room Models](models-definitions-staticunit-properties-country.md "WarRoomModels#/definitions/StaticUnit/properties/country")   |
| [health](#health-4)     | `number`      | Required | cannot be null | [War Room Models](models-definitions-staticunit-properties-health.md "WarRoomModels#/definitions/StaticUnit/properties/health")     |
| [id](#id-7)             | `string`      | Required | cannot be null | [War Room Models](models-definitions-staticunit-properties-id.md "WarRoomModels#/definitions/StaticUnit/properties/id")             |
| [location](#location-4) | Not specified | Required | cannot be null | [War Room Models](models-definitions-staticunit-properties-location.md "WarRoomModels#/definitions/StaticUnit/properties/location") |
| [name](#name-5)         | `string`      | Required | cannot be null | [War Room Models](models-definitions-staticunit-properties-name.md "WarRoomModels#/definitions/StaticUnit/properties/name")         |
| [size](#size-2)         | `number`      | Required | cannot be null | [War Room Models](models-definitions-staticunit-properties-size.md "WarRoomModels#/definitions/StaticUnit/properties/size")         |
| [type](#type-9)         | `string`      | Required | cannot be null | [War Room Models](models-definitions-staticunit-properties-type.md "WarRoomModels#/definitions/StaticUnit/properties/type")         |

### country



`country`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-staticunit-properties-country.md "WarRoomModels#/definitions/StaticUnit/properties/country")

#### country Type

`string`

### health



`health`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [War Room Models](models-definitions-staticunit-properties-health.md "WarRoomModels#/definitions/StaticUnit/properties/health")

#### health Type

`number`

### id



`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-staticunit-properties-id.md "WarRoomModels#/definitions/StaticUnit/properties/id")

#### id Type

`string`

### location



`location`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [War Room Models](models-definitions-staticunit-properties-location.md "WarRoomModels#/definitions/StaticUnit/properties/location")

#### location Type

unknown

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-staticunit-properties-name.md "WarRoomModels#/definitions/StaticUnit/properties/name")

#### name Type

`string`

### size



`size`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [War Room Models](models-definitions-staticunit-properties-size.md "WarRoomModels#/definitions/StaticUnit/properties/size")

#### size Type

`number`

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-staticunit-properties-type.md "WarRoomModels#/definitions/StaticUnit/properties/type")

#### type Type

`string`

## Definitions group Unit

Reference this group by using

```json
{"$ref":"WarRoomModels#/definitions/Unit"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                            |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------- |
| [country](#country-4) | `string` | Required | cannot be null | [War Room Models](models-definitions-unit-properties-country.md "WarRoomModels#/definitions/Unit/properties/country") |
| [health](#health-5)   | `number` | Required | cannot be null | [War Room Models](models-definitions-unit-properties-health.md "WarRoomModels#/definitions/Unit/properties/health")   |
| [id](#id-8)           | `string` | Required | cannot be null | [War Room Models](models-definitions-unit-properties-id.md "WarRoomModels#/definitions/Unit/properties/id")           |
| [name](#name-6)       | `string` | Required | cannot be null | [War Room Models](models-definitions-unit-properties-name.md "WarRoomModels#/definitions/Unit/properties/name")       |
| [size](#size-3)       | `number` | Required | cannot be null | [War Room Models](models-definitions-unit-properties-size.md "WarRoomModels#/definitions/Unit/properties/size")       |
| [type](#type-10)      | `string` | Required | cannot be null | [War Room Models](models-definitions-unit-properties-type.md "WarRoomModels#/definitions/Unit/properties/type")       |

### country



`country`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-unit-properties-country.md "WarRoomModels#/definitions/Unit/properties/country")

#### country Type

`string`

### health



`health`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [War Room Models](models-definitions-unit-properties-health.md "WarRoomModels#/definitions/Unit/properties/health")

#### health Type

`number`

### id



`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-unit-properties-id.md "WarRoomModels#/definitions/Unit/properties/id")

#### id Type

`string`

### name



`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-unit-properties-name.md "WarRoomModels#/definitions/Unit/properties/name")

#### name Type

`string`

### size



`size`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [War Room Models](models-definitions-unit-properties-size.md "WarRoomModels#/definitions/Unit/properties/size")

#### size Type

`number`

### type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [War Room Models](models-definitions-unit-properties-type.md "WarRoomModels#/definitions/Unit/properties/type")

#### type Type

`string`
