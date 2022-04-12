# Coalitions Schema

```txt
Coalitions#/definitions/OperationFile/properties/coalitions
```

Operation Coalitions

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [models.schema.json\*](models.schema.json "open original schema") |

## coalitions Type

`object` ([Coalitions](models-definitions-operation-file-properties-coalitions.md))

# coalitions Properties

| Property          | Type    | Required | Nullable       | Defined by                                                                                                                                                                  |
| :---------------- | :------ | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [blufor](#blufor) | `array` | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-coalitions-properties-blufor.md "Blufor#/definitions/OperationFile/properties/coalitions/properties/blufor") |
| [opfor](#opfor)   | `array` | Required | cannot be null | [War Room Models](models-definitions-operation-file-properties-coalitions-properties-opfor.md "Opfor#/definitions/OperationFile/properties/coalitions/properties/opfor")    |

## blufor

Operation Blufor Coalition

`blufor`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-coalitions-properties-blufor.md "Blufor#/definitions/OperationFile/properties/coalitions/properties/blufor")

### blufor Type

`string[]`

### blufor Constraints

**unknown format**: the value of this string must follow the format: `iso-31661-alpha-2`

### blufor Examples

```json
"US"
```

```json
"GE"
```

## opfor

Operation Opfor Coalition

`opfor`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [War Room Models](models-definitions-operation-file-properties-coalitions-properties-opfor.md "Opfor#/definitions/OperationFile/properties/coalitions/properties/opfor")

### opfor Type

`string[]`

### opfor Constraints

**unknown format**: the value of this string must follow the format: `iso-31661-alpha-2`

### opfor Examples

```json
"RU"
```

```json
"IR"
```
