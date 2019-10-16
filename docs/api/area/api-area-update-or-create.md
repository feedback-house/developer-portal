---
id: api-area-update-or-create
title: Area API | Update or Create
sidebar_label: Update or Create
---

## API Summary

| Endpoint | **https://api.feedback.house/api/planning/area/v1/update-or-create'** |
|----------|-------------------------------------------------------------|
| Method   | **POST** |
| Format   | **JSON** |
| Idempotent | **YES**, using primary keys |

## API details

This endpoint supports creating or updating `Areas`. 

Area is the smallest unit of a group of colleagues working with a single purpose. Traditionally `Areas` have a dedicated manager, however the platform supports areas without a manager.  

This API was intentionally designed with idea that it will first try find and update existing Areas and only when no existing Area is found a new one will be created. 

This design allows this API to be regularly be called by your company. With this API you have a single endpoint that can handle multiple scenarios such as: Create new Area, update Area details (name for example), or even disable Area.

When calling this API must design your code to pass the latest, most updated area information. If an existing Area is found, *using the primary keys*, the area will be updated. Only when no existing Area is found the API will create a new area.

### Batch Operations

This endpoint supports `batch` operations and as such expects **an array of areas** (*in the format of an array of objects*). Each object must contain the Area details:

```json
{
    areas: [
     { "name": "Area 1", ... },
     { "name": "Area 2", "address": "56, 3rd Ave, New York, NY 10003", ... },
     { "name": "Area 3", "managers": ["507f1f77bcf86cd799439011"], "allowCandidatesApply": true, ... },
     ...
    ]
}
```

If you need to create or update just one area you can call the API with just one area in the array object:

```json
areas: [ { "name": "area 1", "active": true, ... },]
```


### Response and Error reporting

For each request the API will evaluate each area individually and will report errors per area. This means that this API can successfully create or update some areas while rejecting others.

Response example for a request without errors:
```json
{
    "status": "OK",
    "message": "Created 10 | Updated 105 | Errors 0",
    "data": [
      {  "name": "Area 1", ... },
      {  "name": "Area 2", ... },
    ],
    "errors": []
}
```

Response example for a request **with errors**. In the example bellow the `area` field was incorrectly set as `areaname`, since this field is required the API returned a error for this area.
```json
{
    "status": "OK",
    "message": "Created 3 | Updated 2 | Errors 1",
    "errors": [
        {
        "object": {
            "name": "Area Name",
            ...
        },
        "message": "Missing name field"
    }
}
```

## Idempotent Primary Keys

Primary keys fields define if areas will be updated or created. In simple terms: If one of the primary keys in the area payload is found in the area database the area will be updated. 

New areas are created only when none of the provided keys is found.

Primary key fields:
- `id` - The associated unique Id of this Area.
- `correlationID` - The area employeeId in the context of your company. You can use any key here as long you can control it.

Notes:
- Primary keys are not required, however when no primary keys are defined a new area will be created upon each request.
- Calling a API with the same payload a second time (ie. same keys) will not create a new area, it will update the previously created area.

## Available Fields per Area

The only required field is `name` and just when the id was not passed. So when is creating a new area, the name will be required; We strongly recommend that you use additional keys to control how areas are created, otherwise this can lead to duplicated areas.

#### `id` [AreaId] 
Unique identification number for this Area. This field is option, if not provided a new unique field will be created.
This field is a *primary key* and should be used whenever this area needs to be updated.

#### `name` [String] 
The area name. This field is required when id was not provided. 

#### `businessDivision` [BusinessDivisionID]

Business Division that this Area Belongs. 

Area can only belong to one Business Division. 

This field is optional

#### `active` [{`true`,`false`}]

This field defines if the Area is active or not. Valid options are `true`, `false`. 

This field is not required, if not provided defaults to `active`.

#### `parent` [AreaId]

Parent Area that this Area belongs to. This allows creating complex hierarquies.

Needs to be a valid `AreaId`.

Note the API will test for circlular references, this means that a child cannot be a parent to another area, even in a nested chain.

#### `managers` [[UserId]]

This field defines the Users that are responsible for this Area. 

This field expects an array of users in the format `managers: ["507f1f77bcf86cd799439011", "507f1f77bcf86cd799439011"]`. 

#### `allowCandidatesApply` [{`true`,`false`}]

If your company have the ATS module enable it will list this area as public places that candidates can apply to. 

This field is not required, when not provided defaults `false`.

#### `tags` [[String]]

Arbitrary tags associated with this Area. 

Tags can also be expressed in key value format, when using `:`. Tags that uses the format of `key:value`, enhancing reports and statics. Example: `project:secret`, `status:new`, `sap:yes`
