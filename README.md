<div align="center">
 <h2>World Texting Foundation</h2>
</div>

<p>World Texting Foundation messaging acronyms Restful API.</p>

## Getting started
The API requires Node.js 10.0+. Checkout the [docs](https://nodejs.org/en/) to see installation guidelines.

#### Installation guidelines
- Clone the [repository](https://github.com/PaulSebalu/acronym) using ```https://github.com/PaulSebalu/acronym.git```
- On your command line, switch to the app root directory
- Install dependencies using `yarn install`
- create an  ```.env``` file and specify the ```DATABASE_URL```, ```TEST_DATABASE_URL``` and ```secretkey```.
- DB URL format: ```postgres://{user}:{password}@{hostname}:{port}/{database-name}```.
- Run migrations using `DATABASE_URL=postgres://{user}:{password}@{hostname}:{port}/{database-name} npm run migrate:up`
- (Optional) Load initial test data using `npm run load:db`
- Create a token to access the endpoints using `npm run token:create`
- (Optional) Run tests using `DATABASE_URL=postgres://{user}:{password}@{hostname}:{port}/{database-name} npm run test` )( :bomb: Make sure to use the URL to the test database)
- Start the development server using `npm run dev`
- Use [postman](https://www.getpostman.com/downloads/) to test the endpoints listed below

#### Using Docker
- Make sure to install and configure docker on your development environment
- Navigate to the app root directory
- Run `docker compose-up` and test the endpoints
- Use the token `eyJhbGciOiJIUzI1NiJ9.ZGV2ZWxvcG1lbnQ.PihyA-FiMXlNaI9DLNLqLiS_8-GVdKyjeTFEPmA4rrY` to test the endpoints


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
