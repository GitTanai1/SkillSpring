# LibraryManagement

This Maven project completes the Spring Core and Maven exercises for the library management scenario.

## Included

- Maven project named `LibraryManagement`
- Spring Context, Spring AOP, Spring WebMVC, and AspectJ Weaver dependencies
- Java 1.8 Maven compiler configuration
- `applicationContext.xml` in `src/main/resources`
- XML bean configuration for `BookService` and `BookRepository`
- Constructor and setter dependency injection
- Annotation-based components with `@Service`, `@Repository`, and component scanning
- Spring AOP logging with before, after, and execution-time advice
- Main class that loads the Spring XML context and tests the configuration

## Run

```powershell
mvn clean compile exec:java
```
