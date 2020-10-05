---
id: api-business-division-delete
title: "Business Division API | DELETE Business Division"
sidebar_label: DELETE Business Division
---

## API Summary

| Endpoint | **https://api.feedback.house/api/planning/business-division/v1/query/:id** |
| -------- | ---------------------------------------------------------- |
| Method   | **DELETE**                                                 |
| Format   | **JSON**                                                   |

## API details

This endpoint allows delete `business division`.

Given the id of business division, the api will delete it and return the id.

### Response

This API will return a objectId.

```json
{
  "status": "OK",
  "businessDivision": "ObjectId",
}
```

When no business division is found the api return an error object with informations about it

```json
{
  "error": {
    "data": "ObjectId",
    "message": "Business division not found",
  },
  "status": "ERROR",
  "businessDivision": null
```

### Error reporting

Example for a response with errors:

```json
{
  "error": {
    "data": "fake_id",
    "message": "Invalid id",
  },
  "status": "ERROR",
  "businessDivision": null,
}
```

## Response Fields for Business Division deleted

#### `id` [Unique]

Unique ID for this business division. If business division succeeded deleted, the api will return he/she id.
