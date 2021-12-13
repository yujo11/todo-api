## 🖥 Installation

```bash
$ npm install
```

## 🏃‍♂️ Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## 🧪 Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 📚 API

### baseUrl

```
localhost:5000
```

### Get all todos

| method | uri   |
| ------ | ----- |
| GET    | /todo |

```json
{
  "response": "[ ... ]"
}
```

### Get todo

| method | uri       |
| ------ | --------- |
| GET    | /todo/:id |

```json
{
  "response": {
    "id": "number",
    "text": "string",
    "completed": "boolean",
    "priority": "primary | secondary | default"
  }
}
```

### Create todo

| method | uri   |
| ------ | ----- |
| POST   | /todo |

```json
{
  "requestBody": {
    "text": "string",
    "completed": "boolean",
    "priority": "primary | secondary | default"
  }
}
```

### Delete todo

| method | uri       |
| ------ | --------- |
| DELETE | /todo/:id |

```json
{
  "response": {}
}
```

### Update todo text

| method | uri       |
| ------ | --------- |
| POST   | /todo/:id |

```json
{
  "requestBody": {
    "text": "string"
  }
}
```

### Update todo completed

| method | uri       |
| ------ | --------- |
| POST   | /todo/:id |

```json
{
  "requestBody": {
    "completed": "boolean"
  }
}
```

### Update todo priority

| method | uri       |
| ------ | --------- |
| POST   | /todo/:id |

```json
{
  "requestBody": {
    "priority": "primary | secondary | default"
  }
}
```

## ⚖️ License

[MIT licensed](LICENSE)
