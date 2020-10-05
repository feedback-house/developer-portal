---
id: api-business-division-get-id
title: "Business Division API | GET Business Division"
sidebar_label: GET Business Division
---

## API Summary

| Endpoint | **https://api.feedback.house/api/planning/business-division/v1/query/:id** |
|----------|---------------------------------------------------|
| Method   | **GET** |
| Format   | **JSON** |

## API details

This endpoint allows querying and retrieving `Business Division` data. This API will return the most recent and updated `business division` as possible.

Given the size of your company you may need to paginate this API in other to retrieve all resources.

### Response 

This API will return a `business divisions` in **an object** (*in the format of json object*). 

```json
{
    "status": "OK",
    businessDivision: { 
        "id": "507f1f77bcf86cd799439011", 
        "name": "Business Division 1", 
        "users": [
          "507f1f77bcf86cd7911",
          "507f1f77bcf86cd7912",
          "507f1f77bcf86cd7913",
        ], 
        active: true,
        ...
     },
}
```

When no business division is found the object will be empty
```json
{
  businessDivision: {}
}
```

### Error reporting

For each request the API will evaluate the business division and will report errors per business division. This means that this API can sucesslfully create or update some business divisions while rejecting others.

Example for a response with errors:
```json
{
    "status": "ERROR",
    "message": "Invalid search query",
}
```

## Response Fields for business division

#### `id` [Unique] 
Unique ID for this Business Division. This field is a *primary key* and should be used whenever this business division needs to be updated.

> This field can and should be used as **primary key** to detect if Business Division will be created or updated when using the Update or create API [Business Division Update or Create](./api-business/division-update-or-create)

#### `name` [String] 
The business division name. This field is required. 

#### `users` [[UserId]]

Users that belongs this Business Division. This field is an array of UserIds `users: ["507f1f77bcf86cd7994","507f1f77bcf86cd1234"]`.

#### `responsibles` [[UserId]]

Users that will have extra privileges for this Business Division. This field is an array of UserIds `responsibles: ["507f1f77bcf86cd7994","507f1f77bcf86cd1234"]`. 

#### `active` [{`true`,`false`}]

This field defines if the business division is active or not. Valid options are `true`, `false`. 

#### `parent` [Business DivisionId]

Parent Business Division of this Business Division. This indicates if this Business Division is a child of another Business Division. This setting is optional and is used when setting hierarchies.

#### `businessDivision` [BusinessDivisionID]

This field defines the Business Division of Business Division. This needs to be a valid Business Division ID.

#### `allowCandidatesApply` [{`true`,`false`}]

If your company have the ATS module enabled this field indicates if this Business Division is listed on the ATS module as eligible for candidates applications.

#### `tags` [[String]]

Arbitrary tags associated with this Business Division. 

Tags can also be expressed in key value format, when using `:`. Tags that uses the format of `key:value`, enhancing reports and statics. Example: `project:secret`, `status:new`, `division:yes`

