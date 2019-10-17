---
id: api-user-get-id
title: User API | GET User Data
sidebar_label: Get User Data
---

## API Summary

| Endpoint | **https://api.feedback.house/api/common/user/v1/users/:id** |
|----------|-------------------------------------------------|
| Method   | **GET** |
| Format   | **JSON** |

## API details

This endpoint allows querying and retrieving `user` data. 

Given the id of user, the api will query for it and return if found.

### Response 

This API will return a object `user`. 

```json
{
    status: "OK",
    user: { "name": "User 1", "emails": ["user1@yourcompany.com"], ... },
}
```

When no user is found the object will be empty
```json
{
    "status": "ERROR",
    "message": "User not found",
    "user": null,
}
```

### Error reporting

Example for a response with errors:
```json
{
    "status": "ERROR",
    "message": "Invalid id",
    "user": null
}
```

## Response Fields for each User

#### `id` [Unique] 
Unique ID for this user. This field is a *primary key* and should be used whenever this user needs to be updated.

> This field can and should be used as **primary key** to detect if users will be created or updated when using the Update or create API [User Update or Create](./api-user-update-or-create)

#### `name` [String] 
The user full name. This field is required. 

#### `emails` [[String]]

Emails associated with this user. Users can have multiple emails. This field expects an array in the format `emails: ["email1@yourcompany.com","email2@yourcompany.com"]`. 

> This field can and should be used as **primary key** to detect if users will be created or updated when using the Update or create API [User Update or Create](./api-user-update-or-create)

#### `title` [String]
The user job post title. 

#### `active` [{`true`,`false`}]

This field defines if the user is active or not. Valid options are `true`, `false`. 

This field is not required, if not provided it will be set to `active`.

#### `groups` [[GroupId]]

Groups that this user belongs to. 
This field expects an array in the format `groups: ["507f1f77bcf86cd799439011","507f1f77bcf86cd799439011"]`. 

Needs to be a valid `GroupID`

#### `businessDivision` [BusinessDivisionID]

This field defines the Business Division of user. This needs to be a valid Business Division ID.

#### `manager` [UserId]

This field defines the user manager.

For each request the API will attempt to find the manager using the provided key. 

#### `phoneNumbers` [[String]]

This field defines phones number for this user.

This field expects an array of strings in the format `phoneNumbers: ["+55 11 976231232", "11 9999999999", "999999999"]`. 

Note: Phone number logic is not strictly enforced. This API will try, in a best effort basis, format numbers to appropriate values.

#### `birthDate`

This field defines the user birth date, format is `YYYY/MM/DD`.

#### `admissionDate` 

This field defines de user admission date, format is `YYYY/MM/DD`.

#### `demissionDate` 

This field defines date when the user left the company. 

#### `area` [AreaId]

This field defines the Area that this user belongs. This fields expects a valid `AreaID`

#### `gender` [{`MALE`,`FEMALE`,`OTHER`}]

Gender of the user. Valid options are `MALE`, `FEMALE`, `OTHER`. 

This field is not required, however when not provided it will be defined to a internal `undefined` valid.

#### `tags` [[String]]

Arbitrary tags associated with this user. 

Tags can also be expressed in key value format, when using `:`. Tags that uses the format of `key:value`, enhancing reports and statics. Example: `project:secret`, `status:new`, `sapuser:yes`
