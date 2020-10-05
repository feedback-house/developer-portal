---
id: api-user-get
title: "User API | GET Users"
sidebar_label: GET Users
---

## API Summary

| Endpoint | **https://api.feedback.house/api/common/user/v1/users** |
| -------- | ------------------------------------------------------- |
| Method   | **GET**                                                 |
| Format   | **JSON**                                                |

## API Pagination

This api always return a object that contains pagination information like those below. This object will have fields iterative and informative.
If you don't pass values for `skip` or `limit`, it will assume `skip: 0` and `limit: 100` by default.

### Iterative

| Name  | Description                           |
| ----- | ------------------------------------- |
| skip  | Specify a number for record return    |
| limit | Specify a threshold for record return |

### Informative

| Name            | Description                       |
| --------------- | --------------------------------- |
| totalCount      | Total count of records            |
| hasPreviousPage | If has a previous page of records |
| hasNextPage     | If has a next page of records     |

```json
  "pageInfo": Object {
    "hasNextPage": false,
    "hasPreviousPage": false,
    "limit": 100,
    "skip": 0,
    "totalCount": 7,
  },
```

## API details

This endpoint allows querying and retrieving `user` data.

Given the size of your company you may need to paginate this API in other to retrive all resources.

### Response

This API will return multiple `users` in **an array of users** (_in the format of an array of objects_).

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

When no users are found the array will be empty

```json
{
  users: []
}
```

### Error reporting

Example for a response with errors:

```json
{
  "status": "ERROR",
  "message": "Invalid search query"
}
```

## Response Fields for each User

#### `id` [Unique]

Unique ID for this user. This field is a _primary key_ and should be used whenever this user needs to be updated.

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
