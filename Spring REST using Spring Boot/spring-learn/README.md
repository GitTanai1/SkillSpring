# spring-learn

Completed Spring REST using Spring Boot hands-on project.

## Covered

- Spring Boot web project with logging on port `8083`
- `date-format.xml` with a `SimpleDateFormat` bean
- `country.xml` with country beans, prototype examples, and country list
- `employee.xml` with static employees and departments
- REST endpoints for hello, countries, employees, and departments
- Global exception handling
- MockMVC tests for country success and not-found scenarios
- JWT authentication endpoint and authorization filter

## Run

```powershell
mvn spring-boot:run
```

## Useful Endpoints

- `GET /hello`
- `GET /country`
- `GET /countries`
- `GET /countries/{code}`
- `POST /countries`
- `GET /employees`
- `GET /employees/{id}`
- `PUT /employees/{id}`
- `DELETE /employees/{id}`
- `GET /departments`
- `GET /authenticate` with Basic Auth, for example `user:pwd`
