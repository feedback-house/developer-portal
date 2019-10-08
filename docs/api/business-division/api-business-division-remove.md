---
id: api-business-division-user-remove
title: Business Division API | Remove Users from Business Division
sidebar_label: Remove Users from Business Division
---

## API Summary

| Endpoint | **https://api.feedback.house/api/planning/v1/business-division/user-remove** |
|----------|-------------------------------------------------------------|
| Method   | **POST** |
| Format   | **JSON** |
| Idempotent | **YES**, using primary keys |

## API details

This endpoint will **remove** `Users` from `Business Divisions`. 

This API was intentionally designed with idea that it will be able to be called multiple times. 

### Batch Operations

This endpoint supports `batch` operations and as such expects **an array of business divisions** (*in the format of an array of objects*). 

Each object must contain the expected user or users to be included. This means that you can use this API to update multiple distinctive business divisions. This behavior is optional and not required.

```json
business-division-user-remove: [
 { "businessDivisionId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439011","507f1f77bcf86cd799439012"] },
 { "businessDivisionId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439014","507f1f77bcf86cd799439016"] },
 { "businessDivisionId": "997f1f77bcf86cd799439012", "users": ["507f1f77bcf86cd799439011"] },
 ...
]
```

If you need to remove just one user you can call the API with just one business division in the array object:

```json
business-division-user-remove: [ { "businessDivisionId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439011"] },]
```


### Response and Error reporting

For each request the API will evaluate each `Business Division` individually and will report errors per business division. This means that this API can successfully create or update some business divisions while rejecting others.

Response example for a request without errors:
```json
{
    "status": "OK",
    "message": "Update 10 | Errors 0",
    "errors": []
}
```

Response example for a request **with errors**. In the example bellow the required field `users` is missing.
```json
{
    "status": "OK",
    "message": "Updated 2 | Errors 1",
    "errors": [
        {
        "object": {
            "businessDivisionId": "997f1f77bcf86cd799439011",
            ...
        },
        "message": "Missing users field"
    }
}
```

## Primary Keys

The `businessDivisionId` field define which `Business Divisions` will be have users removed.


Primary key fields:
- `businessDivisionId` - The associated unique Id of this Business Division.

Notes:
- `BusinessDivisionId` is required, calling this API with `businessDivisionId` will result in errors
- Calling a API with the same payload a second time (ie. same keys) will **not** duplicate users in the business division.

## Available Fields per Business Division

#### `businessDivisionId` [BusinessDivisionId] 
Unique identification number for this Business Division. 

This field is required.

#### `users` [[UserId]]

This field defines the `Users` that will be removed from this Business Division. 

This field expects an array of users in the format `users: ["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439011"]`. 