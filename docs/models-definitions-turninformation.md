# Untitled object in undefined Schema

```txt
undefined#/definitions/TurnInformation
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [models.schema.json\*](models.schema.json "open original schema") |

## TurnInformation Type

`object` ([Details](models-definitions-turninformation.md))

# TurnInformation Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                  |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| [timestamp](#timestamp) | `string` | Required | cannot be null | [Untitled schema](models-definitions-turninformation-properties-timestamp.md "undefined#/definitions/TurnInformation/properties/timestamp") |
| [turn](#turn)           | `number` | Required | cannot be null | [Untitled schema](models-definitions-turninformation-properties-turn.md "undefined#/definitions/TurnInformation/properties/turn")           |

## timestamp



`timestamp`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Untitled schema](models-definitions-turninformation-properties-timestamp.md "undefined#/definitions/TurnInformation/properties/timestamp")

### timestamp Type

`string`

### timestamp Constraints

**date time**: the string must be a date time string, according to [RFC 3339, section 5.6](https://tools.ietf.org/html/rfc3339 "check the specification")

## turn



`turn`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Untitled schema](models-definitions-turninformation-properties-turn.md "undefined#/definitions/TurnInformation/properties/turn")

### turn Type

`number`
