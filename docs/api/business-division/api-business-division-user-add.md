---
id: api-business-division-user-add
title: Business Division API | Add Users to Business Division
sidebar_label: Add Users to Business Division
---

## API Summary

| Endpoint | **https://api.feedback.house/api/planning/business-division/v1/user-add** |
|----------|-------------------------------------------------------------|
| Method   | **POST** |
| Format   | **JSON** |
| Idempotent | **YES**, using primary keys |

## API details

This endpoint will **add** existing `Users` to existing `Business Divisions`. 

This API was intentionally designed with idea that it will be able to be called multiple times. So user will be only included to the Business Division only once, regardless of the number of calls you make to this APIs.

### Batch Operations

This endpoint supports `batch` operations and as such expects **an array of business division** (*in the format of an array of objects*). 

Each object must contain the expected user or users to be included. This means that you can use this API to update multiple distinctive Business Division. This behavior is optional and not required.

```json
{
    businessDivisionUsersAdd: [
     { "businessDivisionId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439011","507f1f77bcf86cd799439012"] },
     { "businessDivisionId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439014","507f1f77bcf86cd799439016"] },
     { "businessDivisionId": "997f1f77bcf86cd799439012", "users": ["507f1f77bcf86cd799439011"] },
     ...
    ]
}
```

If you need to add just one user you can call the API with just one Business Division in the array object:

```json
{
  businesDivisionUsersAdd: [ { "businessDivisionId": "997f1f77bcf86cd799439011", "users": ["507f1f77bcf86cd799439011"] },]
}
```


### Response and Error reporting

For each request the API will evaluate each `Business Divisions` individually and will report errors per business division. This means that this API can successfully create or update some Business Division while rejecting others.

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
            "businessDivisionId": "997f1f77bcf86cd799439011",
            ...
        },
        "message": "Missing users field"
    }
}
```

## Primary Keys

The `businessDivisionId` field define which `Business Divisions` will be updated with new users.


Primary key fields:
- `businessDivisionId` - The associated unique Id of this Business Division.

Notes:
- `businessDivisionId` is required, calling this API without `businessDivisionId` will result in errors
- Calling a API with the same payload a second time (ie. same keys) will **not** duplicate users in the Business Division.

## Available Fields per Business Division


#### `businessDivisionId` [businessDivisionId] 
Unique identification number for this Business Division. 

This field is required.

#### `users` [[UserId]]

This field defines the `Users` that will be included in this Business Division. 

This field expects an array of users in the format `users: ["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439011"]`. 