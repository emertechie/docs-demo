---
sidebar_position: 1
---

# Environments

The Open Food Facts API has two environments:

- Production: https://world.openfoodfacts.org
- Staging: https://world.openfoodfacts.net (Note the **.net** domain)

:::warning

Use the staging environment while testing your app to not affect the production database.

:::

## Staging environment authentication

The staging environment requires HTTP basic auth to avoid search engine indexing. The username is `off`, and the password `off`. Here's an example using curl:

```bash
curl -H "Authorization: Basic $(echo -n 'off:off' | base64)" \
  https://world.openfoodfacts.net/api/v2/product/3274080005003.json
```
