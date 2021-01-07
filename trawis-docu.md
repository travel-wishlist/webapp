# travel-wishlist

​
List of available endpoints:
​
- `POST /register`
- `POST /login`
- `POST /loginGoogle`
- `PUT /users/:id`
- `GET /wishlists`
- `POST /wishlists`
- `PUT /wishlists/:idCity`
- `PATCH /wishlists/:idCity`
- `DELETE /wishlists/:idCity`
- `GET /openWeatherApi/:cityName`
- `GET /newsApi`
- `GET /worldTimeApi`


### POST /register

Request:

- data:

```json
{
  "username": "string",
  "password": "string",
  "email": "string",
  "userCity": "string",
}
```

Response:

- status: 201
- body:
  ​

```json
{
  "id": "integer",
  "username": "string",
  "email": "string",
  "userCity": "string"
}
```

- status: 400 - Bad Request
- body:
  ​

```json
{
  "message": ["error message", "error message"]
}
```

- status: 500 - Internal Server Error
- body:
  ​

```json
{
  "message": "Internal Server Error
}
```

### POST /login

Request:

- data:

```json
{
  "username": "string",
  "password": "string"
}
```

Response:

- status: 200
- body:
  ​

```json
{
    "access_token": "jwt string"
}
```

- status: 400 - Bad Request
- body:
  ​

```json
{
  "message": "error message"
}
```

- status: 500 - Internal Server Error
- body:
  ​

```json
{
  "message": "Internal Server Error"
}
```

