---
id: api-area-get-id
title: Area API | GET Area
sidebar_label: Get Area
---

## API Summary

| Endpoint | **https://api.feedback.house/api/planning/area/v1/query/:id** |
|----------|-------------------------------------------------|
| Method   | **GET** |
| Format   | **JSON** |

## API details

This endpoint allows querying and retrieving `area`. 

Given the id of area, the api will query for it and return if found.

### Response 

This API will return a object `area`. 

```json
area: { "name": "Area 1", "emails": ["area1@yourcompany.com"], ... },
```

When no area is found the object will be empty
```json
area: {}
```

### Error reporting

Example for a response with errors:
```json
{
    "status": "ERROR",
    "message": "Invalid search query",
}
```

## Response Fields for each Area

#### `id` [Unique] 
Unique ID for this Area. This field is a *primary key* and should be used whenever this area needs to be updated.

> This field can and should be used as **primary key** to detect if Area will be created or updated when using the Update or create API [area Update or Create](./api-area-update-or-create)

#### `name` [String] 
The area full name. This field is required. 

#### `users` [[UserId]]

Users that belongs this Area. This field is an array of UserIds `users: ["507f1f77bcf86cd7994","507f1f77bcf86cd1234"]`. 

#### `managers` [[UserId]]

Users that will have extra privileges for this Area. This field is an array of UserIds `managers: ["507f1f77bcf86cd7994","507f1f77bcf86cd1234"]`. 

#### `active` [{`true`,`false`}]

This field defines if the area is active or not. Valid options are `true`, `false`. 

#### `parent` [AreaId]

Parent Area of this Area. This indicates if this Area is a child of another Area. This setting is optional and is used when setting hierarchies.

#### `businessDivision` [BusinessDivisionID]

This field defines the Business Division of Area. This needs to be a valid Business Division ID.

#### `allowCandidatesApply` [{`true`,`false`}]

If your company have the ATS module enabled this field indicates if this Area is listed on the ATS module as eligible for candidates applications.

#### `tags` [[String]]

Arbitrary tags associated with this Area. 

Tags can also be expressed in key value format, when using `:`. Tags that uses the format of `key:value`, enhancing reports and statics. Example: `project:secret`, `status:new`, `valid:yes`

