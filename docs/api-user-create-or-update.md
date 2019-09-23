---
id: api-user-create
title: User API | Create or Update
---

## API Summary

Endpoint: **https://api.feedback.house/api/user/v1/update-or-create**

Method: **POST**

Format: **JSON**

Idempotent: **YES**, using primary keys

## API details

This endpoint supports creating or updating users. This API was intentionaly designed with idea that it will first try find and update users and only whe no existing user is found a new one will be created. This design allows this API to be regurlaly be called by your company. With this API you have a single endpoint that can handle multiple scenarios such as: User addmision, change user's manager, change user's area, or even disabling users when they leave your company.

When calling this API must design your code to pass the latest, most updated user information. If an existing user is found, *using the primary keys*, the user will be updated. Only when no existing user is found the API will create a new user.

### Batch Operations

This edpoint supports `batch` operations and as such expects **an array of users** (*in the format of an array of objects*) containing each users details:

```json
users: [
 { "name": "User 1", "emails": ["user1@yourcompany.com"], ... },
 { "name": "User 2", "emails": ["user2@yourcompany.com","anotheru@company.com"], ... },
 { "name": "User 3", "emails": ["user3@yourcompany.com"], "gender": "MALE", ... },
 ...
]
```

If you need to create or update just one user you can call the API with just one user in the array object:

```json
users: [ { "name": "User 1", "emails": ["user1@yourcompany.com"], ... },]
```


### Error reporting

For each request the API will evaluate each user individually and will report errors per user. This means that this API can sucesslfully create or update some users while rejecting others.

## Idempotency Primary Keys

Primay keys fields define if users will be updated or created. In simple terms: If one of the primary keys in the user payload is found in the user database the user will be updated. 

New users are created only when none of the provided keys is found.

Primary key fields:
- `emails` - The associated emails of a user are primary keys. Since users can have multiple emails, if one email is found the user will be updated.
- `taxId` - The user taxID. (*ie. CPF, Social Security Number*)
- `employeeId` - The user employeeId in the context of your company. You can use any key here as long you can controll it.

Notes:
- Primary keys are not required, however when no primary keys are defined in the payload a new user will be created upon each request.
- Calling a API with the same payload a second time (ie. same keys) will not create a new user, it will update the previsuly created user.

## Available Fields per user

The only required field is `title`; however, we provide options to add author information to your blog post as well along with other options.

- `name` - The user fullname. This field is required. 
- `emails` - The associated emails of this user. Users can have multiple emails. This field expects an array in the format `emails: ['email1@yourcompany.com','email2@yourcompany.com']`. This field will also be used as primary key to detect if users will be created or updated.
- `gender` - Gender of the user. 
- `groups` - Groups that this user bellongs to. Needs to be a valid `GroupID`
- `title` - The user job post title. This a string.
- `active` - Defines if the user is active or not.

This is a link to [another document.](doc3.md)  
This is a link to an [external page.](http://www.example.com)
