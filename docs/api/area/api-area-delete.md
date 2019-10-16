---
id: api-area-delete
title: Area API | DELETE Area
sidebar_label: Delete Area
---

## API Summary

| Endpoint | **https://api.feedback.house/api/planning/area/v1/query/:id** |
| -------- | ---------------------------------------------------------- |
| Method   | **DELETE**                                                 |
| Format   | **JSON**                                                   |

## API details

This endpoint allows delete `area`.

Given the id of area, the api will delete it and return the id.

### Response

This API will return a objectId.

```json
{
  "status": "OK",
  "area": "ObjectId",
}
```

When no area is found the api return an error object with informations about it

```json
{
  "error": {
    "data": "ObjectId",
    "message": "Area not found",
  },
  "status": "ERROR",
  "area": null
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
  "area": null,
}
```

## Response Fields for Area deleted

#### `id` [Unique]

Unique ID for this area. If area succeeded deleted, the api will return he/she id.
