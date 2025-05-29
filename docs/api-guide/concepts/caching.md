# Caching

This article discusses how to create a local cache of Open Food Facts data in your application, and when that might be needed.

## When to use a cache

<!-- vale Google.We = NO -->

If your application makes intensive requests which are not driven by user actions such as barcode scans, we encourage you to make use of a cache. Using a cache for these use cases speeds up data access in your application and avoids burdening the Open Food Facts API unnecessarily.

<!-- vale Google.We = YES -->

However, for applications primarily responding to user-generated requests, using a cache may not be necessary. The Open Food Facts API can handle individual user requests efficiently, and direct API usage contributes to valuable scan statistics for the project.

## Existing implementations

The community has already contributed some caching implementations which may work for your use case:

- [openfoodfacts-apirestpython](https://github.com/openfoodfacts/openfoodfacts-apirestpython): A Python-based backend with a MongoDB export. Contributed by the FoodVisor startup.

- Several Open Food Facts projects like [open-prices](https://prices.openfoodfacts.org/) and [robotoff](https://github.com/openfoodfacts/robotoff) have implemented local caches for their own needs. While not immediately reusable, they can serve as valuable references.

## How to implement a cache

If you can't find an existing caching implementation that works for your use case, follow the steps below to implement your own:

- **SDK**: Use the [official SDKs](/docs/api-guide/reference/sdks) to make it easier to work with the Open Food Facts API
- **Data structure design**: Ensure your cache can efficiently store relevant data such as product information, categories, and ingredients.
- **Synchronization**: Develop processes to regularly fetch updates from the Open Food Facts API and refresh your cache
- **Writes**: Ensure writes are successfully sent to the Open Food Facts API first before updating your own cache.

:::note[Real-time notifications]

<!-- vale Google.We = NO -->

Currently, there's no way to receive real-time updates from the Open Food Facts API. However, we have an internal Redis system and are exploring options for a future third party notification API. Express your interest by contacting reuse@openfoodfacts.org.

<!-- vale Google.We = YES -->

:::

## Contribute

<!-- vale Google.We = NO -->
<!-- vale Custom.Exclamation = NO -->

If you're building a local cache, please consider contributing it to the project. Your contributions benefit the entire community, and your solution could become an official recommendation! Let's work together to make Open Food Facts data even more accessible and useful!

<!-- vale Custom.Exclamation = YES -->
<!-- vale Google.We = YES -->
