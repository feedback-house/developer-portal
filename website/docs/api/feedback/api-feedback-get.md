---
id: api-feedback-get
title: "Feedback API | GET Feedbacks"
sidebar_label: GET Feedbacks
---

## API Summary

| Endpoint | **https://api.feedback.house/api/common/feedback/v1/feedbacks** |
|----------|---------------------------------------------------|
| Method   | **GET** |
| Format   | **JSON** |

## API Pagination

This api always return a object that contains pagination information like those below. This object will have fields iterative and informative. 
If you don't pass values for `skip` or `limit`, it will assume `skip: 0` and `limit: 100` by default.

### Iterative
| Name | Description|
|----------|-------------------------------------------------|
| skip   | Specify a number for record return |
| limit   | Specify a threshold for record return |
| user   | Specify a user identifier to fetch all feedbacks for given user |

### Informative
| Name | Description|
|----------|-------------------------------------------------|
| totalCount   | Total count of records |
| hasPreviousPage   | If has a previous page of records |
| hasNextPage   | If has a next page of records |

```json
  "pageInfo": Object {
    "hasNextPage": false,
    "hasPreviousPage": false,
    "limit": 100,
    "skip": 0,
    "totalCount": 7,
  },
```

## API details

This endpoint allows querying and retrieving `Feedback` data.

Given the size of your company you may need to paginate this API in other to retrieve all resources.

### Response 

This API will return multiple `feedbacks` in **an array of feedbacks** (*in the format of an array of objects*). 

```json

  "feedbacks": Array [
    Object {
      "_id": "ObjectId",
      "anonymous": false,
      "author": Object {
        "_id": "ObjectId",
        "active": true,
        "company": "ObjectId",
        "correlationID": "EMPLOYEE_5",
        "createdAt": "FROZEN-CREATEDAT",
        "emails": Array [],
        "isBlocked": false,
        "lang": "en",
        "manager": "ObjectId",
        "name": "The user who gave the feedback",
        "nick": "the-user-who-gave-the-feedback",
        "phoneNumbers": Array [],
        "roleGroups": Array [
          "ObjectId",
        ],
        "roles": Array [],
        "tags": Array [],
        "updatedAt": "FROZEN-UPDATEDAT",
      },
      "comments": Array [],
      "internal": true,
      "isSelfReview": false,
      "manager": "EMPTY",
      "meanScore": 5,
      "score": 5,
      "user": Object {
        "_id": "ObjectId",
        "active": true,
        "company": "ObjectId",
        "correlationID": "EMPLOYEE_3",
        "createdAt": "FROZEN-CREATEDAT",
        "emails": Array [],
        "isBlocked": false,
        "lang": "en",
        "manager": "ObjectId",
        "name": "The user who received the feedback",
        "nick": "the-user-who-received-the-feedback",
        "phoneNumbers": Array [],
        "roleGroups": Array [
          "ObjectId",
        ],
        "roles": Array [],
        "tags": Array [],
        "updatedAt": "FROZEN-UPDATEDAT"
      }
    }
  ]
```

When no feedbacks are found the array will be empty
```json
feedbacks: []
```

### Error reporting

For each request the API will evaluate each feedback individually and will report errors per feedback. This means that this API can sucesslfully create or update some feedbacks while rejecting others.

Example for a response with errors:
```json
{
    "status": "ERROR",
    "message": "Invalid search query",
}
```
