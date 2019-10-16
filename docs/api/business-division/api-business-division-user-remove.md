---
id: api-business-division-user-remove
title: Business Division API | Remove Users from Business Division
sidebar_label: Remove Users from Business Division
---

## API Summary

| Endpoint   | **https://api.feedback.house/api/planning/business-division/v1/user-remove** |
| ---------- | ---------------------------------------------------------------------------- |
| Method     | **POST**                                                                     |
| Format     | **JSON**                                                                     |
| Idempotent | **YES**, using primary keys                                                  |

## API details

This endpoint will **remove** `Users` from `Business Divisions`.

This API was intentionally designed with idea that it will be able to be called multiple times.

### Batch Operations

This endpoint supports `batch` operations and as such expects **an array of business divisions** (_in the format of an array of objects_).

Each object must contain the expected user or users to be included. This means that you can use this API to update multiple distinctive business divisions. This behavior is optional and not required. If some user dont belongs that the business division is trying to be removing, the api will return it.

```json
{
    businessDivisionUsersRemove: [
     { "businessDivisionId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439011","507f1f77bcf86cd799439012"] },
     { "businessDivisionId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439014","507f1f77bcf86cd799439016"] },
     { "businessDivisionId": "997f1f77bcf86cd799439012", "users": ["507f1f77bcf86cd799439011"] },
     ...
    ]
}
```

If you need to remove just one user you can call the API with just one business division in the array object:

```json
businessDivisionUsersRemove: [ { "businessDivisionId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439011"] },]
```

### Response and Error reporting

For each request the API will evaluate each `Business Division` individually and will report errors per business division. This means that this API can successfully create or update some business divisions while rejecting others.

Response example for a request without errors:

```json
{
  "data": [
    {
      "businessDivisionId": "ObjectId",
      "users": ["ObjectId", "ObjectId", "ObjectId"],
      "usersNotUpdated": []
    }
  ],
  "errors": [],
  "message": "Updated 3 | Not Updated 0 | Errors 0",
  "status": "OK"
}
```

Response example for a request without errors but with user not updated:

```json
{
  "data": [
    {
      "businessDivisionId": "ObjectId",
      "users": ["ObjectId", "ObjectId", "ObjectId"],
      "usersNotUpdated": ["ObjectId"]
    }
  ],
  "errors": [],
  "message": "Updated 3 | Not Updated 1 | Errors 0",
  "status": "OK"
}
```

Response example for a request **with errors**. In the example bellow the required field `users` is missing.

```json
{
  "data": [],
  "errors": [
    {
      "data": {
        "businessDivisionId": "ObjectId",
        "users": []
      },
      "message": "Missing users"
    }
  ],
  "message": "Updated 0 | Not Updated 0 | Errors 1",
  "status": "ERROR"
}
```

## Primary Keys

The `businessDivisionId` field define which `Business Divisions` will be have users removed.

Primary key fields:

- `businessDivisionId` - The associated unique Id of this Business Division.

Notes:

- `BusinessDivisionId` is required, calling this API without `businessDivisionId` will result in errors
- Calling a API with the same payload a second time (ie. same keys) will **not** duplicate users in the business division.

## Available Fields per Business Division

#### `businessDivisionId` [BusinessDivisionId]

Unique identification number for this Business Division.

This field is required.

#### `users` [[UserId]]

This field defines the `Users` that will be removed from this Business Division.

This field expects an array of users in the format `users: ["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439011"]`.
