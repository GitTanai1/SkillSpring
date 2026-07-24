# Question 2: Secure an API Endpoint Using JWT

This exercise focuses on securing sensitive API routes in our ASP.NET Core microservices, allowing access only to requests containing a valid JWT authorization token.

## Implementation Details

### 1. Add `[Authorize]` Attribute to Controllers
To secure endpoints, apply the `[Authorize]` attribute filter class from the `Microsoft.AspNetCore.Authorization` namespace to your controllers or actions:
```csharp
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class SecureController : ControllerBase
{
    [HttpGet("data")]
    [Authorize]
    public IActionResult GetSecureData()
    {
        return Ok("This is protected data.");
    }
}
```

### 2. Test Secure Endpoint Access
- **Without Bearer Token:** Requesting `GET /api/secure/data` will yield an HTTP `401 Unauthorized` status response.
- **With Bearer Token:** Set the request header `Authorization: Bearer <token_string>` using a token retrieved from the login endpoint. The endpoint will return HTTP `200 OK` with the string content: `"This is protected data."`
