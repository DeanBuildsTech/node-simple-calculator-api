# Simple Calculator API

## What it does
A REST API that performs basic arithmetic operations — add, subtract, multiply, and divide.
You send two numbers in a POST request and get the result back. Backend only, no frontend.

## Why I built it
Built this to understand what an API actually is from the inside — not just consuming one,
but building one. Prior experience was only testing APIs via SoapUI. This project covers
Node.js, Express, and how routes and controllers are structured in a backend application.

## How to run it
1. Install dependencies: `npm install`
2. Start the server: `node server.js`
3. Server runs on `http://localhost:3000`

## Endpoints
All endpoints accept a POST request with a JSON body: `{ "a": 5, "b": 3 }`

| Method | Endpoint               | Operation      |
|--------|------------------------|----------------|
| POST   | /calculator/add        | Addition       |
| POST   | /calculator/subtract   | Subtraction    |
| POST   | /calculator/multiply   | Multiplication |
| POST   | /calculator/divide     | Division       |

## What I learned
- How a REST API is structured — routes, controllers, and how requests flow through them
- Node.js needs to be started manually — it is the server, unlike PHP where Apache handles that
- The difference between consuming an API and building one
