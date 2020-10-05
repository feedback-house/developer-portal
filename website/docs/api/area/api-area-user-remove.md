---
id: api-area-user-remove
title: "Area API | Remove Users from Area"
sidebar_label: Remove Users from Area
---

## API Summary

| Endpoint   | **https://api.feedback.house/api/planning/area/v1/user-remove** |
| ---------- | --------------------------------------------------------------- |
| Method     | **POST**                                                        |
| Format     | **JSON**                                                        |
| Idempotent | **YES**, using primary keys                                     |

## API details

This endpoint will **remove** `Users` from `Areas`.

Area is the smallest unit of a group of colleagues working with a single purpose.

This API was intentionally designed with idea that it will be able to be called multiple times.

### Batch Operations

This endpoint supports `batch` operations and as such expects **an array of areas** (_in the format of an array of objects_).

Each object must contain the expected user or users to be included. This means that you can use this API to update multiple distinctive areas. This behavior is optional and not required.

```json
{
    areaUsersRemove: [
     { "areaId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439011","507f1f77bcf86cd799439012"] },
     { "areaId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439014","507f1f77bcf86cd799439016"] },
     { "areaId": "997f1f77bcf86cd799439012", "users": ["507f1f77bcf86cd799439011"] },
     ...
    ]
}
```

If you need to remove just one user you can call the API with just one area in the array object:

```json
{
 areaUsersRemove: [ { "areaId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439011"] },]
}
```

### Response and Error reporting

For each request the API will evaluate each `Area` individually and will report errors per area. This means that this API can successfully update some areas while rejecting others. If some user dont belongs that area is trying to be removing, the api will return it.

Response example for a request without errors:

```json
{
  "data": [
    {
      "areaId": "ObjectId",
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
      "areaId": "ObjectId",
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
        "areaId": "ObjectId",
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

The `areadId` field define which `Areas` will be have users removed.

Primary key fields:

- `areaId` - The associated unique Id of this Area.

Notes:

- `AreaId` is required, calling this API without `areaId` will result in errors
- Calling a API with the same payload a second time (ie. same keys) will **not** duplicate users in the area.

## Available Fields per Area

#### `areaId` [AreaId]

Unique identification number for this Area.

This field is required.

#### `users` [[UserId]]

This field defines the `Users` that will be removed fromthis Area.

This field expects an array of users in the format `users: ["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439011"]`.
