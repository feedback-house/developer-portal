---
id: api-user-update-or-create
title: User API | Update or Create
sidebar_label: Update or Create
---

## API Summary

| Endpoint   | **https://api.feedback.house/api/common/user/v1/update-or-create** |
| ---------- | ------------------------------------------------------------------ |
| Method     | **POST**                                                           |
| Format     | **JSON**                                                           |
| Idempotent | **YES**, using primary keys                                        |

## API details

This endpoint supports creating or updating users.

This API was intentionally designed with idea that it will first try find and update users and only when no existing user is found a new one will be created. This design allows this API to be regularly be called by your company. With this API you have a single endpoint that can handle multiple scenarios such as: User admission, change user's manager, change user's area, or even disabling users when they leave your company.

When calling this API must design your code to pass the latest, most updated user information. If an existing user is found, _using the primary keys_, the user will be updated. Only when no existing user is found the API will create a new user.

### Batch Operations

This endpoint supports `batch` operations and as such expects **an array of users** (_in the format of an array of objects_). Each object must contain the user details:

```json
{
    users: [
     { "name": "User 1", "emails": ["user1@yourcompany.com"], ... },
     { "name": "User 2", "emails": ["user2@yourcompany.com","anotheru@company.com"], ... },
     { "name": "User 3", "emails": ["user3@yourcompany.com"], "gender": "MALE", ... },
     ...
    ]
}
```

If you need to create or update just one user you can call the API with just one user in the array object:

```json
{
  users: [ { "name": "User 1", "emails": ["user1@yourcompany.com"], ... }]
}
```

### Response and Error reporting

For each request the API will evaluate each user individually and will report errors per user. This means that this API can successfully create or update some users while rejecting others.

Response example for a request without errors:

```json
{
  "status": "OK",
  "message": "Created 10 | Updated 105 | Errors 0",
  "errors": []
}
```

Response example for a request **with errors**. In the example bellow the `user` field was incorrectly set as `username`, since this field is required the API returned a error for this user.

```json
{
    "status": "OK",
    "message": "Created 3 | Updated 2 | Errors 1",
    "errors": [
        {
        "object": {
            "username": "User Name",
            ...
        },
        "message": "Missing name field"
    }
}
```

## Idempotency Keys

Primary keys fields define if users will be updated or created. In simple terms: If one of the primary keys in the user payload is found in the user database the user will be updated.

New users are created only when none of the provided keys is found.

#### Primary key fields:

- `id` - Unique ID of a `User`. This is created and managed by the Feedback House Platform, this `Id` is returned when users are created, or via the query API GET
- `emails` - The associated emails of a user are primary keys. Note users can have multiple emails, if one email is found the user will be updated.
- `taxId` - The user taxID. (_ie. CPF, Social Security Number_)
- `employeeId` - The user employeeId in the context of your company. You can use any key here as long you can control it.

#### Notes:

- Primary keys are not required, however when no primary keys are defined a new user will be created upon each request.
- Calling a API with the same payload a second time (ie. same keys) will not create a new user, it will update the previously created user.

## Available Fields per User

The only required fields are `name` and one of the primary key fields; We strongly recommend that you use additional keys to control how users are created, otherwise this can lead to duplicated users.

#### `id` [UserId]

A unique Id that represents a `User` in the platform

Unique Id is managed by the platform. The unique id of users is returned when new users are created. Unique Id of existing users can be obtained via the GET API.

> This field will be used as **key** to detect if the user will be created or updated.

#### `name` [String]

The user full name.

**This field is required**

#### `emails` [[String]]

Emails associated with this user. Users can have multiple emails. This field expects an array in the format `emails: ["email1@yourcompany.com","email2@yourcompany.com"]`.

> This field will also be used as **key** to detect if the user will be created or updated.

#### `title` [String]

The user job post title.

#### `jobID` [JobID]

The `Job` of this `User`.

This field is not required, if provided needs to be a valid `JobID`

#### `active` [{`true`,`false`}]

This field defines if the user is active or not. Valid options are `true`, `false`.

This field is not required, if not provided defaults to `active`.

#### `groups` [[GroupId]]

Groups that this user belongs to.
This field expects an array in the format `groups: ["507f1f77bcf86cd799439011","507f1f77bcf86cd799439011"]`.

Needs to be a valid `GroupID`

#### `businessDivision` [BusinessDivisionID]

This field defines the Business Division of user.

This needs to be a valid `BusinessDivisionID`.

#### `manager` [UserId]

This field defines the user manager.

For each request the API will attempt to find the manager using the provided key.

#### `phoneNumbers` [[String]]

This field defines phones number for this user.

This field expects an array of strings in the format `phoneNumbers: ["+55 11 976231232", "11 9999999999", "999999999"]`.

> Note: Phone number logic is not strictly enforced. This API will try, in a best effort basis, format numbers to appropriate values.

#### `birthDate`

This field defines the user birth date, format is `YYYY/MM/DD`.

#### `admissionDate`

This field defines de user admission date, format is `YYYY/MM/DD`.

#### `demissionDate`

This field defines date when the user left the company.

> Note: If this field is defined the user will be automatically set to `active:false`, regardless of the value provided in the active field.

#### `area` [AreaId]

This field defines the Area that this user belongs. This fields expects a valid `AreaID`

#### `gender` [{`MALE`,`FEMALE`,`OTHER`}]

Gender of the user.

Valid options are `MALE`, `FEMALE`, `OTHER`.

This field is not required. When not provided it default to a internal `undefined` valid.

#### `tags` [[String]]

Arbitrary tags associated with this user.

Tags can also be expressed in key value format, when using `:`. Tags that uses the format of `key:value`, enhancing reports and statics. Example: `project:secret`, `status:new`, `erpuser:yes`
