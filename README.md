# drivenpass-back

A Typescript designed project to manage passwords

## API Reference

### Create user

```http
POST /users/signup
```

#### Request:

| Body       | Type     | Description                                     |
| :--------- | :------- | :---------------------------------------------- |
| `email`    | `string` | **Required**. user email                        |
| `password` | `string` | **Required**. user password (min 10 characters) |

#

### Login user

```http
POST /users/login
```

#### Request:

| Body       | Type     | Description                                     |
| :--------- | :------- | :---------------------------------------------- |
| `email`    | `string` | **Required**. user email                        |
| `password` | `string` | **Required**. user password (min 10 characters) |

#### Response:

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTY2MzA4MTA0NCwiZXhwIjoxNjYzMTY3NDQ0fQ.Jw1WBTldKKjhfsSmqtcbZewvPxvO_pBOl2Sz26EGu5Q"
}
```

#

### Create a credential

```http
POST /credentials
```

#### Request:

| Body       | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `url`      | `string` | **Required**. credential url      |
| `username` | `string` | **Required**. credential username |
| `password` | `string` | **Required**. credential password |
| `title`    | `string` | **Required**. credential title    |

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#

### List credentials

```http
GET /credentials
```

#### Request:

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#### Response:

```json
[
  {
    "id": 2,
    "userId": 3,
    "url": "https://www.janedoe.com.br/",
    "username": "jane doe",
    "password": "1234",
    "title": "Jane Doe",
    "createdAt": "2022-09-12T12:26:39.226Z"
  },
  {
    ...
  }
]
```

#

### List a credential

```http
GET /credentials/:credentialId
```

#### Request:

| Params         | Type      | Description                 |
| :------------- | :-------- | :-------------------------- |
| `credentialId` | `integer` | **Required**. credential id |

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#### Response:

```json
{
  "id": 2,
  "userId": 3,
  "url": "https://www.janedoe.com.br/",
  "username": "jane doe",
  "password": "1234",
  "title": "Jane Doe",
  "createdAt": "2022-09-12T12:26:39.226Z"
}
```

#

### Delete a credential

```http
DELETE /credentials/:credentialId
```

#### Request:

| Params         | Type      | Description                 |
| :------------- | :-------- | :-------------------------- |
| `credentialId` | `integer` | **Required**. credential id |

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#

### Create a note

```http
POST /notes
```

#### Request:

| Body    | Type     | Description                                   |
| :------ | :------- | :-------------------------------------------- |
| `text`  | `string` | **Required**. note text (max 1000 characters) |
| `title` | `string` | **Required**. note title (max 50 characters)  |

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#

### List notes

```http
GET /notes
```

#### Request:

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#### Response:

```json
[
  {
    "id": 2,
    "userId": 3,
    "title": "Jane Doe note title",
    "text": "Jane Doe note text",
    "createdAt": "2022-09-12T12:26:44.731Z"
  },
  {
    ...
  }
]
```

#

### List a note

```http
GET /notes/:noteId
```

#### Request:

| Params   | Type      | Description           |
| :------- | :-------- | :-------------------- |
| `noteId` | `integer` | **Required**. note id |

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#### Response:

```json
{
    "id": 2,
    "userId": 3,
    "title": "Jane Doe note title",
    "text": "Jane Doe note text",
    "createdAt": "2022-09-12T12:26:44.731Z"
  },
```

#

### Delete a note

```http
DELETE /notes/:noteId
```

#### Request:

| Params   | Type      | Description           |
| :------- | :-------- | :-------------------- |
| `noteId` | `integer` | **Required**. note id |

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#

### Create a wifi

```http
POST /wifis
```

#### Request:

| Body              | Type     | Description                     |
| :---------------- | :------- | :------------------------------ |
| `wifiNetworkName` | `string` | **Required**. wifi network name |
| `password`        | `string` | **Required**. wifi password     |
| `title`           | `string` | **Required**. wifi title        |

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#

### List wifis

```http
GET /wifis
```

#### Request:

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#### Response:

```json
[
  {
    "id": 2,
    "userId": 3,
    "wifiNetworkName": "Jane Doe network name",
    "password": "1234",
    "title": "Jane Doe network title",
    "createdAt": "2022-09-12T12:26:54.877Z"
  },
  {
    ...
  }
]
```

#

### List a wifi

```http
GET /wifis/:wifiId
```

#### Request:

| Params   | Type      | Description           |
| :------- | :-------- | :-------------------- |
| `wifiId` | `integer` | **Required**. wifi id |

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#### Response:

```json
{
  "id": 2,
  "userId": 3,
  "wifiNetworkName": "Jane Doe network name",
  "password": "1234",
  "title": "Jane Doe network title",
  "createdAt": "2022-09-12T12:26:54.877Z"
}
```

#

### Delete a note

```http
DELETE /notes/:noteId
```

#### Request:

| Params   | Type      | Description           |
| :------- | :-------- | :-------------------- |
| `wifiId` | `integer` | **Required**. wifi id |

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#

### Create a card

```http
POST /cards
```

#### Request:

| Body             | Type      | Description                                         |
| :--------------- | :-------- | :-------------------------------------------------- |
| `number`         | `string`  | **Required**. card number (16 characters)           |
| `cardholderName` | `string`  | **Required**. card cardholderName (3-30 characters) |
| `expirationDate` | `string`  | **Required**. card expirationDate                   |
| `securityCode`   | `string`  | **Required**. card securityCode (3 characters)      |
| `isVirtual`      | `boolean` | **Required**. card isVirtual (true or false)        |
| `type`           | `string`  | **Required**. card type                             |
| `password`       | `string`  | **Required**. card password (4 characters)          |
| `title`          | `string`  | **Required**. card title                            |

`Valid type: [credit, debit, both]`

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#

### List cards

```http
GET /cards
```

#### Request:

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#### Response:

```json
[
  {
    "id": 2,
    "userId": 3,
    "number": "1234567891011121",
    "cardholderName": "JANE D DOE",
    "securityCode": "123",
    "expirationDate": "09/22",
    "password": "1234",
    "isVirtual": false,
    "type": "credit",
    "title": "Jane Doe credit card",
    "createdAt": "2022-09-12T12:26:50.217Z"
  },
  {
    ...
  }
]
```

#

### List a card

```http
GET /cards/:cardId
```

#### Request:

| Params   | Type      | Description           |
| :------- | :-------- | :-------------------- |
| `cardId` | `integer` | **Required**. card id |

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#### Response:

```json
{
  "id": 2,
  "userId": 3,
  "number": "1234567891011121",
  "cardholderName": "JANE D DOE",
  "securityCode": "123",
  "expirationDate": "09/22",
  "password": "1234",
  "isVirtual": false,
  "type": "credit",
  "title": "Jane Doe credit card",
  "createdAt": "2022-09-12T12:26:50.217Z"
}
```

#

### Delete a card

```http
DELETE /cards/:cardId
```

#### Request:

| Params   | Type      | Description           |
| :------- | :-------- | :-------------------- |
| `cardId` | `integer` | **Required**. card id |

| Headers         | Type     | Description                |
| :-------------- | :------- | :------------------------- |
| `Authorization` | `string` | **Required**. Bearer token |

#
