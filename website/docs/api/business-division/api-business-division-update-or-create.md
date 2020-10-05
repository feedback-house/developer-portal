---
id: api-business-division-update-or-create
title: "Business Division API | Update or Create"
sidebar_label: Update or Create
---

## API Summary

| Endpoint | **https://api.feedback.house/api/planning/business-division/v1/update-or-create** |
|----------|-------------------------------------------------------------|
| Method   | **POST** |
| Format   | **JSON** |
| Idempotent | **YES**, using primary keys |

## API details

This endpoint supports creating or updating Business Divisions. This API was intentionally designed with idea that it will first try find and update existing Business Divisions and only when no existing Business Division is found a new one will be created. 

This design allows this API to be regularly be called by your company. With this API you have a single endpoint that can handle multiple scenarios such as: Create new Business Division, update Business Division details (name for example), or even disable existing Business Division.

When calling this API must design your code to pass the latest, most recent business division information. If an existing Business Division is found, *using the primary keys*, the business division will be updated. Only when no existing Business Division is found the API will create a new business division.

### Batch Operations

This endpoint supports `batch` operations and as such expects **an array of business divisions** (*in the format of an array of objects*). Each object must contain the Business Division details:

```json
{
    businessDivisions: [
     { "name": "Business Division 1", ... },
     { "name": "Business Division 2", "address": "56, 3rd Ave, New York, NY 10003", ... },
     { "name": "Business Division 3", "managers": ["507f1f77bcf86cd799439011"], "allowCandidatesApply": true, ... },
     ...
    ]
}
```

If you need to create or update just one business division you can call the API with just one business division in the array object:

```json
{
  businessDivisions: [ { "name": "business division 1", "active": true, ... },]
}
```


### Response and Error reporting

For each request the API will evaluate each business division individually and will report errors per business division. This means that this API can successfully create or update some business divisions while rejecting others.

Response example for a request without errors:
```json
{
    "status": "OK",
    "message": "Created 10 | Updated 105 | Errors 0",
    "errors": []
}
```

Response example for a request **with errors**. In the example bellow the `business division` field was incorrectly set as `businessDivisionName`, since this field is required the API returned a error for this business division.
```json
{
    "status": "OK",
    "message": "Created 3 | Updated 2 | Errors 1",
    "errors": [
        {
        "object": {
            "businessDivisionName": "Business Division Name",
            ...
        },
        "message": "Missing name field"
    }
}
```

## Idempotency Primary Keys

Primay keys fields define if business divisions will be updated or created. In simple terms: If one of the primary keys in the business division payload is found in the business division database the business division will be updated. 

New business divisions are created only when none of the provided keys is found.

Primary key fields:
- `businessDivisionId` - The associated unique Id of this Business Division.
- `correlationId` - The business division employeeId in the context of your company. You can use any key here as long you can control it.

Notes:
- Primary keys are not required, however when no primary keys are defined a new business division will be created upon each request.
- Calling a API with the same payload a second time (ie. same keys) will not create a new business division, it will update the previously created business division.

## Available Fields per Business Division

The only required fields are `name` and one of the primary key fields; We strongly recommend that you use additional keys to control how business divisions are created, otherwise this can lead to duplicated business divisions.


#### `id` [Business DivisionId] 
Unique identifcation number for this Business Division. This field is option, if not provied a new unique field will be created.
This field is a *primary key* and should be used whenever this business division needs to be updated.

#### `correlationId` [String]
The business division employeeId in the context of your company. You can use any key here as long you can control it.

#### `name` [String] 
The business division name. This field is required.  

> This field will also be used as **primary key** to detect if business divisions will be created or updated.
