---
id: api-area-user-add
title: Area API | Add Users to Area
sidebar_label: Add Users to Area
---

## API Summary

| Endpoint | **https://api.feedback.house/api/planning/v1/area/user-add** |
|----------|-------------------------------------------------------------|
| Method   | **POST** |
| Format   | **JSON** |
| Idempotent | **YES**, using primary keys |

## API details

This endpoint will **add** existing `Users` to existing `Areas`. 

Area is the smallest unit of a group of colleagues working with a single purpose. 

This API was intentionally designed with idea that it will be able to be called multiple times. So user will be only included to a Area only once, regardless of the number of calls you make to this APIs.

### Batch Operations

This endpoint supports `batch` operations and as such expects **an array of areas** (*in the format of an array of objects*). 

Each object must contain the expected user or users to be included. This means that you can use this API to update multiple distinctive areas. This behavior is optional and not required.

```json
area-user-add: [
 { "areaId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439011","507f1f77bcf86cd799439012"] },
 { "areaId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439014","507f1f77bcf86cd799439016"] },
 { "areaId": "997f1f77bcf86cd799439012", "users": ["507f1f77bcf86cd799439011"] },
 ...
]
```

If you need to add just one user you can call the API with just one area in the array object:

```json
area-user-add: [ { "areaId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439011"] },]
```


### Response and Error reporting

For each request the API will evaluate each `Area` individually and will report errors per area. This means that this API can successfully create or update some areas while rejecting others.

Response example for a request without errors:
```json
{
    "status": "OK",
    "message": "Update 10 | Errors 0",
    "errors": []
}
```

Response example for a request **with errors**. In the example bellow the required field `users` field is missing.
```json
{
    "status": "OK",
    "message": "Updated 2 | Errors 1",
    "errors": [
        {
        "object": {
            "areaID": "997f1f77bcf86cd799439011",
            ...
        },
        "message": "Missing users field"
    }
}
```

## Primary Keys

The `areadId` field define which `Areas` will be updated with new users.


Primary key fields:
- `areaId` - The associated unique Id of this Area.

Notes:
- `AreaId` is required, calling this API with `AreaID` will result in errors
- Calling a API with the same payload a second time (ie. same keys) will **not** duplicate users in the area.

## Available Fields per Area


#### `areaId` [AreaId] 
Unique identification number for this Area. 

This field is required.

#### `users` [[UserId]]

This field defines the `Users` that will be included in this Area. 

This field expects an array of users in the format `users: ["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439011"]`. 