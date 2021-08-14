<div align="center">
 <h2>World Texting Foundation</h2>
</div>

<p>World Texting Foundation messaging acronyms Restful API.</p>

## Getting started
The API requires Node.js 10.0+. Checkout the [docs](https://nodejs.org/en/) to see installation guidelines.

#### Installation guidelines
- Clone the [repository](https://github.com/PaulSebalu/acronym) using ```https://github.com/PaulSebalu/acronym.git```
- On your command line, switch to the app root directory
- Install dependencies using `npm install`
- create an  ```.env``` file and specify the ```DATABASE_URL```, ```DB_TEST``` and ```secretkey```.
- DB URL format: ```'postgres://postgres:postgres@localhost:5432/b4kmart-test'```.
- Parameters in the URL are the database type, user, password, server instance and the database name.
- Run tests using `npm run test`
- Start the development server using `npm run dev`
- Use [postman](https://www.getpostman.com/downloads/) to test the endpoints listed below

<br>

<div>
 <h3>API Endpoints</h3>
</div>

<strong>Request headers:</strong><br>
``` Content-Type: application/json```<br>
```Authorization: Bearer<space>token```<br>

- `GET /acronym?from=50&limit=10&search=:search` &nbsp; List acronyms
- `POST /acronym` &nbsp; Create an acronym
- `PUT /acronym/:id` &nbsp; Edit an acronym
- `DELETE /acronym` &nbsp; Delete an acronym
