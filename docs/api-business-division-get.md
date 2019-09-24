---
id: api-business-division-get
title: Business Division API | Get Data
---

## API Summary

| Endpoint | **https://api.feedback.house/api/planning/v1/business division** |
|----------|---------------------------------------------------|
| Method   | **GET** |
| Format   | **JSON** |

## API details

This endpoint allows quering and retriving `Business Division` data. This API will return the most recent and updated `business division` as possible.

Given the size of your company you may need to paginate this API in other to retrive all resources.

### Response 

This API will return multiple `business divisions` in **an array of business divisions** (*in the format of an array of objects*). 

```json
business divisions: [
 { 
    "id": "507f1f77bcf86cd799439011", 
    "name": "Business Division 1", 
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
    "name": "Business Division 2", 
    "responsibles":[
         "507f1f77bcf86cd7994",
         "232507f1f77bcf86cd"
        ], 
    ... 
},
{
    "id": "507f1f77bcf86cd799439033", 
    "name": "Business Division 3", 
    "parent": "507f1f77bcf86cd799439011",
    ...
}
 ...
]
```

When no business divisions are found the array will be empty
```json
business divisions: []
```

### Error reporting

For each request the API will evaluate each business division individually and will report errors per business division. This means that this API can sucesslfully create or update some business divisions while rejecting others.

Example for a response with errors:
```json
{
    "status": "ERROR",
    "message": "Invalid search query",
}
```

## Reponse Fields for each business division

The only required fields are `name` and one of the primary key fields; We strongly recommend that you use additional keys to control how business divisions are created, otherwise this can lead to duplicated business divisions.

#### `id` [Unique] 
Unique ID for this Business Division. This field is a *primary key* and should be used whenever this business division needs to be updated.

> This field can and should be used as **primary key** to detect if Business Division will be created or updated when using the Update or create API [business division Update or Create](./api-business division-update-or-create)

#### `name` [String] 
The business division fullname. This field is required. 

#### `responsibles` [[UserId]]

Users that will have extra priviledges for this Business Division. This field is an array of UserIds `responsibles: ["507f1f77bcf86cd7994","507f1f77bcf86cd1234"]`. 

#### `active` [{`true`,`false`}]

This fileld defines if the business division is active or not. Valid options are `true`, `false`. 

#### `parent` [Business DivisionId]

Parent Business Division of this Business Division. This indicates if this Business Division is a child of another Business Division. This setting is optional and is used when setting hierarquies.

#### `businessDivision` [BusinessDivisionID]

This fileld defines the Business Division of Business Division. This needs to be a valid Business Division ID.

#### `allowCandidatesApply` [{`true`,`false`}]

If your company have the ATS module enabled this field indicates if this Business Division is listed on the ATS module as eligible for candidates applications.

#### `tags` [[String]]

Arbitrary tags associated with this Business Division. 

Tags can also be expressed in key value format, when using `:`. Tags that uses the format of `key:value`, enhancing reports and statics. Example: `projet:secret`, `status:new`, `erpbusiness division:yes`

