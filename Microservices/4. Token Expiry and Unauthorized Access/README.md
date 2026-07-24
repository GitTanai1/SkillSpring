# Question 4: Validate JWT Token Expiry and Handle Unauthorized Access

This exercise shows how to configure token lifetime verification events, allowing the microservice to gracefully handle expired tokens and return descriptive custom response headers.

## Implementation Details

### 1. Hook Authentication Failed Events in Program.cs
Configure events inside the `AddJwtBearer` pipeline setup to catch expired tokens and append custom headers to the HTTP response:
```csharp
options.Events = new JwtBearerEvents
{
    OnAuthenticationFailed = context =>
    {
        // Check if the failure was specifically caused by token expiration
        if (context.Exception.GetType() == typeof(SecurityTokenExpiredException))
        {
            context.Response.Headers.Append("Token-Expired", "true");
        }
        return Task.CompletedTask;
    }
};
```

### 2. Validation
When a client presents an expired token to a protected endpoint:
- The server rejects the request with a `401 Unauthorized` status code.
- The server appends a custom header `Token-Expired: true` to the response metadata, allowing client-side apps to detect expiration and prompt token refreshes automatically.
