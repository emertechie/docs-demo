---
sidebar_position: 2
---

# Authentication

Only write operations to the Open Food Facts API require authentication. However, all requests should include a custom `User-Agent` header to identify the source app, as shown below.

## Identify your app

To prevent the API treating requests from your app as bot requests, always send a custom `User-Agent` HTTP header to identify your app. The value should be in the form of `AppName/Version (ContactEmail)`, as shown in the example below:

```bash
User-Agent: MyApp/1.0 (myapp@example.com)
```

## Write access

Write operations such as editing products or uploading images require authentication. Write operations are any requests that use the `POST`, `PUT`, or `DELETE` HTTP verbs. To authenticate these requests, follow the steps below.

### 1. Create an account

- Create an account on the [Open Food Facts](https://world.openfoodfacts.org/) website for your app
  - If you are testing, create an account on the [staging version](https://world.openfoodfacts.net/) of the website, which uses the **.net** domain
- Notify reuse@openfoodfacts.org of the username, to grant it special app privileges

:::note

Production and staging [environments](/docs/api-guide/reference/environments) have different account databases. Ensure you use production account credentials for a production environment request, and staging credentials for a staging request.

:::

#### Global account

You can create a global account to allow your app users to contribute without registering individual accounts on the Open Food Facts website. If you use a global account, send the following parameters in the body of your write requests:

- `app_name` - The name of your app
- `app_version` - The current version of your app
- `app_uuid` - A salted random uuid for the user so that Open Food Facts moderators can selectively ban any problematic user without banning your whole app account.

### 2. Choose authentication method

<!-- vale Google.Parens = NO -->

#### Session authentication <span class="badge badge--primary margin-left--sm">recommended</span>

<!-- vale Google.Parens = YES -->

Use the [login API](/docs/api-v2/get-cgi-session-pl) to get a session cookie and use this cookie for authentication in your subsequent requests.

Session authentication has the following restrictions:

- The IP address must remain the same for all session requests
- A single user can have a maximum of 10 sessions. Older sessions are automatically logged out to stay within the limit

#### Include credentials in request body

If session authentication is not suitable for your use case, include your [Open Food Facts](https://world.openfoodfacts.org/) account credentials in the body of write requests by setting the `user_id` and `username` parameters.

---

:::note

The team plans to implement a modern authentication system called Keycloak this year.

:::
