# Operation File Schema

```txt
WarRoomModels#/definitions/OperationFile
```

War Room Operation File

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [models.schema.json\*](models.schema.json "open original schema") |

## OperationFile Type

`object` ([Operation File](models-definitions-operation-file.md))

# OperationFile Properties

| Property                        | Type          | Required | Nullable       | Defined by                                                                                                                                                 |
| :------------------------------ | :------------ | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [airUnits](#airunits)           | `array`       | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-air-units.md "WarRoomModels#/definitions/OperationFile/properties/airUnits")                |
| [area](#area)                   | Not specified | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-area.md "WarRoomModels#/definitions/OperationFile/properties/area")                         |
| [coalitions](#coalitions)       | `object`      | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-coalitions.md "WarRoomModels#/definitions/OperationFile/properties/coalitions")             |
| [description](#description)     | `string`      | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-operation-description.md "WarRoomModels#/definitions/OperationFile/properties/description") |
| [groundUnits](#groundunits)     | `array`       | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-ground-units.md "WarRoomModels#/definitions/OperationFile/properties/groundUnits")          |
| [id](#id)                       | `string`      | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-operation-id.md "WarRoomModels#/definitions/OperationFile/properties/id")                   |
| [installations](#installations) | `array`       | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-installations.md "WarRoomModels#/definitions/OperationFile/properties/installations")       |
| [name](#name)                   | `string`      | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-operation-name.md "WarRoomModels#/definitions/OperationFile/properties/name")               |
| [startDate](#startdate)         | `string`      | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-operation-start-date.md "WarRoomModels#/definitions/OperationFile/properties/startDate")    |
| [staticUnits](#staticunits)     | `array`       | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-static-units.md "WarRoomModels#/definitions/OperationFile/properties/staticUnits")          |

## airUnits

Operation Air Units such as Fighter Wings

`airUnits`

*   is required

*   Type: `object[]` ([AirUnit](models-definitions-airunit.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-air-units.md "WarRoomModels#/definitions/OperationFile/properties/airUnits")

### airUnits Type

`object[]` ([AirUnit](models-definitions-airunit.md))

## area

GeoJSON Polygon Feature defining the Operation Area, See
<https://geojson.org/geojson-spec.html> for additional info

`area`

*   is required

*   Type: unknown

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-area.md "WarRoomModels#/definitions/OperationFile/properties/area")

### area Type

unknown

## coalitions

Operation Coalitions

`coalitions`

*   is required

*   Type: `object` ([Coalitions](models-definitions-operation-file-properties-coalitions.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-coalitions.md "WarRoomModels#/definitions/OperationFile/properties/coalitions")

### coalitions Type

`object` ([Coalitions](models-definitions-operation-file-properties-coalitions.md))

## description



`description`

*   is required

*   Type: `string` ([Operation Description](models-definitions-operation-file-properties-operation-description.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-operation-description.md "WarRoomModels#/definitions/OperationFile/properties/description")

### description Type

`string` ([Operation Description](models-definitions-operation-file-properties-operation-description.md))

## groundUnits

Operation Ground Units such as Infantry or Armor Brigades

`groundUnits`

*   is required

*   Type: `object[]` ([Details](models-definitions-groundunit.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-ground-units.md "WarRoomModels#/definitions/OperationFile/properties/groundUnits")

### groundUnits Type

`object[]` ([Details](models-definitions-groundunit.md))

## id



`id`

*   is required

*   Type: `string` ([Operation ID](models-definitions-operation-file-properties-operation-id.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-operation-id.md "WarRoomModels#/definitions/OperationFile/properties/id")

### id Type

`string` ([Operation ID](models-definitions-operation-file-properties-operation-id.md))

## installations

Operation Installations such as Airbases or Naval Bases

`installations`

*   is required

*   Type: `object[]` ([Details](models-definitions-installation.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-installations.md "WarRoomModels#/definitions/OperationFile/properties/installations")

### installations Type

`object[]` ([Details](models-definitions-installation.md))

## name



`name`

*   is required

*   Type: `string` ([Operation Name](models-definitions-operation-file-properties-operation-name.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-operation-name.md "WarRoomModels#/definitions/OperationFile/properties/name")

### name Type

`string` ([Operation Name](models-definitions-operation-file-properties-operation-name.md))

## startDate

ISO Date Time String

`startDate`

*   is required

*   Type: `string` ([Operation Start Date](models-definitions-operation-file-properties-operation-start-date.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-operation-start-date.md "WarRoomModels#/definitions/OperationFile/properties/startDate")

### startDate Type

`string` ([Operation Start Date](models-definitions-operation-file-properties-operation-start-date.md))

### startDate Constraints

**unknown format**: the value of this string must follow the format: `iso-8601`

### startDate Examples

```json
"2022-04-12T22:28:55.980Z"
```

## staticUnits

Operation Static Units such as SAM Batteries

`staticUnits`

*   is required

*   Type: `object[]` ([Details](models-definitions-staticunit.md))

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-static-units.md "WarRoomModels#/definitions/OperationFile/properties/staticUnits")

### staticUnits Type

`object[]` ([Details](models-definitions-staticunit.md))
