# LibraryManagementBoot

This project completes the Spring Boot exercise for the library management scenario.

## Included

- Spring Boot Maven project
- Spring Web, Spring Data JPA, and H2 Database dependencies
- H2 database configuration in `application.properties`
- `Book` JPA entity
- `BookRepository` interface
- `BookController` with CRUD endpoints

## Run

```powershell
mvn spring-boot:run
```

## Endpoints

- `GET /books`
- `GET /books/{id}`
- `POST /books`
- `PUT /books/{id}`
- `DELETE /books/{id}`
