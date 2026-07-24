# Question 1: Implement JWT Authentication in ASP.NET Core Web API

This exercise focuses on implementing secure login using JSON Web Tokens (JWT) inside an ASP.NET Core Web API.

## Implementation Details

### 1. Install NuGet Packages
Run the following CLI command to add JwtBearer authentication capabilities to the ASP.NET project:
```bash
dotnet add package Microsoft.AspNetCore.Authentication.JwtBearer
```

### 2. Configure appsettings.json
Define the JWT parameters (Issuer, Audience, Secret Signing Key, and Expiration duration) under the configuration root:
```json
"Jwt": {
  "Key": "ThisIsASecretKeyForJwtTokenThisIsASecretKeyForJwtToken",
  "Issuer": "MyAuthServer",
  "Audience": "MyApiUsers",
  "DurationInMinutes": 60
}
```
*Note: Under modern .NET Core, using a key shorter than 256-bits (32 bytes) with HMAC-SHA256 will throw a runtime validation exception. We have extended the secret key to satisfy this.*

### 3. Register authentication middleware in Program.cs
Setup JWT verification handlers:
```csharp
builder.Services.AddAuthentication("Bearer")
    .AddJwtBearer("Bearer", options => {
        options.TokenValidationParameters = new TokenValidationParameters {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]!))
        };
    });
builder.Services.AddAuthorization();
```

### 4. Create AuthController.cs
Implement the `/api/auth/login` POST endpoint which validates model credentials (mocked to accept Username `admin` and Password `password`) and signs a new token using HMAC-SHA256.
