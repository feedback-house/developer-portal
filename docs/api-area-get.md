---
id: api-area-get
title: Area API | Get Data
---

## API Summary

| Endpoint | **https://api.feedback.house/api/planning/v1/area** |
|----------|---------------------------------------------------|
| Method   | **GET** |
| Format   | **JSON** |

## API details

This endpoint allows quering and retriving `Area` data. This API will return the most recent and updated `area` as possible.

Given the size of your company you may need to paginate this API in other to retrive all resources.

### Response 

This API will return multiple `areas` in **an array of areas** (*in the format of an array of objects*). 

```json
areas: [
 { 
    "id": "507f1f77bcf86cd799439011", 
    "name": "Area 1", 
    "members": [
      "507f1f77bcf86cd7911",
      "507f1f77bcf86cd7912",
      "507f1f77bcf86cd7913",
    ], 
    active: true,
    ...
 },
 { 
    "id": "507f1f77bcf86cd799439022", 
    "name": "Area 2", 
    "responsibles":[
         "507f1f77bcf86cd7994",
         "232507f1f77bcf86cd"
        ], 
    ... 
},
{
    "id": "507f1f77bcf86cd799439033", 
    "name": "Area 3", 
    "parent": "507f1f77bcf86cd799439011",
    ...
}
 ...
]
```

When no areas are found the array will be empty
```json
areas: []
```

### Error reporting

For each request the API will evaluate each area individually and will report errors per area. This means that this API can sucesslfully create or update some areas while rejecting others.

Example for a response with errors:
```json
{
    "status": "ERROR",
    "message": "Invalid search query",
}
```

## Reponse Fields for each area

The only required fields are `name` and one of the primary key fields; We strongly recommend that you use additional keys to control how areas are created, otherwise this can lead to duplicated areas.

#### `id` [Unique] 
Unique ID for this Area. This field is a *primary key* and should be used whenever this area needs to be updated.

> This field can and should be used as **primary key** to detect if Area will be created or updated when using the Update or create API [area Update or Create](./api-area-update-or-create)

#### `name` [String] 
The area fullname. This field is required. 

#### `responsibles` [[UserId]]

Users that will have extra priviledges for this Area. This field is an array of UserIds `responsibles: ["507f1f77bcf86cd7994","507f1f77bcf86cd1234"]`. 

#### `active` [{`true`,`false`}]

This fileld defines if the area is active or not. Valid options are `true`, `false`. 

#### `parent` [AreaId]

Parent Area of this Area. This indicates if this Area is a child of another Area. This setting is optional and is used when setting hierarquies.

#### `businessDivision` [BusinessDivisionID]

This fileld defines the Business Division of Area. This needs to be a valid Business Division ID.

#### `allowCandidatesApply` [{`true`,`false`}]

If your company have the ATS module enabled this field indicates if this Area is listed on the ATS module as eligible for candidates applications.

#### `tags` [[String]]

Arbitrary tags associated with this Area. 

Tags can also be expressed in key value format, when using `:`. Tags that uses the format of `key:value`, enhancing reports and statics. Example: `projet:secret`, `status:new`, `erparea:yes`

