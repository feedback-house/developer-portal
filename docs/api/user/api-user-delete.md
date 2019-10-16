---
id: api-user-delete
title: User API | DELETE User
sidebar_label: Delete User
---

## API Summary

| Endpoint | **https://api.feedback.house/api/common/user/v1/users/:id** |
| -------- | ---------------------------------------------------------- |
| Method   | **DELETE**                                                 |
| Format   | **JSON**                                                   |

## API details

This endpoint allows delete `User`.

Given the id of user, the api will delete it and return the id.

### Response

This API will return a objectId.

```json
{
  "status": "OK",
  "user": "ObjectId",
}
```

When no user is found the api return an error object with informations about it

```json
{
  "error": {
    "data": "ObjectId",
    "message": "User not found",
  },
  "status": "ERROR",
  "user": null
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
  "user": null,
}
```

## Response Fields for User deleted

#### `id` [Unique]

Unique ID for this User. If user succeeded deleted, the api will return the User id.
