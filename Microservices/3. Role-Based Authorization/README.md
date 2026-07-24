# Question 3: Add Role-Based Authorization

This exercise demonstrates how to restrict specific endpoints based on user roles, allowing access only to authenticated users possessing the necessary role claims.

## Implementation Details

### 1. Add Roles to JWT Claims
Modify your token generation process (inside `AuthController.cs`) to inject role claims during creation:
```csharp
var claims = new[]
{
    new Claim(ClaimTypes.Name, username),
    new Claim(ClaimTypes.Role, "Admin") // Inject the 'Admin' role claim
};
```

### 2. Guard Endpoints Using Role Filters
Attach the `[Authorize(Roles = "Admin")]` attribute to restrict endpoint access:
```csharp
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class AdminController : ControllerBase
{
    [HttpGet("dashboard")]
    [Authorize(Roles = "Admin")]
    public IActionResult GetAdminDashboard()
    {
        return Ok("Welcome to the admin dashboard.");
    }
}
```
Requests carrying a valid token that does not contain the `Admin` role claim will automatically be rejected with an HTTP `403 Forbidden` response.
