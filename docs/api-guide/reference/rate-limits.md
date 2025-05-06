---
sidebar_position: 2
---

# Rate limits

<!-- vale Google.We = NO -->

To protect our infrastructure, we enforce the following rate limits to protect our API and website:

<!-- vale Google.We = YES -->

- 100 req/min for all product read requests
  - GET `/api/v\*/product` requests
  - Reading product page
- 10 req/min for all search queries
  - GET `/api/v\*/search`
  - GET `/cgi/search.pl`
- 2 req/min for facet queries
  - For example `/categories`, `/label/organic`, `/ingredient/salt/category/breads`

:::info

There is no limit on product write requests

:::

If your requests come from your users directly - for example, a mobile app - the rate limits apply per user.

## Bans

<!-- vale off -->

If these limits are reached, we reserve the right to deny you access to the website and the API through an IP address ban.

If your IP address has been banned, feel free to [email us](mailto:reuse@openfoodfacts.org) to explain why you reached the limits. Reverting the ban is possible.

## Bulk downloads

If you need to fetch a significant fraction of the database, we recommend [downloading the data as a CSV or JSONL file](https://world.openfoodfacts.org/data) directly. If you need to download images in bulk, we have a [guide for that](https://openfoodfacts.github.io/openfoodfacts-server/api/how-to-download-images/).

<!-- vale on -->
