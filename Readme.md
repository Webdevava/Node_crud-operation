# Simple Node.js CRUD Backend

This is a simple Node.js CRUD (Create, Read, Update, Delete) backend using Express and MongoDB.

## Dependencies

- [Express](https://www.npmjs.com/package/express): Web framework for Node.js
- [Mongoose](https://www.npmjs.com/package/mongoose): MongoDB object modeling tool
- [dotenv](https://www.npmjs.com/package/dotenv): Loads environment variables from a .env file

## Setup

1. Install dependencies using `npm install`.
2. Create a `.env` file in the root directory with your MongoDB URI and PORT configuration. Example:
- PORT=5000
- MONGODB_URI=mongodb://localhost:27017/mydatabase
3. Start the server using `node index.js`.

## Routes

- **POST(create)**: `http://localhost:5000/api/products`
- **GET(readAll)**: `http://localhost:5000/api/products`
- **GET(readById)**: `http://localhost:5000/api/products/:id`
- **PUT(update)**: `http://localhost:5000/api/products/:id`
- **DELETE**: `http://localhost:5000/api/products/:id`

## Usage

- Use Postman or any API testing tool to perform CRUD operations on products.
- The server runs on `http://localhost:5000`.

## Example


To create a new product, send a POST request to `http://localhost:5000/api/products` with the product data in the request body.

```json
{
"name": "Product Name",
"price": 10.99,
"description": "Product description"
}
```

## Feet Free to Contribue
