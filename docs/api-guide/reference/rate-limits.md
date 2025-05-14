---
sidebar_position: 2
---

# Rate limits

<!-- vale Google.We = NO -->

We enforce rate limits to protect our API and website infrastructure.

<!-- vale Google.We = YES -->

If your requests come from your users directly - for example, a mobile app - the rate limits apply per user.

:::info

There is no rate limit on product write requests

:::

### Product read requests

Limit: 100 req/min.

Examples:

- GET `/api/v\*/product` requests
- Viewing product pages

### Search queries

Limit: 10 req/min.

Examples:

- GET `/api/v\*/search`
- GET `/cgi/search.pl`

### Facet queries

Limit: 2 req/min.

Examples:

- `/categories`
- `/label/organic`
- `/ingredient/salt/category/breads`

## Bans

<!-- vale off -->

If these limits are reached, we reserve the right to deny you access to the website and the API through an IP address ban.

If your IP address has been banned, feel free to [email us](mailto:reuse@openfoodfacts.org) to explain why you reached the limits. Reverting the ban is possible.

## Bulk downloads

If you need to fetch a significant fraction of the database, we recommend [downloading the data as a CSV or JSONL file](https://world.openfoodfacts.org/data) directly. If you need to download images in bulk, we have a [guide for that](https://openfoodfacts.github.io/openfoodfacts-server/api/how-to-download-images/).

<!-- vale on -->
